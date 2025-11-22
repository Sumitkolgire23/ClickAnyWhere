// analytics.js - records clicks and stores counts locally; can be wired to server/GA
export function recordClick(url){ try{ const obj=JSON.parse(localStorage.getItem('rse:analytics')||'{}'); obj[url]=(obj[url]||0)+1; localStorage.setItem('rse:analytics', JSON.stringify(obj)); }catch(e){} }
export function getAnalytics(){ return JSON.parse(localStorage.getItem('rse:analytics')||'{}') }