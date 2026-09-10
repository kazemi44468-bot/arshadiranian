(()=>{
const run=()=>{
 const legacy={'پروفیلا':'پروفایلیا','پروفیلیا':'پروفایلیا','profila.ir':'profilia.ir','https://profila.ir':'https://profilia.ir'};
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode()){const n=walker.currentNode;if(!['SCRIPT','STYLE'].includes(n.parentElement?.tagName))nodes.push(n)}
 nodes.forEach(n=>{let v=n.nodeValue;Object.keys(legacy).forEach(k=>{v=v.replaceAll(k,legacy[k])});n.nodeValue=v});
 document.querySelectorAll('a[href]').forEach(a=>{Object.keys(legacy).forEach(k=>{if(a.href.includes(k))a.href=a.href.replaceAll(k,legacy[k])});const h=a.getAttribute('href')||'';if(h.includes('pages/pages/'))a.setAttribute('href',h.replace('pages/pages/','pages/'));});
 document.querySelectorAll('img[alt],meta[name="description"]').forEach(el=>{const attr=el.tagName==='META'?'content':'alt';let v=el.getAttribute(attr)||'';Object.keys(legacy).forEach(k=>{v=v.replaceAll(k,legacy[k])});el.setAttribute(attr,v)});
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
