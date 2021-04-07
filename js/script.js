//Un alert() espone 5 numeri generati casualmente. 
//Da li parte un timer di 30 secondi. 
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//generare 5 numeri 
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