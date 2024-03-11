// je lis ce qu'il y a comme parametre apres ref= dans l'url 
let s = window.location.search;
let ref = s.split("=")[1]
console.log(ref)
fetch('./produits.json').then(rep=>{
    return rep.json()
}).then(data=>{
    data.forEach(element => {
        if(element.reference == ref){
            buildDetail(element)
        }
    });
})


function buildDetail(produit){
    let template=`
    <div class="flex justify-between align-center">
        <div class="large-4">
            <img src="./imagesProduits/${produit.photo}" class="responsive" alt="">
        </div>
        <div class="large-8">
            <div class="flex justify-between">
                <h2>${produit.libelle}</h2>
                <div class="flex">
                    <div class="stock ${produit.stock>=0 ? "stock-ok" : "stock-nok"}"></div>
                    <p>En stock (${produit.stock})</p>
                </div>
            </div>
            <div class="flex justify-between align-center mt-16">
                <div>
                    <p><b>Référence :</b>${produit.reference}</p>
                    <div class="badge">${produit.categorie}</div>
                </div>
                <div>
                    <p class="prix">${produit.prix}€</p>
                </div>
            </div>
            <p class="mt-16">${produit.description}</p>
        </div>
    </div>`
    document.querySelector("#zone").innerHTML= template
}


search.addEventListener("keydown",(e)=>{
    if(e.key === ""){
        afficheResultat()
    }
})