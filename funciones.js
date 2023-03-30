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