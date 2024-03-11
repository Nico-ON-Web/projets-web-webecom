// Exercice 1
let nombre= 10;
if(nombre === 10){
    console.log("Le nombre vaut 10")
}else{
    console.log("ce nombre ne vaut pas 10")
}

// Exercice 2 
if("Hello" === "hello"){
    console.log("ces chaines sont identique")
}else{
    console.log("elle sont différentes")
}

if("Hello" !== "hello"){
    console.log("elle sont différentes")
}else{
    console.log("elles sont identiques")
}

// Exercice 3
if(8>12 === false){
    console.log("l'inégalité est fausse")
}

//  true == 1 => juste    
//  true === 1 => pas juste

// Exercice 4
let n = 1247;
if(n%2 === 0){
    console.log("ce nombre est pair")
}else{
    console.log("Ce nombre est impair")
}

// Exercice 5
let meteo = "brouillard"
if(meteo === "neige"){
    console.log("met des bottes")
}else if(meteo === "pluie"){
    console.log("n'oublie pas ton parapluie")
}else if(meteo === "soleil"){
    console.log("Prend une casquette")
}else{
    console.log("je n'ai pas compris la question!")
}

// Exercice 6
let age = 45;

if(age<12){
    console.log("enfant")
}else if(age>=12 && age<=18){
    console.log("adolescent")
}else{
    console.log("adulte")
}

// Exercice 7 
let a = 3;
let b = 3;
let c = 3;

if(a===b && a===c){
    console.log("triangle équilatéral")
}else if(a===b || a===c || b===c){
    console.log("triangle isocèle")
}else{
    console.log("triangle quelconque")
}


