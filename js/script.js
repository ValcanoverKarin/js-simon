//Un alert() espone 5 numeri generati casualmente. 
//Da li parte un timer di 30 secondi. 
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//1. generare 5 numeri 
var numeri = [];
//totale numeri
var numeriTotali = 5;
// massimi numeri
var numeriMassimi = 100;

// Ciclo while finchè l'array ha 5 numeri diversi
while(numeri.length < numeriTotali) {
    var numeroGenerato = numeroCasuale(numeriMassimi);
    if (numeri.includes(numeroGenerato) == false) {
        numeri.push(numeroGenerato);
    }
}

//funzione per generare un numero casuale
function numeroCasuale(max) {
    return Math.floor(Math.random() * max) + 1;
}

//i numeri generati
console.log(numeri);

//stampare i numeri nell' allert
alert('Hai 30 secondi per memorizzare questi 5 numeri: ' + numeri);

//2. Fare inserire 5 numeri all'utente dopo 30 secondi
setTimeout(function() {
    //numeri inseriti dall'utente
    var userNumeri = [];

    while (userNumeri.length < numeriTotali) {
        // Creo la variabile per il numero inserito dall'utente
        var thisUserNumeri = parseInt( prompt('Inserisci i numeri visualizzati in precedenza') );
        if (userNumeri.includes(thisUserNumeri) == false) {
            userNumeri.push(thisUserNumeri);
        } else {
            alert('Numero già inserito');
        }
    }
},30000);

