// trending.js - maintains simple trending counts (persisted)
export function incTrend(url){ const t=JSON.parse(localStorage.getItem('rse:trending')||'{}'); t[url]=(t[url]||0)+1; localStorage.setItem('rse:trending', JSON.stringify(t)); }
export function getTrending(){ return JSON.parse(localStorage.getItem('rse:trending')||'{}') }