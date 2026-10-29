const countlabel = document.getElementById("countlabel")
const increasebtn = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count
}

decrease.onclick = function(){
    count--;
    countlabel.textContent = count
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count
}