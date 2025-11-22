// Simple particle system (small) - will run in background
(function(){
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles=[];
  function resize(){w=canvas.width=innerWidth; h=canvas.height=innerHeight}
  window.addEventListener('resize', resize); resize();
  function rand(min,max){return Math.random()*(max-min)+min}
  for(let i=0;i<120;i++){particles.push({x:rand(0,w),y:rand(0,h),r:rand(0.3,1.6),vx:rand(-0.2,0.2),vy:rand(-0.1,0.1)})}
  function step(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0) p.x=w; if(p.x>w) p.x=0;
      if(p.y<0) p.y=h; if(p.y>h) p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(79,209,197,0.06)'; ctx.fill();
    });
    requestAnimationFrame(step);
  }
  step();
})();