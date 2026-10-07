// Day 8: Three little dot and arrow functions]

// Three little dots are called the spread operator. It allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Arrow functions are a more concise syntax for writing function expressions. They are often used for short, single-line functions and have a different behavior for the 'this' keyword compared to regular functions. 

function sumNumbers(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

let oldArr = [1, 2, 3];
let newArr = [...oldArr, 4, 5, 6]; // Using spread operator to create a new array

console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

let age = [21,23,14,30,13,26]

console.log(Math.max(...age)) // Using spread operator to find the maximum age


// Arrow function example
const multiply = (a, b) => a * b;

console.log(multiply(5, 10)); // Output: 50 

let sayHello = (name) => `Hello, ${name}!`;

console.log(sayHello("Jhay")); // Output: Hello, Jhay!