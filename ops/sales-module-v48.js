
const URUNK_SALES_BASE="/private/growth/crm/sales";
const URUNK_RETRY_MS=[300000,900000,3600000];
const URUNK_RETRY_LIMIT_MS=20*3600000;
const urunkSalesIso=n=>new Date(n).toISOString();
async function urunkSalesQueue(env,id,payload,now){
 const created=urunkSalesIso(now),body=JSON.stringify(payload);
 if(body.length>50000)throw Error("Notification too large");
 const r=await env.CRM_DB.prepare("INSERT INTO crm_notification_queue(lead_id,payload,idempotency_key,created_at,next_attempt_at) VALUES(?,?,?,?,?) RETURNING lead_id").bind(id,body,"urunk-crm-"+id,created,created).first();
 if(!r?.lead_id)throw Error("Queue insert failed");
}
async function urunkSalesDispatch(env,id,now=Date.now(),send=fetch){
 const db=env.CRM_DB,at=urunkSalesIso(now),token=crypto.randomUUID(),cutoff=urunkSalesIso(now-URUNK_RETRY_LIMIT_MS);
 const q=await db.prepare("UPDATE crm_notification_queue SET attempts=attempts+1,lease_token=?,lease_until=? WHERE lead_id=? AND attempts<4 AND created_at>? AND next_attempt_at<=? AND lease_until<=? RETURNING *").bind(token,urunkSalesIso(now+120000),id,cutoff,at,at).first();
 if(!q)return {state:"not_claimed"};
 let state="unknown",provider=null,retry=true;
 try{
  if(!env.RESEND_API_KEY)throw Error("Provider not configured");
  const payload=JSON.parse(q.payload);
  if(!payload||typeof payload!=="object"||!Array.isArray(payload.to))throw Error("Invalid queue payload");
  const response=await send("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+env.RESEND_API_KEY,"Content-Type":"application/json","Idempotency-Key":q.idempotency_key},body:q.payload,redirect:"error",signal:AbortSignal.timeout(8000)});
  if(response.ok){
   const data=await response.json();
   if(typeof data.id==="string"&&/^[A-Za-z0-9_-]{8,128}$/.test(data.id)){state="accepted";provider=data.id;retry=false;}
  }else if(response.status===429||response.status===409||response.status>=500){state="unknown";}
  else{state="failed";retry=false;}
 }catch{}
 const next=now+(URUNK_RETRY_MS[q.attempts-1]||3600000);
 const again=retry&&q.attempts<4&&next-Date.parse(q.created_at)<URUNK_RETRY_LIMIT_MS;
 const guard=" EXISTS(SELECT 1 FROM crm_notification_queue WHERE lead_id=? AND lease_token=?)";
 const update=db.prepare("UPDATE crm_leads SET notification_status=?,provider_id=COALESCE(?,provider_id),notification_updated_at=? WHERE id=? AND notification_status IN ('pending','unknown','failed') AND"+guard).bind(state,provider,at,id,id,token);
 const finish=again?db.prepare("UPDATE crm_notification_queue SET next_attempt_at=?,lease_token='',lease_until='',last_status=? WHERE lead_id=? AND lease_token=?").bind(urunkSalesIso(next),state,id,token):db.prepare("DELETE FROM crm_notification_queue WHERE lead_id=? AND lease_token=?").bind(id,token);
 const r=await db.batch([update,finish]);if(!r.every(x=>x.success))throw Error("Queue commit failed");
 return {state,provider,retry:again};
}
async function urunkSalesRun(env,now=Date.now(),send=fetch){
 const db=env.CRM_DB,at=urunkSalesIso(now),cutoff=urunkSalesIso(now-URUNK_RETRY_LIMIT_MS);
 await db.batch([
  db.prepare("UPDATE crm_leads SET notification_status='unknown',notification_updated_at=? WHERE notification_status='pending' AND id IN (SELECT lead_id FROM crm_notification_queue WHERE (created_at<=? OR attempts>=4) AND lease_until<=?)").bind(at,cutoff,at),
  db.prepare("DELETE FROM crm_notification_queue WHERE (created_at<=? OR attempts>=4) AND lease_until<=?").bind(cutoff,at)
 ]);
 const rows=await db.prepare("SELECT lead_id FROM crm_notification_queue WHERE next_attempt_at<=? AND lease_until<=? AND attempts<4 AND created_at>? ORDER BY next_attempt_at LIMIT 3").bind(at,at,cutoff).all();
 let accepted=0,attempted=0,errors=0;
 for(const x of rows.results||[]){try{const r=await urunkSalesDispatch(env,x.lead_id,now,send);if(r.state!=="not_claimed")attempted++;if(r.state==="accepted")accepted++}catch{errors++}}
 const remaining=await db.prepare("SELECT COUNT(*) AS n FROM crm_notification_queue").first();
 await db.prepare("INSERT INTO crm_ops_runs(job,last_run,attempted,accepted,remaining,state) VALUES('notifications',?,?,?,?,?) ON CONFLICT(job) DO UPDATE SET last_run=excluded.last_run,attempted=excluded.attempted,accepted=excluded.accepted,remaining=excluded.remaining,state=excluded.state").bind(at,attempted,accepted,remaining?.n||0,errors?"partial":"ok").run();
 return {attempted,accepted,remaining:remaining?.n||0,errors};
}
const URUNK_QUOTE_STATES={draft:"Brouillon",issued:"Envoyé (déclaré)",accepted:"Accepté (déclaré)",declined:"Refusé (déclaré)"};
function urunkSalesDate(value){return value===""||(/^\d{4}-\d{2}-\d{2}$/.test(value)&&Number.isFinite(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value)}
function urunkSalesHtml(title,body){
 return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>'+urunkGrowthEscape(title)+' | URUNK</title><style>@font-face{font-family:Gloock;src:url(/assets/urunk-fonts-v45/Iurb6YFw84WUY4NJiBak.woff2) format("woff2");font-display:swap}@font-face{font-family:Hanken;src:url(/assets/urunk-fonts-v45/ieVn2YZDLWuGJpnzaiwFXS9tYtpd59A.woff2) format("woff2");font-weight:400 600;font-display:swap}*{box-sizing:border-box}body{margin:0;background:#faf9f6;color:#0f2d25;font:16px/1.55 Hanken,system-ui,sans-serif}header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:18px 24px;background:#0f2d25;color:#fff}header a{color:#fff}nav{display:flex;gap:16px;flex-wrap:wrap}main{max-width:1240px;padding:28px 20px 60px;margin:auto}h1,h2,h3{font-family:Gloock,Georgia,serif;font-weight:400;line-height:1.2}h1{font-size:clamp(32px,4vw,48px)}h2{font-size:27px}section,.metric{background:#fff;border:1px solid #dad4c8;border-radius:12px;padding:20px;margin:14px 0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px}.metric strong{display:block;font-size:30px}.muted{color:#52645b}.notice{background:#f3efe7;padding:16px;border-radius:8px}a{color:#895a13;text-underline-offset:3px}table{width:100%;border-collapse:collapse;text-align:left;font-size:14px}td,th{padding:12px;border-bottom:1px solid #dad4c8;overflow-wrap:anywhere}th{background:#f3efe7}.table{overflow:auto}label{display:block;margin:12px 0;font-weight:600}input,select,textarea{display:block;width:100%;min-height:48px;padding:10px 12px;border:1px solid #a9a99f;border-radius:8px;font:inherit;background:white;color:#0f2d25}button,.button{display:inline-block;background:#895a13;color:white;padding:12px 18px;border:0;border-radius:8px;font:600 15px Hanken,system-ui;min-height:48px;text-decoration:none}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid #895a13;outline-offset:3px}@media(max-width:480px){main{padding:20px 14px}section{padding:14px}.grid{grid-template-columns:1fr 1fr}}</style></head><body><header><strong>URUNK · Sales Operations</strong><nav><a href="/private/growth">Analytics</a><a href="/private/growth/crm">CRM</a><a href="/cdn-cgi/access/logout">Déconnexion</a></nav></header><main><h1>'+urunkGrowthEscape(title)+'</h1>'+body+'</main></body></html>';
}
function urunkSalesRender(due,quotes,run,counts,today,poll){
 const e=urunkGrowthEscape,fmt=x=>new Intl.NumberFormat("fr-MA",{maximumFractionDigits:2}).format(Number(x)||0),money=x=>fmt(x/100)+" MAD";
 const metric=(n,v)=>'<div class="metric"><span class="muted">'+e(n)+'</span><strong>'+e(v)+'</strong></div>';
 const table=(h,rows)=>'<div class="table"><table><thead><tr>'+h.map(x=>'<th scope="col">'+e(x)+'</th>').join("")+'</tr></thead><tbody>'+rows.join("")+'</tbody></table></div>';
 const link=r=>'<a href="'+URUNK_SALES_BASE+'?lead='+encodeURIComponent(r.id)+'">Devis</a> · <a href="/private/growth/crm?month='+e(r.created_at.slice(0,7))+'#lead-'+e(r.id)+'">CRM</a>';
 return urunkSalesHtml("Pilotage commercial",'<p class="muted">Relances et devis internes · '+e(today)+' · aucun envoi automatique aux prospects.</p><div class="grid">'+metric("Relances à traiter",counts.due)+metric("Notifications en attente",counts.queued)+metric("Notifications à vérifier",counts.alerts)+metric("Devis enregistrés",counts.quotes)+'</div><section><h2>Relances prioritaires</h2><p>Les dates sont comparées au calendrier de Casablanca. Les opportunités gagnées ou perdues sont exclues.</p>'+(due.length?table(["Prospect","Échéance","Étape","Action"],due.map(r=>'<tr><td>'+e(r.business||r.name)+'</td><td>'+e(r.follow_up)+'</td><td>'+e(URUNK_CRM_LABELS[r.stage])+'</td><td>'+link(r)+'</td></tr>')):'<p>Aucune relance échue.</p>')+'</section><section><h2>Devis et opportunités récentes</h2><p>Un devis interne par prospect. Les états et montants sont déclaratifs, pas des paiements vérifiés.</p>'+(quotes.length?table(["Prospect","Devis","Montant","Action"],quotes.map(r=>'<tr><td>'+e(r.business||r.name)+'</td><td>'+e(URUNK_QUOTE_STATES[r.quote_status]||"Non créé")+'</td><td>'+e(r.amount_minor==null?"—":money(r.amount_minor))+'</td><td>'+link(r)+'</td></tr>')):'<p>Aucun prospect enregistré.</p>')+'</section><section><h2>Suivi des notifications</h2><p class="notice">Relances automatiques des notifications internes seulement, maximum quatre tentatives. Les états inconnus nécessitent une vérification humaine.</p><p>Dernière exécution : '+e(run?.last_run||"Pas encore exécuté")+' · '+e(run?.state||"—")+'</p><p>Traitées : '+e(run?.attempted??"—")+' · acceptées : '+e(run?.accepted??"—")+' · restantes : '+e(run?.remaining??"—")+'</p><p>Vérification Resend : '+e(poll?.state||"Pas encore exécuté")+' · '+e(poll?.last_run||"—")+'</p><a href="/private/growth/crm/export">Rapport commercial mensuel CSV</a></section>');
}
function urunkSalesQuote(lead,quote,csrf){
 const e=urunkGrowthEscape,q=quote||{},opt=Object.entries(URUNK_QUOTE_STATES).map(([k,v])=>'<option value="'+e(k)+'"'+(k===(q.status||"draft")?' selected':'')+'>'+e(v)+'</option>').join("");
 return urunkSalesHtml("Devis interne",'<p><a href="'+URUNK_SALES_BASE+'">Retour au pilotage</a></p><section><h2>'+e(lead.business||lead.name)+'</h2><p>'+e(lead.service)+'</p><p class="notice">Ce document est un brouillon commercial interne. Aucun envoi, signature ou facture n’est généré automatiquement. Vérifiez taxes, conditions et périmètre avant tout envoi.</p><form method="post" action="'+URUNK_SALES_BASE+'"><input type="hidden" name="csrf" value="'+e(csrf)+'"><input type="hidden" name="lead" value="'+e(lead.id)+'"><input type="hidden" name="revision" value="'+e(q.revision??-1)+'"><label>Intitulé<input name="title" maxlength="160" required value="'+e(q.title||lead.service)+'"></label><label>Périmètre et livrables<textarea name="scope" maxlength="6000" rows="8" required>'+e(q.scope||"")+'</textarea></label><div class="grid"><label>Montant déclaré (MAD)<input name="amount" type="number" min="0" max="1000000000" step="0.01" required value="'+e(((q.amount_minor??lead.value_minor??0)/100).toFixed(2))+'"></label><label>Validité<input name="valid" type="date" value="'+e(q.valid_until||"")+'"></label><label>État<select name="status">'+opt+'</select></label></div><button>Enregistrer le devis</button></form></section>');
}
async function urunkSalesRoute(request,env,url){
 const fail=(msg,status)=>urunkCrmResponse(msg,status,"text/plain; charset=utf-8",request.method);
 if(url.hostname!=="urunk.com")return fail("Not found",404);
 if(!["GET","HEAD","POST"].includes(request.method))return fail("Method not allowed",405);
 if(!await urunkGrowthAuthorized(request,env))return fail("Authentication required",403);
 if(!env.CRM_DB)return fail("Sales unavailable",503);
 const db=env.CRM_DB,validId=x=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x||"");
 try{
  if(request.method==="POST"){
   if(request.headers.get("Origin")!=="https://urunk.com"||request.headers.get("Sec-Fetch-Site")==="cross-site")return fail("Forbidden origin",403);
   if(!(request.headers.get("Content-Type")||"").startsWith("application/x-www-form-urlencoded"))return fail("Unsupported media type",415);
   const body=await readBoundedBody(request,30000);if(!body.ok)return fail("Payload too large",413);
   const f=new URLSearchParams(body.text);
   if(f.get("csrf")!==await urunkCrmCsrf(request))return fail("Invalid CSRF",403);
   const id=f.get("lead"),rev=f.has("revision")?Number(f.get("revision")):NaN,title=(f.get("title")||"").trim(),scope=(f.get("scope")||"").trim(),raw=f.get("amount")||"",amount=Math.round(Number(raw)*100),valid=f.get("valid")||"",status=f.get("status"),now=urunkSalesIso(Date.now());
   if(!validId(id)||!Number.isSafeInteger(rev)||rev< -1||title.length<2||title.length>160||!scope||scope.length>6000||!/^\d{1,10}(\.\d{1,2})?$/.test(raw)||!Number.isSafeInteger(amount)||amount<0||amount>100000000000||!urunkSalesDate(valid)||!Object.hasOwn(URUNK_QUOTE_STATES,status))return fail("Invalid fields",400);
   const exists=await db.prepare("SELECT id FROM crm_leads WHERE id=?").bind(id).first();if(!exists)return fail("Not found",404);
   const r=rev===-1?await db.prepare("INSERT INTO crm_quotes(lead_id,title,scope,amount_minor,valid_until,status,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?) ON CONFLICT DO NOTHING RETURNING lead_id").bind(id,title,scope,amount,valid,status,now,now).first():await db.prepare("UPDATE crm_quotes SET title=?,scope=?,amount_minor=?,valid_until=?,status=?,updated_at=?,revision=revision+1 WHERE lead_id=? AND revision=? RETURNING lead_id").bind(title,scope,amount,valid,status,now,id,rev).first();
   if(!r?.lead_id)return fail("Conflict; reload the record",409);
   const out=urunkCrmResponse(null,303,"text/plain; charset=utf-8");out.headers.set("Location",URUNK_SALES_BASE+"?lead="+encodeURIComponent(id));return out;
  }
  const id=url.searchParams.get("lead");
  if(id){if(!validId(id))return fail("Not found",404);const [lead,q]=await Promise.all([db.prepare("SELECT id,name,business,service,value_minor FROM crm_leads WHERE id=?").bind(id).first(),db.prepare("SELECT * FROM crm_quotes WHERE lead_id=?").bind(id).first()]);if(!lead)return fail("Not found",404);return urunkCrmResponse(urunkSalesQuote(lead,q,await urunkCrmCsrf(request)),200,"text/html; charset=utf-8",request.method)}
  const today=new Intl.DateTimeFormat("en-CA",{timeZone:"Africa/Casablanca",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  const [due,quotes,run,counts,poll]=await Promise.all([db.prepare("SELECT id,name,business,stage,follow_up,created_at FROM crm_leads WHERE stage NOT IN ('won','lost') AND follow_up<>'' AND follow_up<=? ORDER BY follow_up LIMIT 50").bind(today).all(),db.prepare("SELECT l.id,l.name,l.business,l.created_at,q.status AS quote_status,q.amount_minor FROM crm_leads l LEFT JOIN crm_quotes q ON q.lead_id=l.id ORDER BY l.created_at DESC LIMIT 50").all(),db.prepare("SELECT * FROM crm_ops_runs WHERE job='notifications'").first(),db.prepare("SELECT (SELECT COUNT(*) FROM crm_leads WHERE stage NOT IN ('won','lost') AND follow_up<>'' AND follow_up<=?) AS due,(SELECT COUNT(*) FROM crm_notification_queue) AS queued,(SELECT COUNT(*) FROM crm_leads WHERE notification_status IN ('unknown','failed','bounced','complained','suppressed')) AS alerts,(SELECT COUNT(*) FROM crm_quotes) AS quotes").bind(today).first(),db.prepare("SELECT * FROM crm_ops_runs WHERE job='delivery_poll'").first()]);
  if(!due.success||!quotes.success||!counts)return fail("Sales unavailable",503);
  return urunkCrmResponse(urunkSalesRender(due.results,quotes.results,run,counts,today,poll),200,"text/html; charset=utf-8",request.method);
 }catch{console.error(JSON.stringify({code:"SALES_ROUTE_FAILED"}));return fail("Sales unavailable",503)}
}

async function urunkSalesPollDelivery(env,now=Date.now(),get=fetch){
 const db=env.CRM_DB,at=urunkSalesIso(now),previous=await db.prepare("SELECT * FROM crm_ops_runs WHERE job='delivery_poll'").first();
 if(previous&&now-Date.parse(previous.last_run)<(previous.state==="permission_denied"?86400000:3600000))return {state:"not_due"};
 const rows=await db.prepare("SELECT id,provider_id,notification_status FROM crm_leads WHERE provider_id IS NOT NULL AND notification_status IN ('accepted','sent','delivery_delayed') AND created_at>? ORDER BY COALESCE(notification_updated_at,created_at) ASC LIMIT 3").bind(urunkSalesIso(now-7*86400000)).all();
 let attempted=0,updated=0,state="ok";
 for(const x of rows.results||[]){
  if(!env.RESEND_API_KEY||!/^[A-Za-z0-9_-]{8,128}$/.test(x.provider_id)){state="partial";continue}
  try{
   attempted++;
   const r=await get("https://api.resend.com/emails/"+encodeURIComponent(x.provider_id),{headers:{Authorization:"Bearer "+env.RESEND_API_KEY},redirect:"error",signal:AbortSignal.timeout(5000)});
   if(r.status===401||r.status===403){state="permission_denied";break}
   if(!r.ok){state="partial";continue}
   const d=await r.json(),next=String(d.last_event||"");
   if(!["sent","delivered","bounced","complained","delivery_delayed","suppressed","failed"].includes(next)){state="partial";continue}
   if(next==="sent"&&x.notification_status==="delivery_delayed")continue;
   const saved=await db.prepare("UPDATE crm_leads SET notification_status=?,notification_updated_at=? WHERE id=? AND provider_id=? AND notification_status=? RETURNING id").bind(next,at,x.id,x.provider_id,x.notification_status).first();
   if(saved&&next!==x.notification_status)updated++;
  }catch{state="partial"}
 }
 await db.prepare("INSERT INTO crm_ops_runs(job,last_run,attempted,accepted,remaining,state) VALUES('delivery_poll',?,?,?,0,?) ON CONFLICT(job) DO UPDATE SET last_run=excluded.last_run,attempted=excluded.attempted,accepted=excluded.accepted,remaining=excluded.remaining,state=excluded.state").bind(at,attempted,updated,state).run();
 return {state,attempted,updated};
}
