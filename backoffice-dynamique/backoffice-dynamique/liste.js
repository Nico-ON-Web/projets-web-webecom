fetch('./produits.json').then(rep=>{
    return rep.json()
}).then(data=>{
    buildList(data)
    let search = document.querySelector("#search")
    search.addEventListener("change",()=>{
        sortTable(data,search.value)
    })

    let produits= triPrix(data,"ASC",(d)=>{
        buildList(d)
    })
})

function buildList(produits) {
    let body = document.querySelector("table tbody")
    body.innerHTML=""
    produits.forEach(p => {
        let template = `
        <tr>
            <td>${p.reference}</td>
            <td>${p.categorie}</td>
            <td>${p.libelle}</td>
            <td>${p.prix}€</td>
            <td>
                <div class="stock ${p.stock>=0 ? "stock-ok" : "stock-nok"}"></div>
            </td>
            <td>
                <a href="vueProduit.html?ref=${p.reference}"><span class="picto picto-eye"></span></a>
                <a href=""><span class="picto picto-edit"></span></a>
                <a href=""><span class="picto picto-delete"></span></a>
            </td>
        </tr>
        `
        body.innerHTML+= template;
    });

}

function sortTable(produits,val){
    // ici on peut aussi utiliser string.includes() mais dans ce cas la il faut bien passer chaque valeurs en minucule pour faire une recherche 
    let reg = new RegExp(val,"i")
    console.log(reg)
    let results =[]
    produits.forEach(p=>{
        console.log(reg.test(p.libelle))
        if(reg.test(p.libelle) || reg.test(p.description) || reg.test(p.categorie)){
            results.push(p)
        }
    })
    console.log(results)
    buildList(results)
}

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
})

/**
 * 
 * @param {*} produits 
 * @param {string} ordre ASC ascendant , DESC descendant 
 */
function triPrix(produits,ordre="ASC",callable){
    if(ordre == "ASC"){
         produits.sort((a,b)=>{
            return a.prix - b.prix
        })
    }else{
        produits.sort((a,b)=>{
            return b.prix - a.prix  
        })
    }
    callable(produits)
    return produits;
}