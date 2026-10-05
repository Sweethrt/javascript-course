//NUMBER 1
//This section prints numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//NUMBER 2
//This section prints even numbers from 1 to 20 using a for loop

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("even",i);
    }
}

//NUMBER 3
//This section prints numbers from 10 to 1 using a while loop

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
console.log("liftoff!");

//NUMBER 4
//This section prints numbers from 1 to 30 using a for loop with nested if

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log("FIZZ");
    }
    else if (i % 5 === 0) {
        console.log("BUZZ");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    else {
        console.log(i);
    }
}