// je recupere mon petit carré qui me sert de personnage
let player = document.querySelector("#player")

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowUp"){
        // vers le haut
        let top = parseInt(player.style.top)
        if(top>0){
            player.style.top = top - 16 +'px'
        }else{
            player.style.top = "0px"
        }   
        
    }else if(e.key ==="ArrowDown"){
        // vers le bas
        let top = parseInt(player.style.top)
        if(top < window.innerHeight - player.clientHeight){
            player.style.top = top + 16 +'px'
        }else{
            player.style.top = window.innerHeight-player.clientHeight+"px"
        }  
       
    }else if(e.key === "ArrowLeft"){
        // vers la gauche
        let left = parseInt(player.style.left)   
        if(left >0){
          player.style.left = left - 16 +'px'  
        }else{
            player.style.left = "0px"
        }
        
    }else if(e.key === "ArrowRight"){
        // vers la droite
        
        let left = parseInt(player.style.left)  
        if(left < window.innerWidth - player.clientWidth){
            player.style.left = left + 16 +'px'
        }else{
            player.style.left = window.innerWidth - player.clientWidth+"px"
        } 
        
    }
})

