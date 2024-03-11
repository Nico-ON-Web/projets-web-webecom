
console.log("%c Joyeux Noël ! 🎄","color: red; font-size: 28px;")
for(let nombreEtoiles = 1; nombreEtoiles<=7; nombreEtoiles+=2){
    let nombreEspaces = (7 - nombreEtoiles)/2
    let spaces =""
    for(let i=1; i<=nombreEspaces; i++){
        spaces+= " "
    }
    let stars = ""
    for(let j=1; j<=nombreEtoiles ;j++){
        stars+="*"
    }
    let ligne = spaces+stars+spaces
    console.log("%c"+ligne,"color: green;font-size: 32px")
}   

console.log("%c🎁🎁🎁","font-size: 32px;")