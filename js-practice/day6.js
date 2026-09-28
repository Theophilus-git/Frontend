// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


// Functions in JavaScript

// A function is a block of code that can be called and executed when needed. Functions can take parameters and return values. The syntax for defining a function is as follows:

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

 function replace_r(speech){
 if(typeof speech !== 'string'){
 console.error("This function is strictly for strings")
 return
 }
 
 speech = speech.replace(/r/g,"C")
 speech = speech.replace(/R/g,"A")
  return speech;
 }

 function greetUser(user){
 if (typeof user !== 'string'){
 console.log(`INVALID userName`)
 }else{
 console.log(`Welcome ${user}`)
 }
 }

  function speakSomething(say,ntimes){
 for (i=0; i<ntimes;i++){
 console.log(say+ " (" +i+")")
 }
 } 