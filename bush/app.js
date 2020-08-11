const startBtn = document.getElementById('startBtn');
const bushNumber = document.getElementById('bushNumber');
const gameBoard = document.getElementById('gameBoard');
const clickCount = document.getElementById('clickCount');
const gameNumber = document.getElementById('gameNumber');

// If gameNumber is null

startBtn.addEventListener('click', function() {
    if(isNaN(bushNumber.value)){
        alert('Please use numbers for how many bushes');
        bushNumber.value = ''
    } else {
        gameBoard.classList.remove('hidden');
    clickCount.classList.remove('hidden');
    gameNumber.classList.add('hidden');
    newGame();
    }
})

function newGame() {

let snakeMax = 1;
let snakeCount = 0;
let bearCount = 0;

function create() {
    
    let createSpace = document.createElement('div');
    let createFront = document.createElement('div');
    let createBack = document.createElement('div');
    let createImgFront = document.createElement('img');
    let createImgBack = document.createElement('img');

    let test = ["./images/snake.png", "./images/bear.png"];
    let math = Math.floor(Math.random() * 2);
    let pictureChoice = test[math];

    createSpace.classList.add('gameSpace');
    createFront.classList.add('front');
    createBack.classList.add('back');
    createImgFront.setAttribute('id', "bush");
    createImgFront.setAttribute('src', "./images/bush.png");

    createImgBack.setAttribute('src', pictureChoice);

// TODO: Track number of bears. When bearCount === bushNumber - 1, create a snake

    function createSnake(){
        if(pictureChoice === test[0] && snakeMax > snakeCount) {
            createImgBack.setAttribute('class', "snake");
            snakeCount++;
        }
        else {
            createBear();
        }}
    
    function createBear() {
        createImgBack.setAttribute("src", test[1]);
        createImgBack.setAttribute('class', "bear");
        bearCount++;
    }

    createSnake();

    createFront.appendChild(createImgFront);
    createBack.appendChild(createImgBack);
    createSpace.appendChild(createFront);
    createSpace.appendChild(createBack);

    gameBoard.appendChild(createSpace);
}

for(let i=0; i<bushNumber.value; i++) {
      create();
}

// Click Events

let spaces = document.querySelectorAll('.gameSpace');
let clickCounter = document.getElementById('clickCount');
let clickCount = 0;
clickCounter.innerText = `Click Count: ${clickCount}`;

let body = document.querySelector('body');

spaces.forEach(space =>{
    space.addEventListener('click', function(){
        body.classList.add('noClick');
        let back = this.querySelector('.back');
        back.classList.add('showPicture');
        let img = back.querySelector("img");
        if(img.classList.contains('bear')){
            clickCount++;
            clickCounter.innerText = `Click Count: ${clickCount}`;
            if (clickCount == bushNumber.value-1){
                winGame();
            } else {
            back.addEventListener('animationend', function(){
                space.classList.add('clicked');
                body.classList.remove('noClick');
            })
        }} else {
        endGame();
        }
    })
})

//Win Game 

function winGame() {
    body.classList.remove('noClick');
    let myModal = document.getElementById('myModalWin');
    myModal.classList.add('end');
}

//End Game

function endGame() {
    body.classList.remove('noClick');
    let myModal = document.getElementById('myModal');
    let endClickCount = document.getElementById('endClickCount');
    myModal.classList.add('end');
    if (clickCount === 0){
        endClickCount.innerText = `You didn't even get 1 click. You should be ashamed of yourself.`;
    } else if (clickCount<3){
        endClickCount.innerText = `You only survived for ${clickCount} clicks. You can do better than that.`;
    } else {
        endClickCount.innerText = `You survived for ${clickCount} clicks. Good job, comrade.`;
    }
}

//Reset Game

function reset (){
    snakeCount = 0;
    clickCount = 0;
    let myModal = document.getElementById('myModal');
    let myModalWin = document.getElementById('myModalWin');
    myModal.classList.remove('end');
    myModalWin.classList.remove('end')
    spaces.forEach(e => e.parentNode.removeChild(e));
    clickCounter.innerText = `Click Count: ${clickCount}`;
}

function resetScreen () {
    const clickCount = document.getElementById('clickCount');
  gameBoard.classList.add('hidden');
  clickCount.classList.add('hidden');
  gameNumber.classList.remove('hidden');
  bushNumber.value = '';
}

// Lose Modal Control

let modal = document.getElementById('myModal');
let btn = document.getElementById('playAgain');
let span = document.getElementsByClassName('close')[0];




btn.onclick = function () {
  reset();
  resetScreen();
}

span.onclick = function () {
    reset();
    resetScreen();
}

window.onclick = function(event) {
  if (event.target == modal) {
    reset();
    resetScreen();
    }
}

// Win Modal Control

let modalWin = document.getElementById('myModalWin');
let btnWin = document.getElementById('playAgainWin');
let spanWin = document.getElementsByClassName('closeWin')[0];

btnWin.onclick = function () {
    reset();
    resetScreen();
  }
  
  spanWin.onclick = function () {
      reset();
      resetScreen();
  }
  
  window.onclick = function(event) {
    if (event.target == modalWin) {
      reset();
      resetScreen();
      }
  }
}