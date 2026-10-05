let name= "inemesit";
let age = "19yrs"
let favoriteHobby= "swimming";
const worstMeal= "I dont like pizza";
const message=`My name is ${name}, I am ${age} old, I love ${favoriteHobby} and ${worstMeal}`;

console.log(message);

const bestMeal=256;
bestMeal = 100;
console.log(bestMeal);


// This is the error message i got after running the code:


// $ node variables.js
// My name is inemesit, I am 19yrs old, I love swimming and I dont like pizza
// C:\Users\DELL 7400\OneDrive\Desktop\JAVA Assign\variables.js:10
// bestMeal = 100;
//          ^

// TypeError: Assignment to constant variable.

// why the error?
// A constant cannot be reassigned, so it throws the error because the constant value already has a value

