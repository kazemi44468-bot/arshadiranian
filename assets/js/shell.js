document.addEventListener('DOMContentLoaded',()=>{
 const home=location.pathname.endsWith('/index.html')||location.pathname.endsWith('/arshadiranian/')||location.pathname.endsWith('/arshadiranian');
 const links=[['۰۱','خانه','index.html'],['۰۲','هویت','about.html'],['۰۳','راهبرد','strategy.html'],['۰۴','اکوسیستم','ecosystem.html'],['۰۵','پروژه‌ها','projects.html'],['۰۶','سرمایه‌گذاری','investment.html'],['۰۷','نوآوری','innovation.html'],['۰۸','ویترین','showcase.html'],['۰۹','جستجو','search.html'],['۱۰','ارتباط','contact.html']];
 const href=i=>home?(i[2]==='index.html'?'index.html':'pages/'+i[2]):(i[2]==='index.html'?'../index.html':i[2]);
 const here=location.pathname.split('/').pop()||'index.html';
 const current=i=>i[2]==='index.html'?home:i[2]===here;
 const drawer=document.createElement('div');drawer.className='side-drawer';drawer.innerHTML=`<div class="side-drawer-backdrop"></div><div class="side-drawer-panel"><button class="drawer-close" aria-label="بستن">×</button><span class="drawer-kicker">NAVIGATION / ARSHAD IRANIAN</span><div class="drawer-title">مسیرهای ارشد ایرانیان</div><nav class="drawer-links">${links.map(i=>`<a href="${href(i)}"><b>${i[0]}</b><span>${i[1]}</span></a>`).join('')}</nav><div class="drawer-foot">از هویت و راهبرد تا حوزه‌ها، پروژه‌ها، فرصت‌ها و دانش؛ همه مسیرها در یک معماری واحد به هم متصل‌اند.</div></div>`;
 document.body.appendChild(drawer);
 const toggle=document.createElement('button');toggle.className='side-drawer-toggle';toggle.setAttribute('aria-label','باز کردن فهرست');toggle.innerHTML='<i></i><i></i><i></i><span>فهرست</span>';document.body.appendChild(toggle);
 const close=()=>drawer.classList.remove('open');toggle.onclick=()=>drawer.classList.toggle('open');drawer.querySelector('.drawer-close').onclick=close;drawer.querySelector('.side-drawer-backdrop').onclick=close;document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 const bottom=document.createElement('nav');bottom.className='mobile-bottom-nav';const picks=[links[0],links[2],links[3],links[4],links[8]];bottom.innerHTML=picks.map(i=>`<a class="${current(i)?'active':''}" href="${href(i)}"><b>${i[0]}</b><span>${i[1]}</span></a>`).join('');document.body.appendChild(bottom);
});
