//Funcion que muestra/esconde un div con informacion al hacer click en el nombre de cada persona
//Lo hago alternando la clase CSS "invisible" entre las asignadas a la capa que quiero mostrar/ocultar
//Esta capa tiene el atributo "display:none"

let nomKevin = document.getElementById("nombreKevin");
let nomDani = document.getElementById("nombreDani");

let fichKevin=document.getElementById("fichaKevin");
let fichDani=document.getElementById("fichaDani");

/*
Primero la hice con una funcion anonima para cada click

nomKevin.addEventListener("click", ()=>{
    if(fichKevin.classList.contains("invisible")){
        fichKevin.classList.remove("invisible");
        fichDani.classList.add("invisible");
        
    }
    else{
        fichKevin.classList.add("invisible");
        
    }
});

nomDani.addEventListener("click", ()=>{
    if(fichDani.classList.contains("invisible")){
        fichDani.classList.remove("invisible");
        fichKevin.classList.add("invisible");
    }
    else{
        fichDani.classList.add("invisible");
        
    }
});
*/

//Aqui lo mismo con un diseño algo mas depurado
nomKevin.addEventListener("click", function(){cambiaInfo(fichKevin, fichDani)});
nomDani.addEventListener("click", function(){cambiaInfo (fichDani, fichKevin)});

function cambiaInfo( fichaActiva, fichaInactiva){
    if(fichaActiva.classList.contains("invisible")){
        fichaActiva.classList.remove("invisible");
        fichaInactiva.classList.add("invisible");        
    }
    else{
        fichaActiva.classList.add("invisible");        
    }
}

//Esconde todas las fichas del navegador y muestra solo la que se clica
//Funcion parecida a la anterior para segir con la practica
//Esta vez uso el atributo z-index para mostrar/ocultar las capas
let elijoHTML=document.querySelectorAll("#menusNavegacion p");
elijoHTML[0].addEventListener("click", function(){escondefichas(0)});
elijoHTML[1].addEventListener("click", function(){escondefichas(1)});
elijoHTML[2].addEventListener("click", function(){escondefichas(2)});

function escondefichas(numero){
    let fichasdeNavegar=document.querySelectorAll(".fichaNav");
    if(fichasdeNavegar[numero].style.zIndex=="2"){
        fichasdeNavegar[numero].style.zIndex="-1"
    }
    else{
        for(let i=0; i<fichasdeNavegar.length; i++){
            fichasdeNavegar[i].style.zIndex="-1";
        }
        fichasdeNavegar[numero].style.zIndex="2";
   }
}

//Funcion que muestra una ventana emergente cuando la pantalla es menor de 100px
//para completar el responsive
window.addEventListener("resize", function(){
    if(window.innerHeight<100){
        alert("bastante pequeña ya, no??");        
    } 
});

