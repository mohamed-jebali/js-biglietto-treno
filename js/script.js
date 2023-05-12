let kilometriPercorsi = parseInt(prompt("Quanti kilometri devi percorrere?"));
let etaPasseggero = parseInt(prompt("Inserisci la tua età"));
let result = (kilometriPercorsi * 0.21);






if(isNaN(kilometriPercorsi) || isNaN (etaPasseggero)){
    document.getElementById("output").innerHTML = "Inserisci un Numero Valido";
}
else{
    document.getElementById("output").innerHTML = result.toFixed(2) + "€";
}


if(etaPasseggero > 18 && result === (result - ((result / 100) * 20) )){
    document.getElementById("output").innerHTML = result;
}
else{
    document.getElementById("output").innerHTML = result + "€";
}

if(etaPasseggero < 65 === (result - ((result / 100) * 40) )){
    document.getElementById("output").innerHTML = etaPasseggero;
}
else{
    document.getElementById("output").innerHTML = result + "€";
}




