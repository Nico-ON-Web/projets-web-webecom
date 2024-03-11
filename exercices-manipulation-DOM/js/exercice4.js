
// Je recupere dans mon document TOUTES mes divs
let divs = document.querySelectorAll("div")
// pour chacune de ces div , 
divs.forEach(div=>{
    //j'ecoute le clic Je clique sur une div
    div.addEventListener('click',()=>{
        let active = document.querySelector(".div-active")
        // Si j'ai une div colorée, je la décolore (enleve sa classe div-active)
        if(active){
            active.classList.remove("div-active")
        }

        // elle se rempli / colore (je lui donne la classe div-active)
        div.classList.add("div-active")
        
        // derniere étape pas demandée
        if(div===active){
            div.classList.remove("div-active")
        }
    })
    
})
