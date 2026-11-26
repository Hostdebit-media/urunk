// V4.9.2: rotation-aware JWKS retrieval. Never accepts an unsigned token.
async function urunkFetchSigningKeyV492(kid,now=Date.now(),fetcher=fetch){
 const match=keys=>keys.find(k=>k.kid===kid&&k.kty==="RSA"&&typeof k.n==="string"&&typeof k.e==="string"&&(!k.alg||k.alg==="RS256")&&(!k.use||k.use==="sig"));
 if(urunkGrowthKeys.expires>now){const cached=match(urunkGrowthKeys.keys);if(cached)return {key:cached,reason:"cached"}}
 let reason="jwks_fetch_failed";
 for(let attempt=0;attempt<2;attempt++){
  try{
   const target=new URL(URUNK_GROWTH_ISSUER+"/cdn-cgi/access/certs");
   if(attempt)target.searchParams.set("_refresh",String(now));
   let r=await fetcher(target.toString(),{method:"GET",redirect:"manual",headers:{Accept:"application/json","Cache-Control":"no-cache"},signal:AbortSignal.timeout(5000),cf:{cacheTtl:0,cacheEverything:false}});
   if([301,302,303,307,308].includes(r.status)){
    const loc=r.headers.get("location");if(!loc){reason="jwks_redirect_missing";continue}
    const dest=new URL(loc,target);
    if(dest.origin!==target.origin||dest.pathname!=="/cdn-cgi/access/certs"||dest.username||dest.password){reason="jwks_redirect_rejected";continue}
    r=await fetcher(dest.toString(),{method:"GET",redirect:"error",headers:{Accept:"application/json","Cache-Control":"no-cache"},signal:AbortSignal.timeout(5000),cf:{cacheTtl:0,cacheEverything:false}});
   }
   if(!r.ok){reason="jwks_http_"+r.status;continue}
   const body=await r.text();
   if(body.length>65536){reason="jwks_response_too_large";continue}
   let j;try{j=JSON.parse(body)}catch{reason="jwks_invalid_json";continue}
   if(!Array.isArray(j.keys)||!j.keys.length||j.keys.length>30){reason="jwks_invalid_shape";continue}
   const keys=j.keys.filter(k=>k&&typeof k.kid==="string"&&k.kty==="RSA"&&typeof k.n==="string"&&typeof k.e==="string"&&(!k.alg||k.alg==="RS256")&&(!k.use||k.use==="sig"));
   if(!keys.length){reason="jwks_no_rsa_keys";continue}
   urunkGrowthKeys={keys,expires:Date.now()+300000};
   const key=match(keys);
   if(key)return {key,reason:"fetched"};
   reason="jwks_kid_not_found";
  }catch{reason="jwks_network_or_timeout"}
 }
 return {key:null,reason};
}
const urunkVerifiedSessionsV491=new WeakMap();
function urunkAccessCandidatesV491(request){
 const header=request.headers.get("Cf-Access-Jwt-Assertion");
 if(header)return [{token:header,source:"header"}];
 const raw=request.headers.get("Cookie")||"";
 if(raw.length>64000)return [];
 const values=[...new Set(raw.split(";").map(s=>s.trim()).filter(s=>s.startsWith("CF_Authorization=")).map(s=>s.slice(17)).filter(s=>s.length>0&&s.length<=16000))];
 return values.length===1?[{token:values[0],source:"cookie"}]:[];
}
async function urunkGrowthAuthorized(request,env){
 if(urunkVerifiedSessionsV491.has(request))return true;
 let reason="missing_assertion",source="none";
 try{
  if(!env.URUNK_GROWTH_ACCESS_AUD||!env.URUNK_GROWTH_ACCESS_EMAIL){reason="configuration";return false}
  const candidates=urunkAccessCandidatesV491(request);
  if(!candidates.length)return false;
  const {token}=candidates[0];source=candidates[0].source;
  reason="malformed_assertion";
  if(token.length>16000)return false;
  const parts=token.split(".");if(parts.length!==3||parts.some(p=>!p||!/^[A-Za-z0-9_-]+$/.test(p)))return false;
  const decode=p=>JSON.parse(new TextDecoder().decode(urunkGrowthB64(p)));
  const h=decode(parts[0]),p=decode(parts[1]),now=Math.floor(Date.now()/1000);
  reason="invalid_algorithm";if(h.alg!=="RS256"||typeof h.kid!=="string"||!h.kid||h.kid.length>200)return false;
  reason="invalid_audience_or_issuer";if(p.iss!==URUNK_GROWTH_ISSUER||!Array.isArray(p.aud)||!p.aud.includes(env.URUNK_GROWTH_ACCESS_AUD))return false;
  reason="expired_or_invalid_time";if(!Number.isFinite(p.exp)||p.exp<=now||!Number.isFinite(p.iat)||p.iat>now+60||(p.nbf!==undefined&&(!Number.isFinite(p.nbf)||p.nbf>now+60)))return false;
  reason="invalid_owner";if(typeof p.sub!=="string"||!p.sub||typeof p.email!=="string"||p.email.toLowerCase()!==env.URUNK_GROWTH_ACCESS_EMAIL.toLowerCase())return false;
  const lookup=await urunkFetchSigningKeyV492(h.kid);reason=lookup.reason;
  const jwk=lookup.key;if(!jwk)return false;
  reason="invalid_signature";
  const key=await crypto.subtle.importKey("jwk",jwk,{name:"RSASSA-PKCS1-v1_5",hash:"SHA-256"},false,["verify"]);
  if(!await crypto.subtle.verify("RSASSA-PKCS1-v1_5",key,urunkGrowthB64(parts[2]),new TextEncoder().encode(parts[0]+"."+parts[1])))return false;
  urunkVerifiedSessionsV491.set(request,token);reason="ok";return true;
 }catch{return false}
 finally{if(reason!=="ok")console.warn(JSON.stringify({code:"URUNK_AUTH_DENIED_V492",reason,source}));}
}
function urunkAccessRecoveryV491(request){
 if(!["GET","HEAD"].includes(request.method))return urunkGrowthResponse("Authentication required",403,"text/plain; charset=utf-8",request.method);
 const html='<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Connexion requise | URUNK</title><style>body{font:16px/1.6 system-ui,sans-serif;background:#faf9f6;color:#0f2d25;margin:0;padding:24px}main{max-width:560px;margin:12vh auto;background:white;border:1px solid #dad4c8;border-radius:16px;padding:32px}h1{line-height:1.2}a{color:#895a13}a.primary{display:inline-block;background:#0f2d25;color:white;padding:12px 20px;border-radius:8px;text-decoration:none}</style></head><body><main><strong>URUNK · Espace privé</strong><h1>Connexion requise</h1><p>La session Cloudflare Access n’a pas pu être vérifiée. Aucune donnée privée n’a été chargée.</p><p><a class="primary" href="/cdn-cgi/access/logout">Réinitialiser la connexion</a></p><p><a href="/private/growth">Retour au tableau de bord</a> · <a href="/">Site public</a></p><p>Si la connexion a déjà réussi, réessayez dans quelques instants. La vérification du serveur peut être temporairement indisponible.</p></main></body></html>';
 const r=urunkGrowthResponse(html,403,"text/html; charset=utf-8",request.method);
 r.headers.set("X-Urunk-Auth-Release","v4.9.2");return r;
}
