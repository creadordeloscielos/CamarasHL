let btn = document.getElementById('btn-menu');
let menu = document.getElementById('menu');
contador = 0;

btn.addEventListener('click', function(){

    if(contador == 0){
        menu.className = ("mostrar");
        contador = 1;
    }else {
       menu.classList.remove("mostrar");
        contador = 0;
    }
})

window.addEventListener('resize', function(){

    if(screen.width > 800){
        menu.classList.remove("mostrar");
        contador = 0;

    }
})