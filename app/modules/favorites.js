// favorites.js
export function loadFavorites(){ try{return JSON.parse(localStorage.getItem('rse:favs')||'[]')}catch(e){return[]} }
export function saveFavorites(list){ localStorage.setItem('rse:favs', JSON.stringify(list)) }
export function toggleFavorite(url){ const favs=loadFavorites(); const i=favs.indexOf(url); if(i===-1){favs.push(url)}else{favs.splice(i,1)}; saveFavorites(favs); return favs }