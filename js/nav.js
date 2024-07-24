/* login nav */
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

// ocultar nav al bajar con el scroll

let ubicacionPrincipal = window.scrollY;
let $header = document.querySelector("#header");

window.addEventListener("scroll", function() {
    let ubicacionActual = window.scrollY;
    /* console.log(ubicacionActual) */

    if(ubicacionPrincipal >= ubicacionActual) {
        $header.style.top = "0px"
    }
    else {
        $header.style.top = "-100px"
    }


    ubicacionPrincipal = ubicacionActual;

    
})

/* activacion de menu hamburguesa */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

/* desactivar la ventana de login y la hamburguesa al dar scroll  */

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}