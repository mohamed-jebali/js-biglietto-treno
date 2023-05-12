let kilometriPercorsi = parseInt(prompt("Quanti kilometri devi percorrere?"));
let etaPasseggero = parseInt(prompt("Inserisci la tua età"))


if((kilometriPercorsi * 0.21) + "€"){
    console.log((kilometriPercorsi * 0.21).toFixed(2))
}
else{

}


document.getElementById("output").innerHTML = kilometriPercorsi + etaPasseggero + "€";


