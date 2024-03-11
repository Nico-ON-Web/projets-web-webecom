let header = document.querySelector("header")
let ban = document.querySelector(".baniere")

document.addEventListener("scroll", ()=>{
    if(window.scrollY > ban.clientHeight - header.clientHeight){
        header.classList.add("bg-header")
    }else{
        header.classList.remove("bg-header")
    }
})



// ouverture du menu latéral 
let burger = document.querySelector(".burger")
let lateral = document.querySelector("header nav")
burger.addEventListener("click",()=>{
    lateral.classList.toggle("open")
})