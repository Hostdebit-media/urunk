
const URUNK_CRM_STAGES=["new","contacted","qualified","proposal","won","lost"];
const URUNK_CRM_LABELS={new:"Nouveau",contacted:"Contacté",qualified:"Qualifié",proposal:"Proposition",won:"Gagné",lost:"Perdu"};
const URUNK_CRM_NOTIFICATIONS={pending:"En attente",accepted:"Accepté par Resend",failed:"Échec fournisseur",unknown:"À vérifier",sent:"Envoyé",delivered:"Livré",bounced:"Rebond",complained:"Plainte",delivery_delayed:"Retard",suppressed:"Supprimé"};
const urunkCrmHash=async x=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(x))),b=>b.toString(16).padStart(2,"0")).join("");
function urunkCrmPath(x){try{const u=new URL(x||"/","https://urunk.com");return u.origin==="https://urunk.com"||u.origin==="https://www.urunk.com"?u.pathname.slice(0,200):""}catch{return ""}}
function urunkCrmAttribution(a){if(!a||a.consent_analytics!==true)return null;return {consent_analytics:true,landing_page:urunkCrmPath(a.landing_page||""),referrer_host:a.referrer_host||"",utm_source:a.utm_source||"",utm_medium:a.utm_medium||"",utm_campaign:a.utm_campaign||""}}
async function urunkCrmReserve(env,x,now){
 if(!env.CRM_DB)throw Error("CRM unavailable");
 const created=new Date(now).toISOString(),a=urunkCrmAttribution(x.attribution),id=crypto.randomUUID();
 const canonical=JSON.stringify([x.name.toLowerCase(),x.email.toLowerCase(),x.phone.replace(/\D/g,""),x.business.toLowerCase(),x.service.toLowerCase(),x.message]);
 const fingerprint=await urunkCrmHash(created.slice(0,10)+"|"+canonical);
 const key=x.clientKey?await urunkCrmHash("client|"+x.clientKey):null;
 const result=await env.CRM_DB.prepare("INSERT INTO crm_leads(id,request_key,fingerprint,created_at,updated_at,name,email,phone,business,service,message,lang,source,page_path,privacy_accepted_at,analytics_consent,landing_page,referrer_host,utm_source,utm_medium,utm_campaign) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT DO NOTHING").bind(id,key,fingerprint,created,created,x.name,x.email,x.phone,x.business,x.service,x.message,x.lang,x.source,urunkCrmPath(x.pageUrl||x.sourcePage),created,a?1:0,a?.landing_page||"",a?.referrer_host||"",a?.utm_source||"",a?.utm_medium||"",a?.utm_campaign||"").run();
 if(!result.success)throw Error("CRM insert failed");
 return Number(result.meta?.changes)===1?id:null;
}
async function urunkCrmNotify(env,id,status,providerId=null){
 if(!id)return;
 try{await env.CRM_DB.prepare("UPDATE crm_leads SET notification_status=?, provider_id=COALESCE(?,provider_id), notification_updated_at=? WHERE id=? AND notification_status='pending'").bind(status,providerId,new Date().toISOString(),id).run()}catch{console.error(JSON.stringify({code:"CRM_NOTIFICATION_UPDATE_FAILED"}))}
}
function urunkCrmResponse(body,status=200,type="text/html; charset=utf-8",method="GET"){
 const r=urunkGrowthResponse(body,status,type,method);
 r.headers.set("Content-Security-Policy","default-src 'none'; style-src 'unsafe-inline'; font-src 'self'; img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
 return r;
}
const urunkCrmCsrf=async request=>urunkCrmHash("urunk-crm-csrf-v47|"+request.headers.get("Cf-Access-Jwt-Assertion"));
function urunkCrmCsvCell(value){let s=String(value??"");if(/^[\s]*[=+\-@\t\r\n]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'}
function urunkCrmMonth(m){return /^\d{4}-(0[1-9]|1[0-2])$/.test(m||"")&&m.slice(0,4)>="2026"&&m.slice(0,4)<="2100"?m:new Date().toISOString().slice(0,7)}
function urunkCrmRender(rows,stats,csrf,filter,page,month){
 const e=urunkGrowthEscape, esc=e, fmt=x=>new Intl.NumberFormat("fr-MA",{maximumFractionDigits:2}).format(Number(x)||0),money=x=>fmt((Number(x)||0)/100)+" MAD";
 const count=s=>Number(stats.find(r=>r.stage===s)?.n||0),won=stats.find(r=>r.stage==="won"),total=stats.reduce((n,r)=>n+Number(r.n),0),pipeline=stats.filter(x=>!["won","lost"].includes(x.stage)).reduce((n,r)=>n+Number(r.value||0),0);
 const url=(p=0)=>"/private/growth/crm?stage="+encodeURIComponent(filter)+"&month="+encodeURIComponent(month)+"&page="+p;
 const options=(list,current,labels)=>list.map(x=>'<option value="'+e(x)+'"'+(x===current?' selected':'')+'>'+e(labels[x]||x)+'</option>').join("");
 const card=(label,value,detail)=>'<div class="metric"><small>'+e(label)+'</small><strong>'+e(value)+'</strong><small>'+e(detail)+'</small></div>';
 const action=(r,name)=>'<input type="hidden" name="csrf" value="'+e(csrf)+'"><input type="hidden" name="id" value="'+e(r.id)+'"><input type="hidden" name="revision" value="'+e(r.revision)+'"><input type="hidden" name="action" value="'+e(name)+'">';
 const lead=r=>'<article><div class="head"><div><h3>'+e(r.business||r.name)+'</h3><p>'+e(r.name)+' · '+e(r.service)+'</p><small>'+e(r.created_at)+' · '+e(r.source)+' · '+e(r.lang.toUpperCase())+'</small></div><span class="pill">'+e(URUNK_CRM_LABELS[r.stage])+'</span></div><dl><dt>Courriel</dt><dd>'+e(r.email||"—")+'</dd><dt>Téléphone</dt><dd>'+e(r.phone||"—")+'</dd><dt>Page</dt><dd>'+e(r.page_path||"—")+'</dd><dt>Attribution</dt><dd>'+e(r.analytics_consent?([r.utm_source,r.utm_medium,r.utm_campaign].filter(Boolean).join(" / ")||r.referrer_host||"Consentement donné, source inconnue"):"Non consentie")+'</dd><dt>Notification</dt><dd>'+e(URUNK_CRM_NOTIFICATIONS[r.notification_status]||r.notification_status)+'</dd></dl><details><summary>Message reçu</summary><p class="message">'+e(r.message||"—")+'</p></details><form method="post" action="/private/growth/crm">'+action(r,"update")+'<div class="fields"><label>Étape<select name="stage">'+options(URUNK_CRM_STAGES,r.stage,URUNK_CRM_LABELS)+'</select></label><label>Montant potentiel / signé (MAD)<input name="value" type="number" min="0" max="1000000000" step="0.01" value="'+e((r.value_minor/100).toFixed(2))+'" required></label><label>Prochaine relance<input type="date" name="follow_up" value="'+e(r.follow_up||"")+'"></label></div><label>Note commerciale<textarea name="note" maxlength="2000" rows="3">'+e(r.note||"")+'</textarea></label><button type="submit">Enregistrer</button></form>'+(r.provider_id?'<form method="post" action="/private/growth/crm">'+action(r,"delivery")+'<button class="secondary" type="submit">Vérifier la livraison Resend</button></form>':'')+'<details class="danger"><summary>Effacer ce prospect</summary><form method="post" action="/private/growth/crm">'+action(r,"erase")+'<label>Pour confirmer l’effacement définitif, saisir SUPPRIMER<input name="confirm" required autocomplete="off"></label><button class="secondary" type="submit">Effacer définitivement</button></form></details></article>';
 const style='*{box-sizing:border-box}body{margin:0;background:#faf9f6;color:#0f2d25;font:16px/1.55 system-ui,sans-serif}header{padding:18px 24px;background:#0f2d25;color:white;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}header a{color:white}main{max-width:1240px;margin:auto;padding:28px 20px 64px}h1,h2,h3{font-family:Georgia,serif;font-weight:400;line-height:1.2;margin:0 0 12px}h1{font-size:clamp(32px,4vw,48px)}h3{font-size:24px}a{color:#895a13;text-underline-offset:3px}.grid,.fields{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px}.metric,article,.notice{background:white;border:1px solid #dad4c8;border-radius:12px;padding:20px}.metric strong{display:block;font-size:28px;margin:6px 0}.notice{background:#f3efe7;margin:20px 0}.head{display:flex;justify-content:space-between;gap:12px;align-items:start}.head p{margin:0}.pill{border-radius:20px;background:#f3efe7;padding:6px 12px;font-size:13px;white-space:nowrap}article{margin:16px 0}dl{display:grid;grid-template-columns:115px minmax(0,1fr);gap:7px;margin:18px 0}dt{font-weight:600}dd{margin:0;overflow-wrap:anywhere}form{margin:14px 0}label{display:block;font-size:14px;font-weight:600;margin:8px 0}input,select,textarea{width:100%;display:block;margin-top:5px;padding:10px 12px;border:1px solid #a9a99f;border-radius:8px;min-height:48px;font:inherit;background:white;color:#0f2d25}button,.button{display:inline-block;padding:12px 18px;background:#895a13;color:white;border:1px solid #895a13;border-radius:8px;text-decoration:none;font:600 15px system-ui;cursor:pointer;min-height:48px}.secondary{background:white;color:#0f2d25;border-color:#0f2d25}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,summary:focus-visible{outline:2px solid #895a13;outline-offset:3px}.message{white-space:pre-wrap;overflow-wrap:anywhere}.danger{margin-top:20px;border-top:1px solid #dad4c8;padding-top:12px}small{color:#52645b}nav{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:20px 0}@media(max-width:480px){.grid,.fields{grid-template-columns:minmax(0,1fr)}.head{flex-direction:column}dl{grid-template-columns:90px minmax(0,1fr)}main{padding:20px 14px}article{padding:16px}}';
 return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>URUNK | CRM</title><style>'+style+'</style></head><body><header><strong>URUNK · Lead Intelligence</strong><nav><a href="/private/growth">Analytics</a><a href="/cdn-cgi/access/logout">Déconnexion</a></nav></header><main><h1>Prospects & suivi commercial</h1><p>Demandes enregistrées depuis la mise en service du CRM V4.7. Les demandes antérieures ne sont pas importées.</p><div class="notice">Les montants signés sont déclarés par le propriétaire ; ils ne représentent pas des encaissements vérifiés. L’acceptation Resend ne prouve pas la livraison. Données privées, à utiliser uniquement pour traiter les demandes.</div><div class="grid">'+card("Demandes",fmt(total),month)+card("Qualifiés",fmt(count("qualified")+count("proposal")+count("won")),"Étapes actuelles")+card("Pipeline",money(pipeline),"Montants ouverts")+card("Projets gagnés",fmt(count("won")),money(won?.value))+'</div><form method="get" action="/private/growth/crm"><div class="fields"><label>Mois<input type="month" name="month" value="'+e(month)+'" required></label><label>Étape<select name="stage">'+options(["all",...URUNK_CRM_STAGES],filter,{all:"Toutes",...URUNK_CRM_LABELS})+'</select></label></div><button>Filtrer</button> <a class="button secondary" href="/private/growth/crm/export?month='+e(month)+'">Exporter le rapport mensuel</a></form><h2>Demandes</h2>'+(rows.length?rows.map(lead).join(""):'<article>Aucune demande enregistrée pour ce filtre.</article>')+'<nav aria-label="Pagination">'+(page>0?'<a href="'+e(url(page-1))+'">Précédent</a>':'')+'<span>Page '+(page+1)+'</span>'+(rows.length===25?'<a href="'+e(url(page+1))+'">Suivant</a>':'')+'</nav></main></body></html>';
}
async function urunkCrmRoute(request,env,url){
 const fail=(msg,status)=>urunkCrmResponse(msg,status,"text/plain; charset=utf-8",request.method);
 if(url.hostname!=="urunk.com")return fail("Not found",404);
 if(!["GET","HEAD","POST"].includes(request.method))return fail("Method not allowed",405);
 if(!await urunkGrowthAuthorized(request,env))return fail("Authentication required",403);
 if(!env.CRM_DB)return fail("CRM unavailable",503);
 const path=url.pathname.replace(/\/$/,""),db=env.CRM_DB,month=urunkCrmMonth(url.searchParams.get("month"));
 if(!["/private/growth/crm","/private/growth/crm/export"].includes(path))return fail("Not found",404);
 try{
  if(request.method==="POST"){
   if(path!=="/private/growth/crm")return fail("Method not allowed",405);
   if(request.headers.get("Origin")!=="https://urunk.com"||request.headers.get("Sec-Fetch-Site")==="cross-site")return fail("Forbidden origin",403);
   if(!(request.headers.get("Content-Type")||"").startsWith("application/x-www-form-urlencoded"))return fail("Unsupported content type",415);
   const b=await readBoundedBody(request,8192);if(!b.ok)return fail("Payload too large",413);
   const f=new URLSearchParams(b.text),csrf=await urunkCrmCsrf(request);
   if(f.get("csrf")!==csrf)return fail("Invalid CSRF",403);
   const id=f.get("id")||"",revision=Number(f.get("revision"));
   if(!/^[0-9a-f-]{36}$/i.test(id)||!Number.isSafeInteger(revision)||revision<0)return fail("Invalid request",400);
   const action=f.get("action"),now=new Date().toISOString();
   if(action==="update"){
    const stage=f.get("stage")||"",raw=f.get("value")||"",value=Math.round(Number(raw)*100),date=f.get("follow_up")||"",note=(f.get("note")||"").trim();
    if(!URUNK_CRM_STAGES.includes(stage)||!/^\d{1,10}(\.\d{1,2})?$/.test(raw)||!Number.isSafeInteger(value)||value<0||value>100000000000||note.length>2000||(date&&(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)))return fail("Invalid fields",400);
    const r=await db.prepare("UPDATE crm_leads SET stage=?,value_minor=?,follow_up=?,note=?,updated_at=?,revision=revision+1 WHERE id=? AND revision=?").bind(stage,value,date,note,now,id,revision).run();if(!r.success||r.meta?.changes!==1)return fail("Conflict; reload the record",409);
   }else if(action==="delivery"){
    const lead=await db.prepare("SELECT provider_id,notification_status FROM crm_leads WHERE id=?").bind(id).first();
    if(!lead||!lead.provider_id||!/^[A-Za-z0-9_-]{8,128}$/.test(lead.provider_id)||!env.RESEND_API_KEY)return fail("Delivery status unavailable",409);
    let res;try{res=await fetch("https://api.resend.com/emails/"+encodeURIComponent(lead.provider_id),{headers:{Authorization:"Bearer "+env.RESEND_API_KEY},redirect:"error",signal:AbortSignal.timeout(5000)})}catch{return fail("Provider unavailable",502)}
    if(!res.ok)return fail("Provider status not accessible",502);
    const data=await res.json(),status=String(data.last_event||"");
    if(!["sent","delivered","bounced","complained","delivery_delayed","suppressed","failed"].includes(status))return fail("No verified delivery state available",409);
    const r=await db.prepare("UPDATE crm_leads SET notification_status=?,notification_updated_at=? WHERE id=? AND notification_status=?").bind(status,now,id,lead.notification_status).run();if(!r.success||r.meta?.changes!==1)return fail("Status changed; retry",409);
   }else if(action==="erase"){
    if(f.get("confirm")!=="SUPPRIMER")return fail("Confirmation required",400);
    const r=await db.batch([db.prepare("DELETE FROM crm_history WHERE lead_id=? AND EXISTS(SELECT 1 FROM crm_leads WHERE id=? AND revision=?)").bind(id,id,revision),db.prepare("DELETE FROM crm_leads WHERE id=? AND revision=?").bind(id,revision)]);if(!r.every(x=>x.success)||r[1].meta?.changes!==1)return fail("Conflict; reload the record",409);
   }else return fail("Invalid action",400);
   const out=urunkCrmResponse(null,303,"text/plain; charset=utf-8");out.headers.set("Location","/private/growth/crm");return out;
  }
  if(path.endsWith("/export")){
   const r=await db.prepare("SELECT stage,source,COUNT(*) AS leads,COALESCE(SUM(value_minor),0) AS value_minor FROM crm_leads WHERE substr(created_at,1,7)=? GROUP BY stage,source ORDER BY stage,source").bind(month).all();
   if(!r.success)return fail("Report unavailable",503);
   const lines=[["month","stage","form_source","leads","declared_value_MAD"],...r.results.map(x=>[month,x.stage,x.source,x.leads,(x.value_minor/100).toFixed(2)])].map(x=>x.map(urunkCrmCsvCell).join(",")).join("\r\n");
   const out=urunkCrmResponse(lines,200,"text/csv; charset=utf-8",request.method);out.headers.set("Content-Disposition",'attachment; filename="urunk-crm-'+month+'.csv"');return out;
  }
  const filter=URUNK_CRM_STAGES.includes(url.searchParams.get("stage"))?url.searchParams.get("stage"):"all",rawPage=Number(url.searchParams.get("page")||0),page=Number.isSafeInteger(rawPage)?Math.max(0,Math.min(1000,rawPage)):0;
  const [r,s]=await Promise.all([db.prepare("SELECT * FROM crm_leads WHERE substr(created_at,1,7)=? AND (?='all' OR stage=?) ORDER BY created_at DESC,id DESC LIMIT 25 OFFSET ?").bind(month,filter,filter,page*25).all(),db.prepare("SELECT stage,COUNT(*) AS n,COALESCE(SUM(value_minor),0) AS value FROM crm_leads WHERE substr(created_at,1,7)=? GROUP BY stage").bind(month).all()]);
  if(!r.success||!s.success)return fail("CRM unavailable",503);
  return urunkCrmResponse(urunkCrmRender(r.results,s.results,await urunkCrmCsrf(request),filter,page,month),200,"text/html; charset=utf-8",request.method);
 }catch{console.error(JSON.stringify({code:"CRM_ROUTE_FAILED"}));return fail("CRM unavailable",503)}
}
