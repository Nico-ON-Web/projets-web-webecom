// ceci est un commentaire sur une ligne.
/* le commentaire 
    sur plusieurs 
    lignes
 */

//permet d'afficher quelque chose en console
console.log("Hello world");

// Boites : variables 
// déclarer une variable 
var maVariable = 42;

let maVariable2 = 63; //ES6
const c = 300000; 

// Types NUMBER (nombres)
let somme = 5 + 3; // opérations mathématiques de base + - / * %

let iterateur = 1;
iterateur = iterateur + 1; 
iterateur +=1 
iterateur++

console.log("itérateur :" ,iterateur)
// Cas d'usage du modulo : 
// est ce que un nombre est pair : 
// 12%2 = 0 => nombre est pair

// pour de opérations mathématiques plus complexes : Math
console.log(Math.PI);


// type STRING : chaine de caractères
//guillemets simples , doubles ou antiquotes

let prenom = "Nicolas";
let prenom2 = 'Corentin';
let prenom3 = `Charles`;

let phrase = 'Eric a dit : "signez vos feuillles de présence"';
let phrase2= "je m'apelle Nicolas";

// longueur d'une chaine de caractere
console.log(prenom.length);

// Operations sur les chaines de caractères : 
// On peut les mettre bout a bout : concaténation
console.log("Bonjour"+" "+prenom);
// Interpolation
let phrase3 = `Bonjour ${prenom} et bienvenue à toi !`
console.log(phrase3)

//passer une phrase en majuscule 
prenom.toUpperCase()
// minuscule :
prenom.toLowerCase()
let chaine = "   des trucs  ";
console.log(chaine.trim())
// position d'une chaine , d'une lettre dans une chaine
let position = prenom.indexOf("N");
console.log(position)

// Tableaux, listes : type ARRAY 
let tab = [1,2,3,4,5];
let tab2 = ["a","b","c","d"];
// longueur : nombre d'elements dans ce tableau
let longueur =tab2.length

// le premier élément est a la position 0
console.log(tab2[0]) 
// le dernier élément :
console.log(tab2[tab2.length-1]); 

// rajouter un élément dans un tableau : 
tab2.push("e")

// transformer une chaine de caractere en tableau 
let str = "Bonjour les gens"
let tableau = str.split(" ")
console.log(tableau)
// transformer un tableau en chaine de caractere
console.log(tableau.join(" "));

// Type : Bool (Boolean)
let vrai = true;
let faux = false;


// Exemple de typage :
/**
 * La variable toto devrait etre un tableau 
 * @type {Array} 
 */
let toto= "4242242424"
console.log(toto)


// Objet (JSON)
let obj = {
    cle : "valeur",
    age : 25,
    prenom : "Nicolas"
}

console.log(obj)
console.log(obj.age)
console.log(obj.prenom)


// Operateurs de comparaison 

let n1 = 2;
let n2 = "2";

// Comparer : ==  compare les valeurs en se moquant du type
// === compare les valeurs ET le type
// n1>n2
// n1<= n2 ... 
// !== différent 
// La comparaison renvoie un booléen vrai/faux 

// Test 
// SI (si ma condition est verifiée) 
// ALORS
// j'exécute un bout de code
// SINON
// J'execute un autre bout de code

let n = 10;
if(n>=5){
    // condition vraie
    console.log("le nombre est superieur ou égal à 5") 
}else{
    //
    console.log("le nombre est inferieur a 5")
}

// Opérateur logique ET && / OU ||
// exemple : je veux tester si un nombre est compris entre 5 et 10

if(5<n && n<10){
    // ici n est compris entre 5 et 10
}else if(n<5){
    // le nombre est plus petit que 5
}else{
    // le nombre est plus grand que 10
    console.log("on tombe ici")
}


// Les boucles 

// compteur i = initialiser le compteur;
// tant que i<= valeur d'arret;
// i++
for(let i=0;i<10;i++){
    // le code a répéter
    console.log("valeur de i :", i)
}

//autre utilité de la boucle lire un tableau
// lire ce tableau et afficher chacun de ses eléments en console. 
let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for(let i=0;i<=alpha.length-1; i++){
    console.log(alpha[i])
}


//   () => parentheses
//   [] => crochets (tableaux)
//   {} => accolades (test, boucles, JSON, interpolation)
//   " " => guillemets doubles/ doubles quotes
//   ' ' => guillemets simples / simples quotes
//   ` ` => antiquotes / backticks 

let prenoms = ["Nico","Florent","Leila", "Baptista"]

// forEach => pour chacun 
prenoms.forEach(prenom=>{
    // j'ai acces a chaque element un par un
    console.log(prenom)
})

