let menu = document.getElementById('menu');
let boton = document.getElementById('email');

menu.addEventListener('click', () =>{
    document.getElementById('header').classList.toggle('flex');
    document.getElementById('nav').classList.toggle('flex');
    document.getElementById('servicios').classList.toggle('flex');
    document.getElementById('recursos').classList.toggle('flex');
    document.getElementById('clientes').classList.toggle('flex');
    document.getElementById('contacto').classList.toggle('flex');
});