/**Format de l'url 
 * https://nominatim.openstreetmap.org/search/?format=json&q=restaurants+in+city&addressdetails=1&extratags=1&limit=10
 */


/**
 * VARIABLES GLOBALES
 */
var city ="saint etienne";
let limite = 10
uncheckAll()
// Les tableaux pour stocker les marqueurs (pictos) par themes
var hostelMarkers =[], restaurantMarkers=[], pubMarkers=[], museumMarkers=[], theaterMarkers=[], cinemaMarkers=[], stadiumMarkers=[]

// Map : la carte leaflet
var map = L.map('map').setView([51.505, -0.09], 13);

function getJson(url,call){
    // Role : interroge une url de maniere asynchrone et execute la fonction callback passée en parametre a la reception des données
    // parametres : 
        // url : l'url du fichier ou de l'api à interroger
        // call : le nom de la fonction a executer a la reception des données , cette fonction recoit un parametre qui contient les données
        // retour : Aucun  
    fetch(url)
    .then(rep=>{return rep.json()})
    .then(call)
    .catch(err=>console.error(err))
}

function deleteMarkers(markersTab){
    // ROle : Supprime les markers d'un tableau de markers et les retire de la carte.
    // parametre: markersTab le tableau de markers
    // retour : Aucun 
    markersTab.forEach(marker => {
        marker.remove()
    });
    markersTab =[];
}

function getMyCurrentPosition(){
    // Role : recupere les coordonnées géographiques de l'utilisateur d'apres les infos du device (autorisation requise dans le navigateur) et affiche la carte des environs de l'utilisateurs. 
    // paramètres : aucun
    // retour : aucun 
    
    navigator.geolocation.getCurrentPosition((pos) => {
        // new L.latLng(data[0].lat,data[0].lon)
        let lat = pos.coords.latitude
        let lon = pos.coords.longitude
        map.setView([lat,lon],13)
    })
    
}

function uncheckAll(){
    // Role : décoche toutes les cases à cocher
    // parametres : aucun
    // retour : aucun
    document.querySelectorAll("input[type=checkbox]").forEach(elt=>{
        elt.checked = false
    })
}



/**
 * Icones pouvant etre utilisés comme markers sur la carte
 */

const myIcons = {
    hotel : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-bed-64.png?v=1684596892975",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    }),
    restaurant : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-restaurant-64.png?v=1684596894724",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    }),
    pub : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-beer-bottle-64.png?v=1684596893487g",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    }),
    museum : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-museum-64.png?v=1684596894311",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    }),
    theater : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-theatre-68.png?v=1684596895530",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    }),
    cinema : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-film-64.png?v=1684596893984",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    }),
    stadium : L.icon({
        iconUrl: "https://cdn.glitch.global/90786347-ebd8-4719-84af-744b0cbf63be/icons8-stadium-64.png?v=1684596895161",
        iconSize : [32,32],
        iconAnchor:   [16, 16], 
        popupAnchor:  [0, 0]
    })
}



/****APP */



/**
 * EVENTS 
 */
document.getElementById("query").addEventListener("change",(e)=>{
    if(e.target.value !=""){
        city = e.target.value
        getCity(city)
    }
})
let checkHotels = document.getElementById("hotels")
checkHotels.addEventListener("change", ()=>{
    if(checkHotels.checked === true){
        getHostels(city)
    }else{
        deleteMarkers(hostelMarkers);
    }
})

let checkRestaurants = document.getElementById("restaurants")
checkRestaurants.addEventListener("change", ()=>{
    if(checkRestaurants.checked === true){
        getRestaurants(city)
    }else{
        deleteMarkers(restaurantMarkers);
    }
})

let checkedPubs = document.getElementById("pubs")
checkedPubs.addEventListener("change",()=>{
    if(checkedPubs.checked === true){
        getPubs(city)
    }else{
        deleteMarkers(pubMarkers);
    }
})

let checkMuseums = document.getElementById("musees")
checkMuseums.addEventListener("change", ()=>{
    if(checkMuseums.checked === true){
        getMuseums(city)
    }else{
        deleteMarkers(museumMarkers);
    }
})

let checkTheaters = document.getElementById("spectacles")
checkTheaters.addEventListener("change",()=>{
    if(checkTheaters.checked == true){
        getTheaters(city)
    }else{
        deleteMarkers(theaterMarkers)
    }
})

let checkedCinemas = document.getElementById("cinemas")
checkedCinemas.addEventListener('change',()=>{
    if(checkedCinemas.checked == true){
        getCinemas(city)
    }else{
        deleteMarkers(cinemaMarkers)
    }
})

let checkedStadium = document.getElementById("stades")
checkedStadium.addEventListener("change",()=>{
    if(checkedStadium.checked === true){
        getStadium(city)
    }else{
        deleteMarkers(stadiumMarkers)
    }
})

