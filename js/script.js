let kilometriPercorsi = parseInt(prompt("Quanti kilometri devi percorrere?"));
let etaPasseggero = parseInt(prompt("Inserisci la tua età"))
let result;



if((kilometriPercorsi * 0.21) + "€" == result){
    console.log((kilometriPercorsi * 0.21).toFixed(2))
}
// else if(isNAN (result)){
//     alert("Inserisci un numero valido")
// }
else{

}
if (isNaN (etaPasseggero)) {
    alert("Inserisci un numero valido")
} else {
    
}


document.getElementById("output").innerHTML = kilometriPercorsi + "€";


