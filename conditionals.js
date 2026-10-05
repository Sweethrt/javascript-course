//NUMBER 1
//This section shows scores and their grades, the section was tested using browser because node can not process prompt

const score = prompt("Enter your score: ");

if (score >= 90) {
  console.log("Grade: A");
} 
else if (score >= 80) {
  console.log("Grade: B");
}
else if (score >= 70) {
  console.log("Grade: C");
} 
else if (score >= 60) {
  console.log("Grade: D");
}
else{
    console.log("Grade: F");
}

//NUMBER 2
// This section checks if a person is eligible to vote or drive, the section was tested using browser because node can not process prompt

const age = prompt("Enter your age: ");

if (age >= 18) {
  console.log("You are eligible to vote.");
} 
else if (age >= 16) {
  console.log("You are not eligible to drive.");
} 
else {
  console.log("You are not eligible to vote or drive.");
}

//NUMBER 3
//This section checks if a year is a leap year or not, and this section was also tested using browser because node can not process prompt

const year = prompt("Enter a year: ");

if (year % 4 === 0) {
  console.log("It is a leap year.");
} 
else if (year % 100 === 0 && year % 400 === 0) {
  console.log("It is a leap year.");
}
else {
  console.log("It is not a leap year.");
}
