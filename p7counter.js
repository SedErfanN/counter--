const currentNumber = document.getElementById('number');
const plusBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const downBtn = document.getElementById('decrease');


let newNum;

// plusBtn
plusBtn.addEventListener('click',function(){
    newNum = Number(currentNumber.innerHTML)+1;
    currentNumber.innerHTML = newNum;
    currentNumber.style.color = 'green'
})

resetBtn.addEventListener('click',function(){
    currentNumber.innerHTML = 0;
    currentNumber.style.color = 'white'
})

downBtn.addEventListener('click', function(){
    newNum = Number(currentNumber.innerHTML)-1;
    currentNumber.innerHTML = newNum;
    currentNumber.style.color = 'red'
})
