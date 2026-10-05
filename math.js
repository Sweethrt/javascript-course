//NUMBER 1
//This section shows the sum,difference,product,quotient and remainder of two numbers 17 and 10

let number1 = 17;
let number2 = 10;
let number3 = number1 + number2;
let number4 = number1 - number2;
let number5 = number1 * number2;
let number6 = number1 / number2;
let number7 = number1 % number2;

console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);

//NUMBER 2
//This section checks if a number is even or odd

let number8 = 13;
let number9 = 13 % 2;

console.log(number9);

// from the code checking even or odd, I used 13 and the code returns an output of 1
// Therefor the number 13 is odd
// if the output returns 0, its even and any other output other than zero tells us that the input number is odd

//NUMBER 3
//This section calculates the total cost of bread, butter and tea including tax and vat

let bread = 2500;
let butter = 1000;
let tea = 500;
let tax = 7.5 / 100;
let vat = (bread + butter + tea ) * tax;
let total = bread + butter + tea + vat;
const finalValue = total.toFixed(2);

console.log("total", finalValue);