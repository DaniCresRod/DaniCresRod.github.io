let nomKevin = document.getElementById("nombreKevin");
let nomDani = document.getElementById("nombreDani");

let fichKevin=document.getElementById("fichaKevin");
let fichDani=document.getElementById("fichaDani");

/*
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

//Esconde todas las fichas del navegador
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

window.addEventListener("resize", function(){
    if(window.innerHeight<100){
        alert("bastante pequeña ya, no??");        
    } 
});

