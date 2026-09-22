// Arrays

let myArray = [{name:"frank"},[1,2,3,4,5],{name:"charis"}]

// Array manuinpulation
console.log(myArray[0].name)
console.log(myArray[1][2])
console.log(myArray[2].name)

let fruits = ["mango","banana","orange","apple","grape","watermelon"]

console.log(fruits[0])
//  Adding an item to the end of an array
fruits.push("pear")
console.log(fruits) 

//  Adding an item to the beginning of an array
fruits.unshift("kiwi")
console.log(fruits)

// Removing an item from the end of an array
fruits.pop()
console.log(fruits)

// Removing an item from the beginning of an array
fruits.shift()
console.log(fruits)

//  Finding the index of an item in an array
console.log(fruits.indexOf("banana"))
