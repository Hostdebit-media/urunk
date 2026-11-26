// URUNK V4.9: read-only acquisition and declared revenue intelligence.
// Integrate before the generic /private/growth/crm router. Existing V4.8 helpers required.
const URUNK_REVENUE_BASE="/private/growth/crm/revenue";
const URUNK_REVENUE_SQL={
 totals:"SELECT COUNT(*) AS leads, COALESCE(SUM(stage IN ('qualified','proposal','won')),0) AS qualified_now, COALESCE(SUM(stage='won'),0) AS won, COALESCE(SUM(stage='lost'),0) AS lost, COALESCE(SUM(CASE WHEN stage='won' THEN value_minor ELSE 0 END),0) AS won_minor, COALESCE(SUM(CASE WHEN stage NOT IN ('won','lost') THEN value_minor ELSE 0 END),0) AS pipeline_minor, COALESCE(SUM(analytics_consent),0) AS consented FROM crm_leads WHERE created_at>=? AND created_at<?",
 quotes:"SELECT COUNT(*) AS quotes, COALESCE(SUM(q.status='accepted'),0) AS accepted, COALESCE(SUM(CASE WHEN q.status='accepted' THEN q.amount_minor ELSE 0 END),0) AS accepted_minor FROM crm_quotes q JOIN crm_leads l ON l.id=q.lead_id WHERE l.created_at>=? AND l.created_at<?",
 groups:"SELECT CASE WHEN analytics_consent=0 THEN 'Sans consentement analytique' WHEN TRIM(utm_source)<>'' THEN LOWER(SUBSTR(TRIM(utm_source),1,100)) WHEN TRIM(referrer_host)<>'' THEN LOWER(SUBSTR(TRIM(referrer_host),1,100)) ELSE 'Source non attribuée' END AS label, COUNT(*) AS leads, SUM(stage IN ('qualified','proposal','won')) AS qualified, SUM(stage='won') AS won, SUM(CASE WHEN stage='won' THEN value_minor ELSE 0 END) AS won_minor FROM crm_leads WHERE created_at>=? AND created_at<? GROUP BY 1 ORDER BY leads DESC, label LIMIT 30",
 services:"SELECT SUBSTR(service,1,120) AS label, COUNT(*) AS leads, SUM(stage IN ('qualified','proposal','won')) AS qualified, SUM(stage='won') AS won, SUM(CASE WHEN stage='won' THEN value_minor ELSE 0 END) AS won_minor FROM crm_leads WHERE created_at>=? AND created_at<? GROUP BY 1 ORDER BY leads DESC, label LIMIT 30",
 pages:"SELECT CASE WHEN analytics_consent=0 THEN 'Sans consentement analytique' ELSE COALESCE(NULLIF(landing_page,''),'Page non attribuée') END AS label, COUNT(*) AS leads, SUM(stage IN ('qualified','proposal','won')) AS qualified, SUM(stage='won') AS won, SUM(CASE WHEN stage='won' THEN value_minor ELSE 0 END) AS won_minor FROM crm_leads WHERE created_at>=? AND created_at<? GROUP BY 1 ORDER BY leads DESC, label LIMIT 30",
 monthly:"SELECT SUBSTR(created_at,1,7) AS month, COUNT(*) AS leads, SUM(stage IN ('qualified','proposal','won')) AS qualified, SUM(stage='won') AS won, SUM(CASE WHEN stage='won' THEN value_minor ELSE 0 END) AS won_minor FROM crm_leads WHERE created_at>=? AND created_at<? GROUP BY 1 ORDER BY 1 DESC",
 activity:"SELECT COUNT(*) AS due FROM crm_leads WHERE stage NOT IN ('won','lost') AND follow_up<>'' AND follow_up<=?",
};
function urunkRevenuePeriod(raw,now=new Date()){
 const current=now.toISOString().slice(0,7);
 const endMonth=/^20[2-9]\d-(0[1-9]|1[0-2])$/.test(raw||"")&&raw>= "2026-01"&&raw<=current?raw:current;
 const y=Number(endMonth.slice(0,4)),m=Number(endMonth.slice(5,7))-1;
 const iso=(offset)=>new Date(Date.UTC(y,m+offset,1)).toISOString();
 return {month:endMonth,start:iso(0),end:iso(1),yearStart:iso(-11)};
}
function urunkRevenueRender(period,t,q,groups,services,pages,monthly,activity){
 const e=urunkGrowthEscape,fmt=n=>new Intl.NumberFormat("fr-MA",{maximumFractionDigits:2}).format(Number(n)||0),money=n=>fmt((Number(n)||0)/100)+" MAD",pct=(n,d)=>d?fmt(100*n/d)+" %":"—";
 const metric=(label,value,sub)=>'<div class="metric"><span class="muted">'+e(label)+'</span><strong>'+e(value)+'</strong><small>'+e(sub)+'</small></div>';
 const table=(headers,rows)=>rows.length?'<div class="table"><table><thead><tr>'+headers.map(x=>'<th scope="col">'+e(x)+'</th>').join("")+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(x=>'<td>'+e(x)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>':'<p class="muted">Aucune donnée enregistrée sur cette période.</p>';
 const groupTable=rows=>table(["Segment","Prospects","Qualifiés / proposition / gagnés","Gagnés","Valeur gagnée déclarée"],rows.map(r=>[r.label,fmt(r.leads),fmt(r.qualified),fmt(r.won),money(r.won_minor)]));
 const options=Array.from({length:12},(_,i)=>new Date(Date.UTC(Number(period.month.slice(0,4)),Number(period.month.slice(5,7))-1-i,1)).toISOString().slice(0,7));
 const nav='<nav aria-label="Pilotage"><a href="/private/growth">Analytics</a> · <a href="/private/growth/crm">CRM</a> · <a href="/private/growth/crm/sales">Devis et relances</a></nav>';
 const next=!t.leads?'Collecter les premières demandes entrantes et vérifier leur enregistrement dans le CRM. Aucun canal ne peut être évalué sans données.':activity.due?'Traiter les relances échues dans Sales Operations avant d’augmenter les dépenses d’acquisition.':!t.qualified_now?'Qualifier les demandes reçues et documenter leurs besoins avant de proposer un devis.':!t.won?'Examiner les opportunités qualifiées et les propositions ouvertes ; consigner les motifs de perte.':'Comparer les cohortes, vérifier les paiements dans la comptabilité et privilégier les services dont la conversion est confirmée.';
 const body=nav+'<p class="muted">V4.9 · Cohorte de création des prospects (UTC), état actuel du CRM. Les données historiques peuvent évoluer lorsque les opportunités progressent.</p><section><h2>Période analysée</h2><form method="get" action="'+URUNK_REVENUE_BASE+'"><label>Mois<select name="month">'+options.map(x=>'<option value="'+e(x)+'"'+(x===period.month?' selected':'')+'>'+e(x)+'</option>').join("")+'</select></label><button type="submit">Afficher</button></form></section><div class="grid">'+metric("Prospects",fmt(t.leads),"Demandes enregistrées")+metric("Qualifiés ou avancés",fmt(t.qualified_now),"État actuel")+metric("Opportunités gagnées",fmt(t.won),"État déclaré")+metric("Taux de conclusion",pct(t.won,t.won+t.lost),"Gagnées / clôturées")+metric("Valeur gagnée",money(t.won_minor),"Déclarée, pas encaissée")+metric("Pipeline ouvert",money(t.pipeline_minor),"Valeur potentielle déclarée")+metric("Devis acceptés",fmt(q.accepted),"État déclaré")+metric("Encaissements","Non mesurés","Aucune source comptable")+'</div><section><h2>Action commerciale prioritaire</h2><p class="notice">'+e(next)+'</p><p>Relances échues, tous mois : '+e(fmt(activity.due))+' · <a href="/private/growth/crm/sales">Ouvrir le pilotage commercial</a></p></section><section><h2>Acquisition par source</h2><p>Attribution consentie : '+e(pct(t.consented,t.leads))+'. Les données sans consentement ou non attribuées sont séparées. 30 segments maximum.</p>'+groupTable(groups)+'</section><section><h2>Performance par service</h2>'+groupTable(services)+'</section><section><h2>Pages de destination</h2>'+groupTable(pages)+'</section><section><h2>Cohortes sur 12 mois</h2>'+table(["Mois de création","Prospects","Qualifiés / avancés","Gagnés","Valeur gagnée déclarée"],monthly.map(r=>[r.month,fmt(r.leads),fmt(r.qualified),fmt(r.won),money(r.won_minor)]))+'</section><section><h2>Intégrité financière</h2><p>Devis acceptés (cohorte) : '+e(money(q.accepted_minor))+'. Ne pas additionner aux valeurs gagnées : les mêmes opportunités peuvent être présentes dans les deux indicateurs. Les recettes encaissées, coûts publicitaires, CAC, ROAS et marge ne sont pas mesurés. Aucun montant estimé n’est présenté comme un paiement.</p></section>';
 return urunkSalesHtml("Acquisition & revenus",body);
}
async function urunkRevenueRoute(request,env,url){
 const fail=(msg,status)=>urunkCrmResponse(msg,status,"text/plain; charset=utf-8",request.method);
 if(url.hostname!=="urunk.com")return fail("Not found",404);
 if(!["GET","HEAD"].includes(request.method))return fail("Method not allowed",405);
 if(!await urunkGrowthAuthorized(request,env))return fail("Authentication required",403);
 if(!env.CRM_DB)return fail("Revenue unavailable",503);
 try{
  const db=env.CRM_DB,p=urunkRevenuePeriod(url.searchParams.get("month"));
  const today=new Intl.DateTimeFormat("en-CA",{timeZone:"Africa/Casablanca",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  const queries=Object.entries(URUNK_REVENUE_SQL).map(([k,sql])=>db.prepare(sql).bind(...(k==="activity"?[today]:k==="monthly"?[p.yearStart,p.end]:[p.start,p.end])));
  const results=await db.batch(queries);
  if(results.length!==7||!results.every(x=>x.success&&Array.isArray(x.results)))return fail("Revenue unavailable",503);
  const [t,q,g,s,l,m,a]=results.map(x=>x.results);
  if(!t[0]||!q[0]||!a[0])return fail("Revenue unavailable",503);
  const response=urunkCrmResponse(urunkRevenueRender(p,t[0],q[0],g,s,l,m,a[0]),200,"text/html; charset=utf-8",request.method);
  response.headers.set("X-Urunk-Release","v4.9");
  return response;
 }catch{console.error(JSON.stringify({code:"REVENUE_ROUTE_FAILED"}));return fail("Revenue unavailable",503);}
}
