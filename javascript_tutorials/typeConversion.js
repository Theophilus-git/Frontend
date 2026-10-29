// type conversion change datatype of a value to another


// let age = window.prompt(`How old are you: `)
// age = Number(age)

// console.log(typeof(age),age)

// document.getElementById("myH2").textContent = `age: ${age}, and its datatype is ${typeof(age)}`

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("myH2").textContent = circumference + "cm"
}