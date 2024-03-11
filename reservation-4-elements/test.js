/**UN PEU DE SUCRE SYNTAXIQUE : L'operateur ternaire */
// novalidate

let variable = "truc"

if(variable === "truc"){
    console.log("oui")
}else{
    console.log("non")
}
// une facon d'écrire un test if sur une seule  ligne
console.log(variable === "truc" ? "oui" : "non")

let form= document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    testDates()
})

let arrivee = document.querySelector("#arrivee")
let depart = document.querySelector("#depart")

arrivee.addEventListener("change",()=>{
    verifDate(arrivee)
})
depart.addEventListener("change",()=>{
    verifDate(depart)
})

function verifDate(dateInpput){
    if(dateInpput.valueAsDate < new Date()){
        console.log("erreur : date anterieure auourd'hui")
        // afficher l'errueur sur le champs en question 
        return false
    }
    // enlever l'erreur sur le champs en question
    return true
}

function testDates(){
    if(verifDate(arrivee)=== true && verifDate(depart)===true){
        // je teste si la date d'arrivée est bien anterieure a la date de depart
        if(arrivee.valueAsDate < depart.valueAsDate){
            // bon
            return true
        }else{
            // afficher l'erreur sur les 2 champs
            console.log("oula probleme !")
            return false
        }
    }else{
        return false
    }
}

