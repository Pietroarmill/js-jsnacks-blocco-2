// FOR
// chidere 5 volte all'utente di inserire un numero 
// sommare tutti i numeri inseriti dall'utente
// OUTPUT
// stampare la somma 

let sum = 0;

for (let i = 0; i < 5; i++) {
    const userNumbers = parseInt(prompt("dimmi un numero"));
    sum += userNumbers; 
}
console.log(sum);



// // WHILE

let somma = 0;
let counter = 0;


do {
    const userNumbers = parseInt(prompt("dimmi un numero"))
    counter++;
    somma += userNumbers
} while ( counter != 5 ) {
    console.log(somma);
}