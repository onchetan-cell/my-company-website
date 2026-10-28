const m=document.querySelector('.menu'),n=document.getElementById('nav');
if(m){m.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)})}
const f=document.getElementById('enquiry');
if(f){f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
const chk=(id,test,msg)=>{const el=document.getElementById(id),er=document.getElementById(id+'-e');const bad=!test(el.value.trim());
el.setAttribute('aria-invalid',bad);er.textContent=bad?msg:'';if(bad&&ok){el.focus();ok=false}};
chk('name',v=>v.length>1,'Enter your name.');
chk('email',v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v),'Enter a valid email address.');
chk('phone',v=>!v||/^[+\d][\d\s()-]{6,}$/.test(v),'Enter a valid phone number or leave it blank.');
chk('service',v=>v,'Choose a service.');
chk('details',v=>v.length>=20,'Describe your project in at least 20 characters.');
const s=document.getElementById('status');s.className='show';s.setAttribute('role','status');
s.textContent=ok?'Your details look valid, but this form is not connected to a mailbox or backend yet, so nothing was sent. Please try again once the site owner enables submissions.':'Please fix the highlighted fields.';
})}

// scroll: progress bar + header
const pg=document.getElementById('prog'),hd=document.querySelector('header.top');
const sc=()=>{const h=document.documentElement,t=h.scrollTop/(h.scrollHeight-h.clientHeight||1);if(pg)pg.style.width=(t*100)+'%';hd.classList.toggle('sc',h.scrollTop>10)};
addEventListener('scroll',sc,{passive:true});sc();
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
// tabs (arrow keys supported)
const tl=[...document.querySelectorAll('[role=tab]')];
const pick=i=>tl.forEach((t,j)=>{const on=i===j;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!on;if(on)t.focus()});
tl.forEach((t,i)=>{t.addEventListener('click',()=>pick(i));t.addEventListener('keydown',e=>{if(e.key==='ArrowRight')pick((i+1)%tl.length);if(e.key==='ArrowLeft')pick((i+tl.length-1)%tl.length)})});
// process steps light up as they enter view
const fl=document.querySelectorAll('.flow li');
if(fl.length){if(rm||!('IntersectionObserver'in window)){fl.forEach(l=>l.classList.add('on'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.6});fl.forEach(l=>io.observe(l))}}
// hero: network canvas + gentle pointer tilt on logo panel
const cv=document.getElementById('bg');
if(cv){const c=cv.getContext('2d');let W,H,P=[],run=true,mx=-999,my=-999;
const size=()=>{const r=cv.getBoundingClientRect();W=cv.width=r.width;H=cv.height=r.height;const n=Math.min(70,Math.floor(W*H/22000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
const draw=()=>{c.clearRect(0,0,W,H);for(const p of P){if(!rm){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
c.fillStyle='rgba(47,196,189,.7)';c.beginPath();c.arc(p.x,p.y,1.8,0,7);c.fill()}
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<130){c.strokeStyle=`rgba(127,163,214,${.28*(1-d/130)})`;c.beginPath();c.moveTo(P[i].x,P[i].y);c.lineTo(P[j].x,P[j].y);c.stroke()}}
for(const p of P){const d=Math.hypot(p.x-mx,p.y-my);if(d<150){c.strokeStyle=`rgba(47,196,189,${.6*(1-d/150)})`;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(mx,my);c.stroke()}}
if(run&&!rm)requestAnimationFrame(draw)};
size();draw();addEventListener('resize',()=>{size();if(rm)draw()});
new IntersectionObserver(e=>{run=e[0].isIntersecting;if(run&&!rm)draw()}).observe(cv);
const hero=cv.parentElement,pn=document.getElementById('panel');
hero.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;if(!rm&&pn){pn.style.transform=`translate(calc(-50% + ${(mx/W-.5)*14}px),calc(-50% + ${(my/H-.5)*14}px))`}});
hero.addEventListener('pointerleave',()=>{mx=my=-999;if(pn)pn.style.transform=''})}
