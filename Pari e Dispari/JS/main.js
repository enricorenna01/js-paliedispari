/*Utente sceglie pari o dispari*/
const evenOdd = prompt("Scegli pari o dispari").toLowerCase();
console.log("Il giocatore ha scelto", evenOdd);


/*Funzione che verifica il corretto inserimento dei dati*/
let numberChoice;
if (evenOdd == "pari" || evenOdd == "dispari") {
    
    /*Utente sceglie un numero da 1 a 5*/
    numberChoice = parseInt(prompt("Scegli un numero da 1 a 5"));
    console.log("Il giocatore ha scelto", numberChoice);
    if (!isRightNum(numberChoice) || typeof(numberChoice) == NaN) {
    console.error("Devi sceglire un numero tra 1 e 5");
    location.reload();
    }
} else {
    console.error("Puoi inserire solo le parole pari o dispari");
    location.reload();
}
    

/*Computer genera un numero da 1 a 5*/
let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Il computer ha scelto",randomNum);


/*Funzione che verifica se l'utente ha inserito un numero compreso tra 1 e 5*/
function isRightNum (number) {
    if (number >=1 && number<=5) return true;
}

/*Somma dei numeri*/
const sum = numberChoice + randomNum;

/*Funzione che stabilisce se la somma è pari o dispari*/
function isEvenOdd (number) {
    if (number % 2 === 0) return true;
    return false;
}


/*Funzione che dichiara se la somma è pari o dispari*/
isEvenOdd(sum);
if (isEvenOdd(sum)) {
    console.log("La somma è pari");
} else {
    console.log("La somma è dispari");
}


/*Funzione che dichiara il vincitore*/
if (evenOdd == "pari" && isEvenOdd(sum)) {
    console.log("Il giocatore ha vinto");
} else if (evenOdd == "dispari" && !isEvenOdd(sum)){
    console.log("Il giocatore ha vinto");
} else {
    console.log("Il computer ha vinto");
}