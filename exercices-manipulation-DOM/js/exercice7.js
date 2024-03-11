let acc = document.querySelector("#acc")

acc.querySelectorAll(".accordeon-item").forEach(elt=>{
    console.log(elt)
    let title = elt.querySelector(".accordeon-title")
    console.log(title)
    title.addEventListener("click",()=>{
        // Je refereme la zone ouverte
       let current = acc.querySelector(".accordeon-open")
       if(current){
        current.classList.remove("accordeon-open")
        current.style.height = "0px"
       }

       elt.querySelector(".accordeon-content-container").classList.add('accordeon-open')
       elt.querySelector(".accordeon-content-container").style.height = elt.querySelector(".accordeon-content").clientHeight +"px"
    })
})