// Exercice 5 

// ROle : Afficher en console salut, a quelqu'un dont le nom et prenom sont passés en parametre
// retour : rien
// parametre : nom et prenom, 2 chaines de caractère
function salut(prenom,nom){
    console.log(`Salut ${prenom} ${nom}`)
    document.write(`<h2>Salut ${prenom} ${nom}</h2>`)
}
// je l'utilise en lui donant ce qu'elle a besoin pour bosser !
salut("Nico","Ouillon")
salut("Martin", "Dupont")
salut("Jean","De La Fontaine")

// Exercice 6 : 
// Role :Cette fonction calcule la moyenne d'un tableau de notes
// Parametre : notes , un tableau de notes
// retour : la moyenne calculée
function moyenne(notes){
    let s = somme(notes);
    return s/notes.length
}

// Role: cette fonction fait la somme des elements d'un tableau 
// parametre : notes, un tableau de notes
// Retour : la somme calculée
function somme(notes){
    let somme = 0;
    notes.forEach(note => {
        somme += note
    });
    return somme
}

// On l'utilise : 
let noteNico = [20,16,9,15,16]
let moy = moyenne(noteNico)
console.log(moy)



// Exercice 7 : 
// [1,2,3]    ...[1,2,3]    1,2,3
// let tab1 = [1,2,3]
// let tab2 =[...tab1, 4,5,6]
function lePlusPetit(notes){
    // Role : trouver la plus petite note d'un tableau de notes
    // parametres: notes, le tableau de notes
    // retour : la plus petite note
    return Math.min(...notes)
}


/**
 * Decrire le role
 * @param {[Number]} notes un tableau de nombres
 * @returns 
 */
function lePlusPetit2(notes){
    // Role : trouver la plus petite note d'un tableau de notes
    // parametres: notes, le tableau de notes
    // retour : la plus petite note
    notes.sort((a, b)=>{
        return a - b;
    });
    console.log(notes)
    return notes[0]
}


let panier =["pomme", "pomme", "cerise", "poire", "pomme","cerise","pomme","abricot", "cerise", "poire","abricot","pomme", "abricot","pomme"]


function compteLesPommes(fruits){
    // Role: compter les pommes dans un tableau de fruits
    // Parametres : fruits, le tableau de fruits 
    // Retour : rien
    let compteurDePommes = 0
    fruits.forEach(fruit=>{
        if(fruit === "pomme"){
            compteurDePommes++
        }
    })

    console.log(`il y a ${compteurDePommes} pommes dans le panier`);
}

// je l'utilise : 
compteLesPommes(panier)

function compteLesFruits(fruits){
    // Role: compter les différents fruits dans un tableau de fruits
    // Parametres : fruits, le tableau de fruits 
    // Retour : rien
    let compteurDePommes = 0
    let compteurDeCerises = 0
    let compteurDePoires = 0
    let compteurDAbricots = 0

    fruits.forEach(fruit=>{
        if(fruit === "pomme"){
            compteurDePommes++
        }else if(fruit ==="cerise"){
            compteurDeCerises++
        }else if(fruit === "poire"){
            compteurDePoires++
        }else{
            compteurDAbricots++
        }
    })
    
    console.log(`Dans le panier il y a ${compteurDePommes} pommes, ${compteurDePoires} poires, ${compteurDeCerises} cerises, et ${compteurDAbricots} abricots`);
}

compteLesFruits(panier)


// Exercice 9 : Transcription 
let ADN ="ACTCTAGCTGCAGTCGTGAATGCAGTCGTACGACACGTGCTCAGTAGTCACATGCA"

function transcription(adn){
    // Role : transcrire un brin d'adn
    // Parametre: le brin d'adn (chaine de caracteres)
    // retour : Le brin d'ARN transcrit
    let arn ="";
    for(let i=0; i<adn.length; i++){
        if(adn[i] ==="A"){
            arn +="T"
        }else if(adn[i] === "C"){
            arn+= "G"
        }else if(adn[i]==="G"){
            arn += "C"
        }else{
            arn +="U"
        }
    }
    return arn
    
}

let ARN = transcription(ADN)
console.log(ARN)
console.log(transcription(ADN))

// REMARQUES
// ES5 
function mafonction(){

}
// ES6
const maFunction = ()=>{
    console.log("coucou")
}



