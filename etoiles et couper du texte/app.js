// ☆ ★

/**
 * Ecris une notation sous forme d'etoiles en fonction d'une note
 * @param {Number} note 
 * @returns {String} le bon nombre d'étoile
 */
function stars1(note){
    // Role : 
    // nature des parametres
    // le retour
    if(note === 0){
        return "☆☆☆☆☆" 
    }else if(note===1){
        return "★☆☆☆☆"
    }else if(note===2){
        return "★★☆☆☆"
    }else if(note===3){
        return "★★★☆☆"
    }else if(note===4){
        return "★★★★☆"
    }else{
        return "★★★★★"
    }
}

/**
 * Ecris une notation sous forme d'etoiles en fonction d'une note
 * @param {Number} note 
 * @returns {String} le bon nombre d'étoile
 */
function stars2(note,max=5){
    // j'ai toujours "note" etoiles pleines
    // 5-note etoiles vides
    let chaine ="";
    // je rejoute les etoiles pleines
    for(let i=0;i<note;i++){
        chaine+="★"
    }
    // je rajoute les etoiles vides
    for(let i=0; i<max-note;i++){
        chaine+= "☆"
    }

    return chaine
}

function stars3(note, max=5){
    if(typeof note !== "number"){
        console.error("Le parametre note n'est pas au format nombre")
        return ""
    }
    return "★".repeat(note) + "☆".repeat(max-note)
}


let etoiles = document.querySelectorAll(".notes span")
etoiles.forEach((etoile,pos)=>{
 
    // Si je clique sur une étoile 
    etoile.addEventListener("click",()=>{   
        console.log(pos)
        // je vide tout
        videTout()
        // les etoiles jusqua celle que j'ai cliqué deviennent pleine
        for(let i=0; i<=pos; i++){
            etoiles[i].innerText="★"
        }
        afficheLaValeurDeLaNote(pos+1)
    }) 
})


//si je clique sur le bouton effacer 
document.querySelector(".effacer").addEventListener("click",videTout)
    // je vide tout 


function videTout(){
    // Role : remplacer toutes les etoiles par des etoiles vides
    for(let i=0; i<etoiles.length;i++){
        etoiles[i].innerText = "☆"
    }
    afficheLaValeurDeLaNote(0)
}

function afficheLaValeurDeLaNote(note){
// j'affiche le texte de la note / ()
    document.querySelector(".ma-note").innerText=`(${note}/5)`
}



// afficher 3.3 etoiles

function rempliLesEtoiles(note){
    let cursor = document.querySelector(".curseur")
    let percent = note/5 * 100
    cursor.style.width =`${percent}%`
}



