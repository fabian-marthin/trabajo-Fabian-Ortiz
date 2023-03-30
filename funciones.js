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
    slider.scrollLeft -= window.innerWidth*0.665;
})
der.addEventListener("click", () => {
    slider.scrollLeft += window.innerWidth*0.665;
})