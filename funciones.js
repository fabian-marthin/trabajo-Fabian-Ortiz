console.log("holaaa")
const btnMenuHamb = document.querySelector(".btnMenuHamb");
btnMenuHamb.addEventListener("click", abrirMenu);

const menuDelHamb = document.querySelector(".btn-menu");


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
    slider.scrollLeft -= anchoPantalla(window.innerWidth);
});
der.addEventListener("click", () => {
    slider.scrollLeft += anchoPantalla(window.innerWidth);
    console.log(slider.scrollLeft);
});

function anchoPantalla(pantalla){
    if(pantalla>1000){
        return 1000;
    }else{
        return pantalla-17;
    }
};

