// ELEMENTO 01
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
var navinicio = document.querySelectorAll('#nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

//ELEMENTO 02
function esconder(){
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
}
