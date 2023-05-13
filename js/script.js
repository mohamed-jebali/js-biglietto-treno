let kilometriPercorsi = parseInt(prompt("Quanti kilometri devi percorrere?"));
let etaPasseggero = parseInt(prompt("Inserisci la tua età"));
let risultato = (kilometriPercorsi * 0.21);



if (isNaN(kilometriPercorsi) || isNaN (etaPasseggero)){
    document.getElementById("output").innerHTML = "Inserisci un Numero o Valido";
}
else if(kilometriPercorsi == ""  || etaPasseggero == ""  ) {
    document.getElementById("output").innerHTML = "Inserisci Qualcosa";
}
else{
if (etaPasseggero < 18){
    let PrezzoScontato = risultato - ((20 / 100) * risultato);
       document.getElementById("output").innerHTML = PrezzoScontato.toFixed(2) + "€";
   }
   else if (etaPasseggero > 65) {
    let PrezzoScontato = risultato - ((40 / 100) * risultato);
    document.getElementById("output").innerHTML = PrezzoScontato.toFixed(2) + "€";
}
else{
    document.getElementById("output").innerHTML = risultato.toFixed(2) + "€";
}
}










