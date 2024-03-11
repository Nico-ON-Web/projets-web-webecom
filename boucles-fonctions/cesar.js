const alpha =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let mot = "COUCOU LES AMIS COMMENT ALLEZ VOUS";
let code = "";
for(let i=0; i<mot.length;i++){
    // si le caractere est un espace : 
    if(mot[i] === " "){
        code +=" ";   
    }else{
        // je cherche la position de la lettre dans l'alphabet
        let position = alpha.indexOf(mot[i])
        //console.log(position)
        // je cherche la position suivante
        let positionSuivante;
        // si je suis a la position 25 (fin du tableau) la position suivante est la position 0 (je reviens au début)
        if(position===25){
            positionSuivante = 0
        }else{
            // sinon la position suivante est la position acutelle de ma lettre plus 1
            positionSuivante = position+1
            //console.log("position :"+position,"position suivante: "+ positionSuivante)
        }
        // je rajoute la lettre trouvée a mon mot encodé
        code+=alpha[positionSuivante]  
    }
    
}
console.log(code)

