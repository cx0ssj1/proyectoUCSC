const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.iniciar-link');
const registerLink = document.querySelector('.registrarse-link');
const btnPoput = document.querySelector('.btnLogin-pop');
const iconClose = document.querySelector('.icon-close');
const wrappe = document.querySelector('.wrapper-1')

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

btnPoput.addEventListener('click', () => {
    wrappe.classList.add('active-pop');
});

// Ocultar el wrapper cuando se haga clic en el botón de cerrar
iconClose.addEventListener('click', () => {
    wrappe.classList.remove('active-pop');
});