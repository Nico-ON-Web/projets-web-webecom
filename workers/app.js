fetch("./workers.json").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data.profils)
    // ici j'ai acces a ma donnée
    remplirTemplate(data.profils)
})

/**
 * 
 * @param {Array} profils 
 */
function remplirTemplate(profils){
    let zone = document.getElementById("zone")
    profils.forEach(p=>{
        zone.innerHTML+= `<div class="card">
        <div class="flex align-center">
            <img src="./img/${p.photo}" alt="">
            <div class="identite">
                <h2>${p.prenom} ${p.nom}</h2>
                <p>${p.age} ans</p>
            </div>
        </div>
        <p class="metier">${p.metier}</p>
        <p class="presentation">${p.presentation}</p>
        <a href="" class="btn">Me contacter</a>
    </div>`
    })
}