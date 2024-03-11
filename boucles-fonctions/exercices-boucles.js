// Exercices FONCTIONS , TESTS ET BOUCLES
// Exercice 1
let n=9;

for(let i=1; i<=10; i++){
    console.log(i +" x " + n +" = "+ i*n )
}

//Exercice 2 :
let monDePasse = "azerty"
// on pourrait faire taper a l'utilisateur un mdp et le tester
// motDePasse = prompt("Choissisez un mot de passe")
if(monDePasse.length <8){
    // c'est pas bon
  // alert("votre mot de passe est trop court")
}

// Exercice 3 :
let notes = [12,10,15,16,20,20,15,16]
let somme = 0;

notes.forEach(note=>{
    somme += note
    // somme = somme + note
})
//console.log(somme)
let moyenne = somme / notes.length
console.log(moyenne)


