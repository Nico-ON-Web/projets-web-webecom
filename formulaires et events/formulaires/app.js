// 1 recuperer la valeur d'un input type text
document.getElementById("nom").value 

//select
// l'option selectionnee se recupere comme suit:
let opt = document.querySelector("#choix").selectedOptions[0]
// la valeur de l'option selectionnée
opt.value

// case a cocher 
// savoir si une case est cochée
document.getElementById("cgu").checked // true / false

// recuperer le bouton radio qui est coché
document.querySelector("input[name='genre']:checked") 

// recuperation d'une date 
//sous format chaine de caractere
document.getElementById("anniv").value
// sous le format objet Date
document.getElementById("anniv").valueAsDate


//Ecouter des evenements sur les input et sur le formulaire
// 1 : j'ecoute l'utilisateur pendant qu'il tape
let nomInput = document.getElementById("nom")
nomInput.addEventListener("input",()=>{
   //console.log(nomInput.value)
})

// 2 : ecouter les changements (une fois effectués)
nomInput.addEventListener("change",()=>{
    console.log(nomInput.value)
})

document.querySelector("#choix").addEventListener("change",(e)=>{
    console.log(e)
})

//3 : la soumission du formulaire 
let form = document.getElementById("mon-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // verfier ce qu'il a saisie
    // si c'est tout bon :
    // une fois qu'on a tout verifier on soumet le formulaire
    form.submit()   
})