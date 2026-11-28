// V5.0.4: deterministic evidence-based lead prioritization, not a purchase probability.
const URUNK_QUAL_BASE="/private/growth/crm/qualification";
const URUNK_QUAL_BUDGET={under_4000:5,from_4000:15,from_8000:20};
const URUNK_QUAL_TIME={within_30:15,within_90:10,later:5,research:0};
const URUNK_QUAL_BUDGET_LABEL={"":"Non communiqué",under_4000:"Moins de 4 000 MAD/mois",from_4000:"4 000–7 999 MAD/mois",from_8000:"8 000 MAD/mois et plus"};
const URUNK_QUAL_TIME_LABEL={"":"Non communiqué",within_30:"Dans les 30 jours",within_90:"Dans 31–90 jours",later:"Au-delà de 90 jours",research:"Exploration"};
function urunkQualificationFieldsV504(input={}){
 const choice=(v,allowed)=>typeof v==="string"&&allowed.includes(v)?v:"";
 return {website:urunkAuditWebsite(input.website)||"",sector:choice(input.sector,URUNK_AUDIT_SECTORS),goal:choice(input.goal,URUNK_AUDIT_GOALS),budget:choice(input.budget,Object.keys(URUNK_QUAL_BUDGET)),timeframe:choice(input.timeframe,Object.keys(URUNK_QUAL_TIME))};
}
function urunkQualificationOptionsV504(labels,selected="",lang="fr"){
 const en={under_4000:"Under MAD 4,000/month",from_4000:"MAD 4,000–7,999/month",from_8000:"MAD 8,000+/month",within_30:"Within 30 days",within_90:"31–90 days",later:"Over 90 days",research:"Exploring"};
 return Object.entries(labels).map(([key,label])=>'<option value="'+key+'"'+(key===selected?' selected':'')+'>'+urunkGrowthEscape(lang==="en"?(en[key]||"Not disclosed"):label)+'</option>').join("");
}
const URUNK_QUAL_SQL_SCORE="(CASE WHEN length(trim(business))>=2 THEN 15 ELSE 0 END + CASE WHEN length(trim(email))>0 OR length(trim(phone))>0 THEN 10 ELSE 0 END + CASE WHEN qualification_website<>'' THEN 15 ELSE 0 END + CASE WHEN qualification_goal IN ('visibility','local','leads','bookings','technical') THEN 15 ELSE 0 END + CASE WHEN qualification_sector IN ('hospitality','tourism','b2b','local','ecommerce') THEN 10 WHEN qualification_sector='other' THEN 5 ELSE 0 END + CASE qualification_budget WHEN 'under_4000' THEN 5 WHEN 'from_4000' THEN 15 WHEN 'from_8000' THEN 20 ELSE 0 END + CASE qualification_timeframe WHEN 'within_30' THEN 15 WHEN 'within_90' THEN 10 WHEN 'later' THEN 5 ELSE 0 END)";
function urunkQualificationActionV504(r){
 if(r.stage==="won"||r.stage==="lost")return "Dossier clôturé — aucune relance automatique.";
 if(!r.qualification_website||!r.qualification_goal||!r.qualification_sector)return "Confirmer le site, le secteur et l’objectif.";
 if(!r.qualification_budget||!r.qualification_timeframe)return "Confirmer le budget mensuel et le calendrier.";
 if(r.qualification_budget==="under_4000")return "Vérifier le périmètre et proposer une solution adaptée au budget.";
 if(r.qualification_timeframe==="research"||r.qualification_timeframe==="later")return "Proposer une revue initiale et convenir d’un suivi adapté.";
 if(r.score>=80)return "Revue humaine prioritaire : vérifier le besoin et proposer un entretien.";
 return "Examiner le besoin et définir les prochaines étapes.";
}
async function urunkQualificationRouteV504(request,env,url){
 const fail=(msg,status)=>urunkCrmResponse(msg,status,"text/plain; charset=utf-8",request.method);
 if(url.hostname!=="urunk.com")return fail("Not found",404);
 if(!["GET","HEAD","POST"].includes(request.method))return fail("Method not allowed",405);
 if(!await urunkGrowthAuthorized(request,env))return urunkAccessRecoveryV491(request);
 if(!env.CRM_DB)return fail("CRM unavailable",503);
 const db=env.CRM_DB;
 try{
  const month=urunkCrmMonth(url.searchParams.get("month"));
  const filter=["all","high","medium","review","closed"].includes(url.searchParams.get("priority"))?url.searchParams.get("priority"):"all";
  const page=Math.min(1000,Math.max(0,Math.floor(Number(url.searchParams.get("page"))||0)));
  if(request.method==="POST"){
   if(request.headers.get("Origin")!=="https://urunk.com"||request.headers.get("Sec-Fetch-Site")==="cross-site")return fail("Forbidden origin",403);
   if(!(request.headers.get("Content-Type")||"").startsWith("application/x-www-form-urlencoded"))return fail("Unsupported content type",415);
   const body=await readBoundedBody(request,8192);if(!body.ok)return fail("Payload too large",413);
   const f=new URLSearchParams(body.text);
   if(f.get("csrf")!==await urunkCrmCsrf(request))return fail("Invalid CSRF",403);
   const id=f.get("id")||"",rev=f.get("revision");
   if(!/^[0-9a-f-]{36}$/i.test(id)||!/^\d{1,12}$/.test(rev||""))return fail("Invalid request",400);
   const raw=Object.fromEntries(["website","sector","goal","budget","timeframe"].map(k=>[k,(f.get(k)||"").trim()])),q=urunkQualificationFieldsV504(raw);
   if(Object.keys(raw).some(k=>raw[k]&&!q[k]))return fail("Invalid qualification fields",400);
   const r=await db.prepare("UPDATE crm_leads SET qualification_website=?,qualification_sector=?,qualification_goal=?,qualification_budget=?,qualification_timeframe=?,updated_at=?,revision=revision+1 WHERE id=? AND revision=? RETURNING id").bind(q.website,q.sector,q.goal,q.budget,q.timeframe,new Date().toISOString(),id,Number(rev)).first();
   if(!r?.id)return fail("Conflict; reload the record",409);
   const out=urunkCrmResponse(null,303,"text/plain; charset=utf-8");out.headers.set("Location",URUNK_QUAL_BASE+"?month="+month+"&priority="+filter+"&page="+page);return out;
  }
  const cte="WITH scored AS (SELECT id,revision,business,name,service,stage,created_at,qualification_website,qualification_sector,qualification_goal,qualification_budget,qualification_timeframe,"+URUNK_QUAL_SQL_SCORE+" AS score FROM crm_leads WHERE substr(created_at,1,7)=?), classified AS (SELECT *,CASE WHEN stage IN ('won','lost') THEN 'closed' WHEN score>=80 THEN 'high' WHEN score>=55 THEN 'medium' ELSE 'review' END AS priority FROM scored) ";
  const [rows,counts]=await Promise.all([db.prepare(cte+"SELECT * FROM classified WHERE (?='all' AND priority<>'closed') OR priority=? ORDER BY score DESC,created_at DESC,id DESC LIMIT 25 OFFSET ?").bind(month,filter,filter,page*25).all(),db.prepare(cte+"SELECT priority,COUNT(*) AS n FROM classified GROUP BY priority").bind(month).all()]);
  if(!rows.success||!counts.success)return fail("Qualification unavailable",503);
  const e=urunkGrowthEscape,csrf=await urunkCrmCsrf(request);
  const labels={all:"Ouverts",high:"Priorité élevée",medium:"À qualifier",review:"Informations insuffisantes",closed:"Clôturés"};
  const options=(values,selected)=>'<option value="">Non communiqué</option>'+values.map(v=>'<option value="'+e(v)+'"'+(v===selected?' selected':'')+'>'+e(v)+'</option>').join("");
  const cards=Object.entries(labels).filter(([k])=>k!=="all").map(([k,v])=>'<div class="metric"><small>'+e(v)+'</small><strong>'+Number(counts.results.find(x=>x.priority===k)?.n||0)+'</strong></div>').join("");
  const link=(p)=>URUNK_QUAL_BASE+"?month="+month+"&priority="+filter+"&page="+p;
  const content=rows.results.map(r=>'<article><h3>'+e(r.business||r.name)+'</h3><p>'+e(r.service)+' · '+e(r.stage)+' · <strong>'+r.score+'/100 · '+e(labels[r.priority])+'</strong></p><p>'+e(urunkQualificationActionV504(r))+'</p><form method="post" action="'+e(link(page))+'"><input type="hidden" name="csrf" value="'+e(csrf)+'"><input type="hidden" name="id" value="'+e(r.id)+'"><input type="hidden" name="revision" value="'+r.revision+'"><label>Site web<input name="website" type="url" maxlength="400" value="'+e(r.qualification_website)+'"></label><label>Secteur<select name="sector">'+options(URUNK_AUDIT_SECTORS,r.qualification_sector)+'</select></label><label>Objectif<select name="goal">'+options(URUNK_AUDIT_GOALS,r.qualification_goal)+'</select></label><label>Budget mensuel d’honoraires (hors média)<select name="budget">'+urunkQualificationOptionsV504(URUNK_QUAL_BUDGET_LABEL,r.qualification_budget)+'</select></label><label>Calendrier<select name="timeframe">'+urunkQualificationOptionsV504(URUNK_QUAL_TIME_LABEL,r.qualification_timeframe)+'</select></label><button type="submit">Enregistrer la qualification</button></form><a href="/private/growth/crm?month='+e(month)+'#lead-'+e(r.id)+'">CRM</a></article>').join("");
  const body='<nav><a href="/private/growth/crm">CRM</a> · <a href="/private/growth/crm/sales">Ventes</a> · <a href="/private/growth/crm/revenue">Revenus</a></nav><section><h2>Priorisation V5.0.4</h2><p>Score indicatif sur 100, fondé sur les informations communiquées : entreprise 15, contact 10, site 15, objectif 15, secteur 10, budget mensuel 20, calendrier 15. Les informations absentes ne sont pas estimées. Le score ne prédit pas un achat et ne modifie pas l’étape CRM.</p><div class="grid">'+cards+'</div></section><form method="get" action="'+URUNK_QUAL_BASE+'"><label>Mois<input type="month" name="month" value="'+e(month)+'"></label><label>Priorité<select name="priority">'+Object.entries(labels).map(([k,v])=>'<option value="'+k+'"'+(k===filter?' selected':'')+'>'+e(v)+'</option>').join("")+'</select></label><button>Filtrer</button></form>'+ (content||'<p>Aucune demande enregistrée pour ce filtre.</p>')+'<nav>'+(page>0?'<a href="'+e(link(page-1))+'">Précédent</a> · ':'')+'Page '+(page+1)+(rows.results.length===25?' · <a href="'+e(link(page+1))+'">Suivant</a>':'')+'</nav>';
  const out=urunkCrmResponse(urunkSalesHtml("Qualification des prospects",body),200,"text/html; charset=utf-8",request.method);out.headers.set("X-Urunk-Release","v5.0.4");return out;
 }catch{console.error(JSON.stringify({code:"QUALIFICATION_ROUTE_FAILED"}));return fail("Qualification unavailable",503)}
}
