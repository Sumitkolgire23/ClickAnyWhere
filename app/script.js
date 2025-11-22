
(async function(){
  const loader=document.getElementById('loader');
  const app=document.getElementById('app');
  const clickArea=document.getElementById('clickArea');
  const categorySelect=document.getElementById('categorySelect');
  const surpriseBtn=document.getElementById('surpriseBtn');
  const favBtn=document.getElementById('favBtn');
  const darkToggle=document.getElementById('darkToggle');
  const totalSitesEl=document.getElementById('totalSites');
  const categoryNameEl=document.getElementById('categoryName');
  const clickCountEl=document.getElementById('clickCount');
  const favCountEl=document.getElementById('favCount');

  // load database.json if present; otherwise use placeholder all_sites_placeholder.json
  let database={all:[]};
  try{
    const res=await fetch('../database/all_sites_placeholder.json');
    if(res.ok) database = await res.json();
  }catch(e){
    console.warn('No local database found, falling back to example list');
    database.all = ['https://google.com','https://youtube.com','https://wikipedia.org'];
  }

  // populate categories (if categories present)
  const cats = Object.keys(database).filter(k=>k!=='all');
  categorySelect.innerHTML='';
  const optAll=document.createElement('option'); optAll.value='all'; optAll.textContent='All'; categorySelect.appendChild(optAll);
  cats.forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; categorySelect.appendChild(o) });

  totalSitesEl.textContent = database.all.length.toLocaleString();
  document.getElementById('totalSites').textContent = database.all.length.toLocaleString();
  loader.style.display='none'; app.classList.remove('hidden');

  let clickCount=0;
  clickArea.addEventListener('click', (e)=>{
    createRipple(e);
    clickCount++; clickCountEl.textContent=clickCount;
    const sel = categorySelect.value || 'all';
    const websites = (sel==='all')? database.all : (database[sel]||[]);
    if(!websites.length){ alert('No sites in this category'); return; }
    const randIdx = Math.floor(Math.random()*websites.length);
    const url = websites[randIdx];
    try{ const an = JSON.parse(localStorage.getItem('rse:analytics')||'{}'); an[url]=(an[url]||0)+1; localStorage.setItem('rse:analytics', JSON.stringify(an)); }catch(e){}
    setTimeout(()=> window.location.href = url, 300);
  });

  surpriseBtn.addEventListener('click', ()=>{
    const trending = JSON.parse(localStorage.getItem('rse:trending')||'{}');
    const all = database.all.slice();
    all.sort((a,b)=>(trending[b]||0)-(trending[a]||0));
    const pick = all[Math.floor(Math.random()*Math.min(200,all.length))];
    window.location.href = pick;
  });

  favBtn.addEventListener('click', ()=>{
    const favs = JSON.parse(localStorage.getItem('rse:favs')||'[]');
    alert('Favorites saved: '+favs.length+' items. (Open console to inspect.)');
  });

  darkToggle.addEventListener('change',(e)=>{
    document.body.classList.toggle('dark', e.target.checked);
  });

  function createRipple(e){
    const ripple=document.createElement('div'); ripple.className='ripple';
    const size=100; ripple.style.width=ripple.style.height=size+'px';
    ripple.style.left=(e.clientX - size/2)+'px'; ripple.style.top=(e.clientY - size/2)+'px';
    document.body.appendChild(ripple); setTimeout(()=>ripple.remove(),600);
  }
})();
