/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole 
percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65

*/
//definiamo il prezzo di ogni km percorso
let costo_chilometro = 0.21;

// 1) Chiedere all'utente il numero di km che vuole percorrere

const distanza = parseInt( prompt("Benvenuto, quanti Km vuoi percorrere? "));
console.log(distanza);
// 2) Chiedere all'utente l'età del passeggero

const eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

//sconto del 20% per i minorenni
if(eta < 18){
    let prezzo_km_minorenni= ((costo_chilometro * 20)/100);
    let somma_minorenni = prezzo_km_minorenni * distanza;
    console.log("Il costo totale è di " + somma_minorenni + " €");
}else if (eta > 65){
    let prezzo_km_anziani = ((costo_chilometro*40)/100);
    let somma_anziani = prezzo_km_anziani * distanza;
    console.log("Il costo totale è di " + somma_anziani + " €");
}else{
    let somma_senza_sconto=(costo_chilometro * distanza);
    console.log("Il costo totale è di " + somma_senza_sconto + " €");
}