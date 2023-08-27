let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

//FUNCION PARA PASAR DE PRODUCTO DE IMAGEN
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}
//FUNCION PARA RETROCEDER DE PRODUCTO DE IMAGEN
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}