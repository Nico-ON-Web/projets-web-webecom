
/**
 * 
 * @param {String} type 
 * @param {Function} callable 
 */
function f1(type,callable){
    setTimeout(()=>{
        console.log("je suis dans la fonction 1")
        callable("evenement")
    },3000)
}

function f2(){
    console.log("je suis dans la fonction f2")
}

f1("click",(e)=>{
    console.log(e)
})
