/*
let zone = document.querySelector("#zone")
let contenu = ["coucou Nico", "Coucou Eric", "Coucou Ludi", "Coucou Chris"]
let template =``
contenu.forEach(texte=>{
    template+= `<p>${texte}</p>`
})

zone.innerHTML = template*/
/*
let zone = document.querySelector("#zone")



let template=``
    donnees.forEach(donnee=>{
    let morceau = `<div class="card">
        <img src="${donnee.image}" alt="">
        <h2>${donnee.titre}</h2>
        <p>${donnee.description}</p>
        </div>`
        template+= morceau
        console.log(template)
})


zone.innerHTML = template
*/
/**
 * Sans variables intermédiaires
 * 
    donnees.forEach(donnee=>{
        zone.innerHTML+= `<div class="card">
        <img src="${donnee.image}" alt="">
        <h2>${donnee.titre}</h2>
        <p>${donnee.description}</p>
        </div>`    
})
 */


// 1. objet natif de javascript XMLHttpRequest
function reqListener() {
    // traitement de la réponse
    console.log(this.responseText);
}
/*
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "./donnee.json");
req.send();*/

// 2. utiliser une libraire jQuery
/*
$.ajax({
    url : "./donnee.json",
    method: "GET",
    dataType: "json",
    success : function(reponse){
        console.log(reponse)
    },
    error: function(err){
        console.log(err)
    }
})*/
  

// 3. utiliser la fonction fetch

let options={
    method: "GET"
}

fetch("./donnee.json",options)
.then(toto=>{
    console.log(toto)
    return toto.json()
})
.then(data=>{
    // ici j'ai access a ma donnée
    console.log(data)
    construitMonTemplate(data)
})




function construitMonTemplate(donnees){
    donnees.forEach(donnee=>{
        zone.innerHTML+= `<div class="card">
        <img src="${donnee.image}" alt="">
        <h2>${donnee.titre}</h2>
        <p>${donnee.description}</p>
        </div>`    
    })  
}