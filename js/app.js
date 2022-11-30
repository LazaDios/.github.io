window.addEventListener('scroll' , function(){
    let animacion = document.getElementById('animation');
    let possObj1 = animacion.getBoundingClientRect().top;
    
    let tamano_pantalla = window.innerHeight /1;
    

    if (possObj1 < tamano_pantalla) {
       animacion.style.animation = 'mover 1s ease-out' 
    }
});