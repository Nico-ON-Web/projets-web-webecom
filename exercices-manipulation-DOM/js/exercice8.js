let select = document.querySelector(".list-container")

// lorsque je clique sur la liste déroulante elle s'ouvre
select.addEventListener("click",()=>{
    // les options s'affichent
    let listOption = select.querySelector(".list-options")
    let listOptionsContainer = select.querySelector(".list-options-container")
    // si ma liste deroulante possede la classe liste opened
    if(select.classList.contains("list-opened")){
        // je referme les options
        listOption.style.height = "0px";
        select.classList.remove("list-opened");
    }else{
        // sinon j'ouvre les options
        select.classList.add("list-opened")
        listOption.style.height = listOptionsContainer.clientHeight+"px"
    }
    
    let listinput = select.querySelector(".list-input")
    // je recupere les différentes options
    let options= select.querySelectorAll(".option")
    // pour chacune des options si je clique dessus
    options.forEach(option=>{
        console.log("le cliiiique")
        option.addEventListener("click",()=>{
            // Le texte affiché dans l'entete de la liste déroulante devient le texte de l'option sur laquelle j'ai cliqué
            listinput.innerText = option.innerText;
        })
    })
    
})