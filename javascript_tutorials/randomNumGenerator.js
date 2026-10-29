const myButton = document.getElementById("myButton")
const label_1 = document.getElementById("label_1")
const label_2 = document.getElementById("label_2")
const label_3 = document.getElementById("label_3")
const max_ = 6
const min_= 1
let randomNum_1;
let randomNum_2;
let randomNum_3;

myButton.onclick = function(){
    randomNum_1 = Math.floor(Math.random()*max_)+min_;
    label_1.textContent = randomNum_1
    randomNum_2 = Math.floor(Math.random()*max_)+min_;
    label_2.textContent = randomNum_2
    randomNum_3 = Math.floor(Math.random()*max_)+min_;
    label_3.textContent = randomNum_3
}




