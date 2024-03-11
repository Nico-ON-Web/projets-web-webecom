// DOM : document object model
// document

// recuperer une balise par son id : 
let madiv = document.getElementById("madiv")
madiv.style.backgroundColor = "blue"

// queryselector permet de recuperer une balise en utlisant n'importe quel selecteur CSS

let h1 = document.querySelector("h1")
console.log(h1)

let monp = document.querySelector(".monp")

let div =  document.querySelector("#madiv")

let liens = document.querySelectorAll("header nav ul li a")

// Si je veux recuperer tous les p de ma page: 
let p= document.querySelectorAll("p")
p[2].innerText = "bla bla bla "
p.forEach(paragrpah =>{
    paragrpah.style.color ="red"
})

let prenom = "Nicolas"
// Ajouter / enlever des elements => modifier le contenu HTML 
h1.innerText = "J'ai changé le H1"
madiv.innerHTML = `<p>Coucou ${prenom}!</p>`

// on peut ajouter des classes css a nos balise / enlever
let h2 = document.querySelector("h2")
// ajouter une classe
h2.classList.add("green")
// enlever une classe :
h2.classList.remove("green")
// enleve une classe si elle y est deja et la rjoute si elle n'y est pas
h2.classList.toggle("green")

// classlist.contains() => verifie si une balise a un e classe ou pas

