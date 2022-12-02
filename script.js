let nomKevin = document.getElementById("nombreKevin");
let nomDani = document.getElementById("nombreDani");

let fichKevin=document.getElementById("fichaKevin");
let fichDani=document.getElementById("fichaDani");

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

