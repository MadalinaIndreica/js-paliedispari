const userChoice = prompt ("ciao user! scegli pari o dispari");
console.log(userChoice);
const userNumber = parseInt(prompt ("inserisci un numero da 1 a 5"));
console.log(userNumber);
computerNumber = generateComputerNumber (1,5);

 //funzione che genera un numero random per il computer

function generateComputerNumber(min,max) {
   let computerNumber = Math.floor(Math.random() * (5 - 1)) + 1;
    return computerNumber;
  }
console.log(computerNumber);

// somma numeri
let sum = userNumber + computerNumber;
console.log(sum);
let result = "";

function numbersSum(userNumber, computerNumber) {
    if (sum % 2 === 0 ) { 
        result = "pari";
         
    }else { 
        result = "dispari";
}
//  }
    return result;
}
console.log(numbersSum(userNumber, computerNumber));
 
if (result == userChoice) {
    alert("Hai vintooo!!")
    
}