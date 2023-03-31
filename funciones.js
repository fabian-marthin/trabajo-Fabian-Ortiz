console.log("holaaa")
const btnMenuHamb = document.querySelector(".btnMenuHamb");
btnMenuHamb.addEventListener("click", abrirMenu);

const menuDelHamb = document.querySelector(".btn-menu");

const cerrarMenu = document.querySelector(".cerrarMenu");
cerrarMenu.addEventListener("click", abrirMenu);

function abrirMenu(){
    const menuAbierto = menuDelHamb.classList.contains("inactive");
    if(menuAbierto){
        menuDelHamb.classList.remove("inactive");
    }
    else if(!menuAbierto){
        menuDelHamb.classList.add("inactive");
    }
return abrirMenu;
}

const izq = document.querySelector(".izq");
const der = document.querySelector(".der");
const slider = document.querySelector(".slider");

izq.addEventListener("click", () => {
    slider.scrollLeft -= anchoPantalla(window.innerWidth)*0.738;
});
der.addEventListener("click", () => {
    slider.scrollLeft += anchoPantalla(window.innerWidth)*0.738;
});

function anchoPantalla(pantalla){
    if(pantalla>1000){
        return 1000;
    }else{
        return window.innerWidth;
    }
};

