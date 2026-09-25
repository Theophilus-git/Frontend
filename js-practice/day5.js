// Tenaries in JavaScript

// A ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:

// condition ? expressionIfTrue : expressionIfFalse;

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // canVote will be "Yes"

let pageName = [
    "Home",
    "About",
    "Javascript Practice",
    "Contact",
    "Blog"
]

for(i=0;i<pageName.length;i+=1){
  if (document.title === pageName[i]){
    console.log("We are here: "+ pageName[i])
  }else{
    console.log("we are not here" )
  }
}

// Set and Map in JavaScript

// Set is a collection of unique values. It can store any type of value, whether primitive or object references. The values in a Set are ordered and can be iterated over in the order of insertion. The syntax for creating a Set is as follows:

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // duplicate value, will not be added
console.log(mySet); // Set { 1, 2, 3 }

let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');
console.log(myMap); // Map { 'name' => 'John', 'age' => 30, 'city' => 'New York' }  