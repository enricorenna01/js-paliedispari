/*Utente inserisce la parola palindroma*/
const userWord = prompt("Inserisci una parola palindroma");

/*Definisco se la parola è palindroma*/
if (isPalindrome(userWord)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}


/**
 * Funzione che verifica la parola inserita sia palindroma
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
    if (userWord.length === 0) return false;
    if (userWord.length === 1) return true;

    const reverseWord = userWord.toLowerCase().split("").reverse().join("");
    const lowerUserWord = userWord.toLowerCase();
    
    if (reverseWord === lowerUserWord) return true;
}
