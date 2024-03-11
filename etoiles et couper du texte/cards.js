/**
 * Coupe du texte en comptant les caracteres
 * @param {Number} nombre 
 */
function coupe1(nombre){
    let paragraphs = document.querySelectorAll(".card p")
    paragraphs.forEach(p=>{
        let text = p.innerText
        p.innerText = text.slice(0,nombre)+"..."
    })
}
/**
 * Couper un paragraphe en selectionnant le nombre de mots
 * @param {Number} nombre de mot dans le paragraphe final 
 */
function coupeMot(nombre){
    let paragraphs = document.querySelectorAll(".card p")
    paragraphs.forEach(p=>{
        let tab=p.innerText.split(" ");
        let newp=""
        // si je n'ai pas le bon nombre de mot dans le paragraphe (j'en ai moins)
        if(tab.length >= nombre){
            for(let i=0;i<=nombre; i++){
                newp+=tab[i]+" "
            }
            p.innerText = newp;
        }
        
    }) 
}

coupeMot(20)