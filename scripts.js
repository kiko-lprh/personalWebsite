const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const resetButton = document.getElementById('reset');
const label = document.getElementById('label1');
let labelVar = 0;

function increase(){
    labelVar += 1;
    updateCounter();
}

function decrease(){
    labelVar -= 1;
    updateCounter();
}

function reset(){
    labelVar = 0;
    updateCounter();
}

function updateCounter(){
    if(labelVar >= 0){
        label.textContent = labelVar;
    }
    else{
        alert("Can't go lower than 0");
        labelVar = 0;
        label.textContent = labelVar;
    }
}

decreaseButton.addEventListener('click',decrease);
increaseButton.addEventListener('click',increase);
resetButton.addEventListener('click',reset);