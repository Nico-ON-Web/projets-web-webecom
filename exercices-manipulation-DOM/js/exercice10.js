
let slider = document.getElementById("slider")
let slides = document.querySelectorAll(".slide")
let leftArrow = slider.querySelector(".fleche-gauche")
let rightArrow = slider.querySelector(".fleche-droite")
let currentPosition = 0 
// j'ecoute le clic sur les fleches
// si je clique sur la fleche de gauche j'affiche l'image précédente
leftArrow.addEventListener("click",precedente)
//  si je clique sur la fleche de droite j'affiche l'image suivante
rightArrow.addEventListener("click",suivante)

function suivante(){
    // je rend invisible l'image courante
    slides[currentPosition].classList.remove("active-slide")
    // j'essaye de connaitre la position de la slide suivante dans le tableau de slides
    currentPosition++
    // si je sors du talbeau : 
    if(currentPosition>slides.length-1){
        // je reviens au debut
        currentPosition=0
    }
        
    // j'affiche la diapo suivante
    slides[currentPosition].classList.add("active-slide")
}

function precedente(){
    // je rend invisible l'image courante
    slides[currentPosition].classList.remove("active-slide")
    // j'essaye de connaitre la position de la slide suivante dans le tableau de slides
    currentPosition--
    // si je sors du talbeau : 
    if(currentPosition<0){
        // je reviens au a la fin
        currentPosition=slides.length -1
    }
        
    // j'affiche la diapo suivante
    slides[currentPosition].classList.add("active-slide")
}