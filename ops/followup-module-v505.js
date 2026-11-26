// V5.0.5 — derived follow-up schedule; no external message sending.
const URUNK_FOLLOW_BASE="/private/growth/crm/follow-up";
function urunkFollowTodayV505(now=new Date()){
 const p=new Intl.DateTimeFormat("en-CA",{timeZone:"Africa/Casablanca",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(now);
 const v=t=>p.find(x=>x.type===t).value;
 return v("year")+"-"+v("month")+"-"+v("day");
}
function urunkFollowAddV505(date,days){const d=new Date(date+"T00:00:00Z");d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10)}
function urunkFollowDelayV505(score){return score>=80?1:score>=55?3:7}
const URUNK_FOLLOW_CTE_V505="WITH scored AS (SELECT l.*,q.status AS quote_status,q.valid_until AS quote_until,q.updated_at AS quote_updated,"+URUNK_QUAL_SQL_SCORE+" AS score FROM crm_leads l LEFT JOIN crm_quotes q ON q.lead_id=l.id WHERE l.stage NOT IN ('won','lost')), scheduled AS (SELECT *,CASE WHEN follow_up<>'' THEN follow_up ELSE date(CASE WHEN last_follow_up_at<>'' THEN last_follow_up_at ELSE created_at END,CASE WHEN score>=80 THEN '+1 day' WHEN score>=55 THEN '+3 days' ELSE '+7 days' END) END AS due_date, CASE WHEN quote_status='issued' AND quote_until<>'' AND (last_follow_up_at='' OR date(last_follow_up_at)<date(quote_until,'-3 days') OR quote_updated>last_follow_up_at) THEN date(quote_until,'-3 days') ELSE NULL END AS quote_due FROM scored), queue AS (SELECT *,CASE WHEN quote_due IS NOT NULL AND quote_due<due_date THEN quote_due ELSE due_date END AS next_date FROM scheduled) ";
function urunkFollowDraftV505(r){
 const fr=r.lang!=="en",name=r.name||"",issued=r.quote_status==="issued",contacted=!!r.last_follow_up_at||r.stage!=="new";
 const subject=fr?(issued?"Suivi de votre devis URUNK":contacted?"Suite à votre demande URUNK":"Votre demande auprès d’URUNK"):(issued?"Following up on your URUNK proposal":contacted?"Following up on your URUNK inquiry":"Your inquiry with URUNK");
 const body=fr?( "Bonjour "+name+",\n\n"+(issued?"Je reviens vers vous au sujet de votre devis. Avez-vous des questions sur le périmètre ou souhaitez-vous convenir d’un échange ?":contacted?"Je reviens vers vous au sujet de votre demande. Souhaitez-vous préciser vos priorités ou convenir d’un échange ?":"Merci pour votre demande. Pour mieux comprendre votre projet, pourrions-nous préciser vos objectifs et votre calendrier ?")+"\n\nCordialement,\nURUNK"):("Hello "+name+",\n\n"+(issued?"I am following up on your proposal. Do you have any questions about the scope, or would you like to arrange a discussion?":contacted?"I am following up on your inquiry. Would you like to clarify your priorities or arrange a discussion?":"Thank you for your inquiry. Could we clarify your objectives and timeframe to better understand your project?")+"\n\nKind regards,\nURUNK");
 return {subject,body};
}
async function urunkFollowRouteV505(request,env,url){
 const fail=(msg,status)=>urunkCrmResponse(msg,status,"text/plain; charset=utf-8",request.method);
 if(url.hostname!=="urunk.com")return fail("Not found",404);
 if(!["GET","HEAD","POST"].includes(request.method))return fail("Method not allowed",405);
 if(!await urunkGrowthAuthorized(request,env))return urunkAccessRecoveryV491(request);
 if(!env.CRM_DB)return fail("CRM unavailable",503);
 const db=env.CRM_DB,today=urunkFollowTodayV505();
 const filter=["all","overdue","today","upcoming","quotes"].includes(url.searchParams.get("filter"))?url.searchParams.get("filter"):"all";
 const raw=Number(url.searchParams.get("page")||0),page=Number.isSafeInteger(raw)?Math.min(1000,Math.max(0,raw)):0;
 try{
  if(request.method==="POST"){
   if(request.headers.get("Origin")!=="https://urunk.com"||request.headers.get("Sec-Fetch-Site")==="cross-site")return fail("Forbidden origin",403);
   if(!(request.headers.get("Content-Type")||"").startsWith("application/x-www-form-urlencoded"))return fail("Unsupported content type",415);
   const b=await readBoundedBody(request,8192);if(!b.ok)return fail("Payload too large",413);
   const f=new URLSearchParams(b.text);if(f.get("csrf")!==await urunkCrmCsrf(request))return fail("Invalid CSRF",403);
   const id=f.get("id")||"",rev=f.get("revision")||"",action=f.get("action"),date=f.get("date")||"";
   if(!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)||!/^\d{1,12}$/.test(rev)||!["schedule","record"].includes(action)||!date||!urunkSalesDate(date)||date<today||date>urunkFollowAddV505(today,730))return fail("Invalid follow-up fields",400);
   if(action==="record"&&f.get("confirmed")!=="yes")return fail("Confirm completed human contact",400);
   const now=new Date().toISOString();
   const r=await db.prepare("UPDATE crm_leads SET follow_up=?,last_follow_up_at=CASE WHEN ?='record' THEN ? ELSE last_follow_up_at END,updated_at=?,revision=revision+1 WHERE id=? AND revision=? AND stage NOT IN ('won','lost') RETURNING id").bind(date,action,now,now,id,Number(rev)).first();
   if(!r?.id)return fail("Conflict; reload the record",409);
   const out=urunkCrmResponse(null,303,"text/plain; charset=utf-8");out.headers.set("Location",URUNK_FOLLOW_BASE+"?filter="+filter+"&page="+page);return out;
  }
  const where={all:"1=1",overdue:"next_date<?",today:"next_date=?",upcoming:"next_date>?",quotes:"quote_due IS NOT NULL AND quote_due<=?"}[filter];
  const args=filter==="all"?[]:[today];
  const [rows,counts,pipeline]=await Promise.all([
   db.prepare(URUNK_FOLLOW_CTE_V505+"SELECT id,revision,name,business,lang,service,stage,email,phone,score,follow_up,last_follow_up_at,due_date,next_date,quote_status,quote_until,quote_due,created_at FROM queue WHERE "+where+" ORDER BY next_date ASC,score DESC,id ASC LIMIT 26 OFFSET ?").bind(...args,page*25).all(),
   db.prepare(URUNK_FOLLOW_CTE_V505+"SELECT COUNT(*) AS open,SUM(next_date<?) AS overdue,SUM(next_date=?) AS today,SUM(next_date>?) AS upcoming,SUM(quote_due IS NOT NULL AND quote_due<=?) AS quotes FROM queue").bind(today,today,today,today).first(),
   db.prepare("SELECT stage,COUNT(*) AS n,COALESCE(SUM(value_minor),0) AS value_minor FROM crm_leads GROUP BY stage").all()
  ]);
  if(!rows.success||!counts||!pipeline.success)return fail("Follow-up unavailable",503);
  const leads=rows.results.slice(0,25),csrf=await urunkCrmCsrf(request),e=urunkGrowthEscape;
  const history=leads.length?await db.batch(leads.map(r=>db.prepare("SELECT occurred_at,action,previous_stage,next_stage FROM crm_history WHERE lead_id=? ORDER BY id DESC LIMIT 8").bind(r.id))):[];
  if(history.some(x=>!x.success))return fail("History unavailable",503);
  const labels={all:"Tous les ouverts",overdue:"En retard",today:"Aujourd’hui",upcoming:"À venir",quotes:"Devis à relancer"};
  const link=p=>URUNK_FOLLOW_BASE+"?filter="+filter+"&page="+p;
  const card=(name,n)=>'<div class="metric"><small>'+e(name)+'</small><strong>'+Number(n||0)+'</strong></div>';
  const fmt=n=>new Intl.NumberFormat("fr-MA",{maximumFractionDigits:2}).format(Number(n||0)/100)+" MAD";
  const stageNames={new:"Nouveau",contacted:"Contacté",qualified:"Qualifié",proposal:"Proposition",won:"Gagné",lost:"Perdu"};
  const pipelineCards=Object.keys(stageNames).map(s=>{const r=pipeline.results.find(x=>x.stage===s);return '<div class="metric"><small>'+e(stageNames[s])+'</small><strong>'+Number(r?.n||0)+'</strong><small>'+e(fmt(r?.value_minor))+' déclarés</small></div>'}).join("");
  const content=leads.map((r,i)=>{
   const draft=urunkFollowDraftV505(r),recommended=urunkFollowAddV505(today,urunkFollowDelayV505(r.score)),planned=r.follow_up>=today?r.follow_up:recommended;
   const events=(history[i]?.results||[]).map(x=>'<li>'+e(x.occurred_at)+' · '+e(x.action)+(x.previous_stage&&x.next_stage?' · '+e(x.previous_stage)+' → '+e(x.next_stage):'')+'</li>').join("");
   return '<article><h3>'+e(r.business||r.name)+'</h3><p>'+e(r.service)+' · '+e(stageNames[r.stage]||r.stage)+' · '+r.score+'/100</p><p><strong>Prochaine action : '+e(r.next_date||"—")+'</strong> · '+(r.next_date<today?"En retard":r.next_date===today?"Aujourd’hui":"À venir")+' · '+(r.quote_due&&r.quote_due===r.next_date?"Rappel de devis":r.follow_up?"Date choisie par le propriétaire":"Échéance suggérée automatiquement")+'</p>'+(r.quote_due?'<p>Devis émis : validité '+e(r.quote_until)+' · rappel à partir du '+e(r.quote_due)+'</p>':'')+'<p>Dernier contact déclaré : '+e(r.last_follow_up_at||"Non enregistré")+'</p><p>Contact : '+e([r.email,r.phone].filter(Boolean).join(" · ")||"—")+'</p><details><summary>Brouillon de message '+e(r.lang.toUpperCase())+' — aucun envoi automatique</summary><p><strong>'+e(draft.subject)+'</strong></p><textarea rows="8" readonly aria-label="Brouillon">'+e(draft.body)+'</textarea></details><form method="post" action="'+e(link(page))+'"><input type="hidden" name="csrf" value="'+e(csrf)+'"><input type="hidden" name="id" value="'+e(r.id)+'"><input type="hidden" name="revision" value="'+r.revision+'"><label>Prochaine relance<input type="date" name="date" min="'+today+'" max="'+urunkFollowAddV505(today,730)+'" value="'+e(planned)+'" required></label><button name="action" value="schedule" type="submit">Planifier</button><label><input type="checkbox" name="confirmed" value="yes"> Je confirme avoir effectué le contact moi-même.</label><button name="action" value="record" type="submit">Enregistrer le contact effectué</button></form><details><summary>Historique récent</summary>'+(events?'<ul>'+events+'</ul>':'<p>Aucun événement.</p>')+'</details><p><a href="/private/growth/crm?month='+e(r.created_at.slice(0,7))+'#lead-'+e(r.id)+'">CRM</a> · <a href="/private/growth/crm/sales?lead='+e(r.id)+'">Devis</a></p></article>';
  }).join("");
  const body='<nav><a href="/private/growth/crm">CRM</a> · <a href="/private/growth/crm/qualification">Qualification</a> · <a href="/private/growth/crm/sales">Devis</a> · <a href="/private/growth/crm/revenue">Revenus</a></nav><section><h2>Relances prioritaires · '+e(today)+'</h2><p>Échéances suggérées : 1 jour pour un score ≥ 80, 3 jours pour 55–79, 7 jours sinon. Les dates manuelles priment sur ces suggestions ; les devis émis sont signalés 3 jours avant leur expiration. Une relance de devis déclarée après le seuil clôt le rappel, sauf nouvelle modification du devis. Les dates de référence automatiques proviennent des horodatages UTC ; la date du jour est celle du Maroc. Les dossiers gagnés ou perdus sont exclus. Aucun message n’est envoyé automatiquement.</p><div class="grid">'+card("Ouverts",counts.open)+card("En retard",counts.overdue)+card("Aujourd’hui",counts.today)+card("À venir",counts.upcoming)+card("Devis à relancer",counts.quotes)+'</div></section><section><h2>Pipeline commercial · tous les dossiers</h2><div class="grid">'+pipelineCards+'</div><p class="muted">Montants déclarés, non encaissés vérifiés.</p></section><form method="get" action="'+URUNK_FOLLOW_BASE+'"><label>Filtrer<select name="filter">'+Object.entries(labels).map(([k,v])=>'<option value="'+k+'"'+(k===filter?' selected':'')+'>'+e(v)+'</option>').join("")+'</select></label><button>Afficher</button></form>'+ (content||'<p>Aucune relance pour ce filtre.</p>')+'<nav>'+(page>0?'<a href="'+e(link(page-1))+'">Précédent</a> · ':'')+'Page '+(page+1)+(rows.results.length>25?' · <a href="'+e(link(page+1))+'">Suivant</a>':'')+'</nav>';
  const out=urunkCrmResponse(urunkSalesHtml("Relances & pipeline",body),200,"text/html; charset=utf-8",request.method);out.headers.set("X-Urunk-Release","v5.0.5");return out;
 }catch{console.error(JSON.stringify({code:"FOLLOWUP_ROUTE_FAILED"}));return fail("Follow-up unavailable",503)}
}