// Construction de la carte

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Carte centrée sur la ville par defaut : 
getCity(city)



function getCity(c){
    let url=`https://nominatim.openstreetmap.org/search?city=${c}&format=json&countrycodes=fr&limit=1`
    getJson(url,(data)=>{
        console.log("data récupérée par la fonction getCity")
        console.log(data)
        map.setView([data[0].lat,data[0].lon])
        city = data[0].display_name
        console.log("dans la fonction getCIty",city)
        
    })
}

function getMuseums(city){
    
    let url = `https://nominatim.openstreetmap.org/search/?format=json&q=musee+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawMuseums(data)
    })
}

function getHostels(city){
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=hotel+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawHostels(data)
    })
}

function getRestaurants(city){
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=restaurant+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawRestaurants(data)
    })
}

function getPubs(city){
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=pub+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawPubs(data)
    })
}

function getTheaters(city){
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=theatres+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawTheaters(data)
    })
}

function getCinemas(city){
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=cinemas+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawCinemas(data)
    })
}

function getStadium(city){
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=stadium+in+${city}&addressdetails=1&extratags=1&limit=${limite}&countrycodes=fr`

    getJson(url,(data)=>{
        console.log(data)
        drawStadiums(data)
    })
}


/**  FONCTION POUR DESSINER SUR LA CARTE , AJOUTER LES MARQUEURS ET LES POPUPS */


function drawMuseums(museums){

    museums.forEach(museum => {
       let mark = L.marker(new L.latLng(museum.lat,museum.lon),{icon: myIcons.museum}).addTo(map)
        .bindPopup(museum.display_name)
        
        museumMarkers.push(mark)
    });
}
function drawHostels(hostels){

    hostels.forEach(hostel => {
        let contact="";
        if(hostel.extratags){
            var stars= ``;
        if(hostel.extratags.stars){
            for(let i=1;i<=parseInt(hostel.extratags.stars);i++){
            stars += "*"
            };  
        }
        
        if(hostel.extratags['contact:website']){
        
            contact = `<a target="blank" href="${hostel.extratags['contact:website'] ? hostel.extratags['contact:website'] :""}">Voir le site</a>`  
        }
        }
        

        let mark = L.marker(new L.latLng(hostel.lat,hostel.lon),{icon: myIcons.hotel}).addTo(map)
        .bindPopup(`<h3>${hostel.address.tourism}</h3>
        <p>${hostel.address.road} ${hostel.address.postcode} ${hostel.address.city}</p>
        <h4 class="stars">${stars}</h4>
        ${contact}
        
        `)

        
        hostelMarkers.push(mark)
    });
}

function drawRestaurants(restos){
    restos.forEach(resto=>{

        console.log(resto)
        let mark = L.marker([resto.lat,resto.lon],{icon: myIcons.restaurant}).addTo(map)
        .bindPopup(`<h3>${resto.name}</h3>
        <p>${resto.address.road} ${resto.address.postcode} ${resto.address.city}</p> 
        `)
        restaurantMarkers.push(mark)
    })
}

function drawPubs(pubs){
    pubs.forEach(pub=>{
        console.log(pub)
        let mark = L.marker([pub.lat,pub.lon],{icon: myIcons.pub}).addTo(map)
        .bindPopup(`<h3>${pub.name}</h3>
        <p>${pub.address.road} ${pub.address.postcode} ${pub.address.city}</p> 
        `)
        pubMarkers.push(mark)
    })
}


function drawTheaters(theaters){
    theaters.forEach(theater=>{

        console.log(theater)
        let mark = L.marker(new L.latLng(theater.lat,theater.lon),{icon: myIcons.theater}).addTo(map)
        .bindPopup(`<h3>${theater.name}</h3>
        <p>${theater.address.road} ${theater.address.postcode} ${theater.address.city}</p> 
        `)
        theaterMarkers.push(mark)
    })
}

function drawCinemas(cinemas){
    cinemas.forEach(cinema=>{
        let mark = L.marker(new L.latLng(cinema.lat,cinema.lon),{icon: myIcons.cinema}).addTo(map)
        .bindPopup(`<h3>${cinema.name}</h3>
        <p>${cinema.address.road} ${cinema.address.postcode} ${cinema.address.city}</p> 
        `)
        cinemaMarkers.push(mark)
    })
}

function drawStadiums(stadiums){
    stadiums.forEach(stadium=>{
        let mark = L.marker([stadium.lat,stadium.lon],{icon: myIcons.stadium}).addTo(map)
        .bindPopup(`<h3>${stadium.name}</h3>
        <p>${stadium.address.road} ${stadium.address.postcode} ${stadium.address.city}</p> 
        `)
        stadiumMarkers.push(mark)
    })
}

// musées=>museums hotels=> hostels restaurant stades=> stadium, salles spectacles =>theater




