let madiv = document.getElementById("madiv")
// je pose un ecouteur d'evenement 
madiv.addEventListener("click",(e)=>{
    console.log(madiv)
})



window.addEventListener("keypress",mafonction)
window.removeEventListener("keypress",mafonction)

function mafonction(e){
    // e l'eveneement lui meme
    console.log(e.target)
}

// une fois que le dom est chargé
// DOMContentLoaded

document.addEventListener("DOMContentLoaded",chargement)
function chargement(){
    console.log("code executé au chargement de la page")
}