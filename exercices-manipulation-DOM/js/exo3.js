let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2")


div1.addEventListener("click",()=>{
    div1.style.backgroundColor = "green"
    div2.style.backgroundColor = "green"
})

div2.addEventListener("click",()=>{
    if(div2.style.backgroundColor =="blue"){
        div2.style.backgroundColor ="red"
        div2.style.borderRadius = "0%"
    }else{
        div2.style.backgroundColor ="blue"
        div2.style.borderRadius = "50%"
    }
    
})


// Exercice 4 :

document.querySelectorAll("#exo4 div").forEach(div=>{
    div.addEventListener("click",()=>{
        document.querySelector(".activeDiv") ? document.querySelector(".activeDiv").classList.remove("activeDiv") : ""
        div.classList.add("activeDiv")
    })
})


 // Exercice 5 : 


