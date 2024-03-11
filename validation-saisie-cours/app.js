// pose des ecouteurs d'evenements pour ecouter les changements
// et afficher les erreurs en temps réel a la saisie
let nom = document.getElementById("nom")
nom.addEventListener("change",()=>{
    testNom()
})

let message =document.getElementById("message")
message.addEventListener("change",testMessage)

let sujet = document.getElementById("sujet")
sujet.addEventListener("change",testSujet)

// Compteur de caractere
let long = document.getElementById("long")
message.addEventListener("input",()=>{
    long.innerText = message.value.length+"/500"
})

/**Fonctions qui testent les champs un par un */

function testNom(){
    // est ce que l'utilisateur a bien rempli ce champs nom
    // on teste si le champs est vide
    if(nom.value==""){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficheErreur("nom", "Ce champs ne peux pas être vide")
        return false
    }else{
        // on tester si l'utilisateur a bien utliser 
        // des caracteres alphabetiques 
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        //let reg = /^[\p{L}\s-]+$/
        let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
      //  let reg = /^[\p{L}\p{M}\'\-]+$/
        if(reg.test(nom.value)===false){
            // il y a des chiffres
            afficheErreur("nom", "Ce champ comporte des caractère non autorisés")
            return false
        }else if(hasCode(nom.value)){ 
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficheErreur("nom", "Vous ne pouvez pas injecter de code ici!")
            return false
        }else if(nom.value.length >=40){
            afficheErreur("nom", "Vous avez tapé un nom trop long!")
        }
    } 
    enleveErreur("nom")
    return true
}


function testMessage(){
    // Teste si le champs est vide
    // si le champs ne comporte pas de code
    // si le message n'est pas plus long que 500 caractères
    if(message.value == ""){
        afficheErreur("message","Votre message est vide")
        return false
    }else if(hasCode(message.value)){
        afficheErreur("message","Vous ne pouvez pas écrire de script ici")
        return false
    }else if(message.value.length >500){
        afficheErreur("message","Votre message est trop long")
        return false
    }
    enleveErreur("message")
    return true
}

function testSujet(){
    if(sujet.value === ""){
        afficheErreur("sujet","Merci de choisir un sujet")
        return false
    }else{
        enleveErreur("sujet")
        return true
    }
}

function hasCode(text){
    // cette fonction cherche dans une chaine s'il y a une balise script
    // retour true : y'a du code
    // false :y'a pas de code
    let reg = /<script/
    return reg.test(text)
    
}


/** Fonctions d'affichage */
function afficheErreur(id,messageErreur){
    // Role : Afficher une erreur : mettre une bordure sur le bon input, et remplir le paragraphe d'erreur associé
    // Parametres : id l'id de l'input dans le quel il y a une erreur
    // messageErreur : le message a afficher
    // retour: rien !
    let input = document.getElementById(id)
    input.classList.add("input-error")
    let p = document.getElementById("error-"+id)
    p.innerText = messageErreur 
    p.classList.remove("d-none")
    
}

function enleveErreur(id){
    // Role: eneleve l'erreur sur l'input et cache le paragraphe associé
    let input = document.getElementById(id)
    input.classList.remove("input-error")
    let p = document.getElementById("error-"+id)
    p.innerText =""
    p.classList.add("d-none")
}



// A la soumission du formulaire 
// on relance notre batterie de tests
// (on re- apelle nos fonctions de test)
// si toutes les fonctions retournent true
// j'envoie le formulaire

let monform = document.getElementById('monform')
monform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let test1 = testNom()
    let test2 = testMessage()
    let test3 = testSujet()

    if(test1===true && test2 === true && test3 ===true){
        monform.submit()
    }
})

