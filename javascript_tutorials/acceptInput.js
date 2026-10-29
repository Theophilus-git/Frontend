//  There are two ways to do that
//  1. Window Prompt
//  2. Professional way = HTML textbox

// Option 1
let username_ = window.prompt("Who are you")

console.log(username)

// Option 2
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("in1").value
    document.getElementById("myH1").textContent  = `HI ${username}, You will be a millionaire`
}