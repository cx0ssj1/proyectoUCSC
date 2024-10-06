const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.iniciar-link');
const registerLink = document.querySelector('.registrarse-link');
const btnPoput = document.querySelector('.btnLogin-pop');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});

btnPoput.addEventListener('click', ()=>{
    wrapper.classList.add('active-pop')
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-pop')
});