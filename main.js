let pulsante = document.querySelector(".fas.fa-bars");

pulsante.addEventListener("click", miaFunzione)

function miaFunzione(){
    let ham = document.querySelector(".hamburger-menu");
    ham.classList.add("active")
}


let croce = document.querySelector(".close");

croce.addEventListener("click", funzione)

function funzione(){
    let ham = document.querySelector(".hamburger-menu");
    ham.classList.remove("active")
}
