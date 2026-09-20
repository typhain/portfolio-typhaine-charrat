const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const box=document.querySelector('.lightbox');
const boxImg=box.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{boxImg.src=button.dataset.lightbox;boxImg.alt=button.querySelector('img').alt;box.showModal()}));
box.querySelector('.close').addEventListener('click',()=>box.close());
box.addEventListener('click',event=>{if(event.target===box)box.close()});
