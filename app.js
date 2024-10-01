console.log("Hello World!\n==========\n");

// Exercise 1 Section
// In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.
// 1. Create a `for` loop that evaluates numbers from 1 to 100.
// 2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
// 3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i ++){
    if (i % 2 == 0){
        continue;
    } else {
        console.log(i);
    } 
}

// Exercise 2 Section
// FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:
// 1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
// 2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//    - If the number is divisible by 3, then console.log `'FIZZ'`
//    - If the number is divisible by 5, then console.log `'BUZZ'`
//    - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`
// Ex: `15` would print `'FIZZBUZZ'`, `33` would print `'FIZZ'`, and `35` would print `'BUZZ'`
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++){
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0){
            console.log("FIZZ")
        }

        if (i % 5 == 0){
            console.log("BUZZ");
        }
    }
}

// Exercise 3 Section
// For exercise 3, repeat both exercise 1 and 2 as `while` and `do/while` loop solutions.
console.log("EXERCISE 3:\n==========\n");
let x = 1;
do {
    let output = "";

    if (x % 3 == 0){
        output += "FIZZ";

    }

    if (x % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${x} ${output}`);

    x++;
} while (x <= 100);


// Exercise 4 Section
// In this exercise, you will count from iterate from 1 to n. If you iterate over a given value, then break out the loop and print "Found value!". If you do not find the value in the given range, print "Did not find value".
// 1. Start with the following code:
// ```js
// 
// ```
// 2. Create a `for` loop that iterates from 0 to n
// 3. If your current iteration is equal to `value`, then print "Found value!", and `break` out of the loop
// 4. If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 1; i <= n; i++){
    if (i == value){
        console.log(`The number is ${value}`);
        break;
    }
    if (i == n){
    console.log(`Did not find the number ${value} within 1-${n}`);
    }
}



// Exercise 5 Section
// We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.
// 1. Start with the following code:
// ```js
// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let n = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);
// ```
// 2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.

console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
//console.log(start, end);

for (let i = start; i <= end; i++){
    let output = ""; 
    if (i % fizzDivisor == 0){
        output += "FIZZ"
    }
    if (i % buzzDivisor == 0){
        output += "BUZZ"
    }
    console.log(`${i} ${output}`);
}
console.log(`The fizz divsor is ${fizzDivisor}, the buzz divisor is ${buzzDivisor}`)

