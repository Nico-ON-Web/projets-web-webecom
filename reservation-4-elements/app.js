// Affichage du récap a la soumission du formulaire
let form = document.querySelector("#monForm")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    buildRecap()
})
// afficher la liste des suite si l'hotel feu est selectionné
document.querySelector("#choixhotel").addEventListener("change",(e)=>{
    if(e.target.selectedOptions[0].value==="feu"){
        document.querySelector("#suite").classList.remove("d-none")
    }else{
        document.querySelector("#suite").classList.add("d-none")
    }
})

let choixRepas = document.querySelectorAll("#choix-repas input[type='checkbox']")
choixRepas.forEach(c=>{
    c.addEventListener("click",()=>{
        // Si je clique sur ponctuel
        activerDesactiverRepas(c)
        // j'affiche les intolerances alimentaires   
        toggleIntolerances()
    })
})

function activerDesactiverRepas(elt){
    if(elt == document.querySelector("#ponctuel")){
        // je décoches petit dej midi et soir
        document.querySelector("#petitdejeuner").checked = false
        document.querySelector("#midi").checked = false
        document.querySelector("#soir").checked = false
    }else{
        document.querySelector("#ponctuel").checked = false
    }
}

function toggleIntolerances(){
    let alimentaire = document.querySelector("#alimentaire")
    if( document.querySelector("#midi").checked ===true ||
        document.querySelector("#soir").checked=== true ||
        document.querySelector("#ponctuel").checked=== true||
        document.querySelector("#petit-dejeuner").checked===true){
        alimentaire.classList.remove("d-none")
    }else{
        alimentaire.classList.add("d-none")
    }
}

function buildRecap(){
    let form= document.querySelector("#monForm")
    let formdata= new FormData(form)
    let F = {}
    formdata.forEach((v,k)=>{
        F[k]=v
    })
    console.log(F)
    let nbjours= jours(F.arrivee,F.depart)
    
    let tarifs = {
        igloos: 500,
        lapones: 800
    }
    let prix = prixNuit(nbjours,F.choixsuite)
    let prixPetitDej = F.petitdejeuner ? nbjours * F.nombrepersonnes * 15 : 0
    let prixMidi = F.midi ? nbjours * F.nombrepersonnes * 25 : 0
    let prixSoir = F.soir ? nbjours * F.nombrepersonnes * 25 : 0
    let prixVisite = F.visite ? 20 :0
    let total = prix+ prixPetitDej+ prixMidi + prixSoir + prixVisite
    let template = `
    <h2>Récapituliatif de votre reservation</h2>
        <h3>Coordonnées</h3>
        <p>${F.nom} ${F.prenom}</p>
        <p>${F.numero} ${F.rue} ${F.cp} ${F.ville}</p>
        <p>Tel : ${F.tel}</p>
        <p>email : ${F.email}</p>
        <hr>
        <h3>Détails de la reservation</h3>
        <p>${F.nombrepersonnes} personnes</p>
        <p>hotel: ${F.choixhotel}</p>
        <p>Suite : ${F.choixsuite}</p>
        <p>Arrivée : ${F.arrivee}    Départ :${F.depart}     soit:${nbjours} jours/ nuits</p>
        <p>prix de l'hebergement :${nbjours} x ${tarifs[F.choixsuite]} = ${prix} </p>
        <hr>
        <h3>Options supplémentaires</h3>
        <p>petits dejeuners (15€/repas): ${prixPetitDej} €</p>
        <p>midi (25€/repas): ${prixMidi}   €</p>
        <p>soir (25€/repas):  ${prixSoir}  €</p>
        <p>Visite du domaine et du parc naturel : ${prixVisite} €</p>
        <hr>
        <h3>TOTAL :${total}€ </h3>
    `
    let modal = document.querySelector(".zoneModal")
 
    modal.innerHTML = template
    openModal()

}

function openModal(){
    let modal = document.querySelector(".modal")
    let mask= document.querySelector(".mask")
    modal.classList.remove("d-none")
    mask.classList.remove("d-none")
}
function closeModal(){
    let modal = document.querySelector(".modal")
    let mask= document.querySelector(".mask")
    modal.classList.add("d-none")
    mask.classList.add("d-none")
}


document.querySelector("#retour").addEventListener("click",()=>{
    closeModal()
})
document.querySelector("#payer").addEventListener("click",()=>{
    form.submit()
})


function jours(a,d){
   let s = (new Date(d) - new Date(a)) / (1000 *60 *60 *24) 
   console.log(s)
   return s
}

function prixNuit(n,suite){
    let tarifs = {
        igloo: 500,
        lapone: 800
    }
    let prix;
    if(suite === 'igloo'){
        return 500*n
    }else{
        return 800 * n
    }

}
