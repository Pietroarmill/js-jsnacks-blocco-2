// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// chiedo all'utente un numero
const userNumber = parseInt(prompt("dimmi un numero al massimo di 5 cifre"));
// console.log(userNumber ,typeof(userNumber));

let numberText = String(userNumber);
// console.log(numberText, typeof(numberText));


let numberLength = numberText.length;
console.log(numberLength);

if (numberLength <= 5 ) {
    let cubo = numberText[0]*numberText[0]*numberText[0];
    console.log("primo cubo",cubo);

    let cubo1 = numberText[1]*numberText[1]*numberText[1];
    console.log("secondo cubo",cubo1);

    let cubo2 = numberText[2]*numberText[2]*numberText[2];
    console.log("terzo cubo",cubo2);

    let cubo3 = numberText[3]*numberText[3]*numberText[3];
    console.log("quarto cubo",cubo3);

    let cubo4 = numberText[4]*numberText[4]*numberText[4];
    console.log("quinto cubo",cubo4);
} else {
    alert("dimmi un numero al massimo di 5 cifre")
}
