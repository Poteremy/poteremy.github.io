// Items
let start = document.getElementById('start');
let thinking = document.getElementById('thinking');
let guess = document.getElementById('guess');
let numGuess = document.getElementById('numGuess');
let title = document.getElementById('title');
let win = document.getElementById('win');
let theNumber = document.getElementById('theNumber');
let myNumber = document.getElementById('myNumber');

// Buttons
let ready = document.getElementById('ready');
let noDown = document.getElementById('noDown');
let yes = document.getElementById('yes');
let noUp = document.getElementById('noUp');
let again = document.getElementById('again');

let min = 1
let max = 1000

startNow = (e) => {
    e.preventDefault()
    start.classList.add('hidden')
    guess.classList.remove('hidden')
    theNumber.innerText = `(Your number is ${myNumber.value})`
}

myNumber.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        ready.click()
    }
})

let number = Math.floor(Math.random() * (max - min + 1) + min)

numGuess.innerText = number

noDown.addEventListener('click', function () {
    max = number
    number = Math.floor(Math.random() * (max - min) + min)
    numGuess.innerText = number
})

noUp.addEventListener('click', function() {
    min = number
    number = Math.floor(Math.random() * (max - min) + min) 
    numGuess.innerText = number
})

yes.addEventListener('click', function() {
    title.classList.add('hidden')
    guess.classList.add('hidden')
    win.classList.remove('hidden')
})

again.addEventListener('click', reset)

function reset() {
    min = 1
    max = 1000
    win.classList.add('hidden')
    title.classList.remove('hidden');
    start.classList.remove('hidden');
    myNumber.value = ''
}

