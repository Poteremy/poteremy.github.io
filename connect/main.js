const grid = document.querySelector('.grid')
const height = 6
const width = 7
const squares = []
const current = document.getElementById('current')
const winScreen = document.getElementById('winScreen')
const winText = document.getElementById('winText')
const resetBtn = document.getElementById('resetBtn')
let currentPlayer = 'p1'
isGameOver = false

function createBoard() {
  for(i = 0; i < height*width; i++) {
    const square = document.createElement('div')
    square.setAttribute('id', i)
    square.setAttribute('class', 'square')
    grid.appendChild(square)
    squares.push(square)

    square.addEventListener('click', function(e) {
      click(square)
    })
  }
}

createBoard()

function click(square) {
  let isTakenOne = square.classList.contains('p1')
  let isTakenTwo = square.classList.contains('p2')
  if(!isTakenOne && !isTakenTwo) {
    square.classList.add(currentPlayer)
    if (currentPlayer === 'p1') {
      currentPlayer = 'p2'
      current.innerHTML = `Current Player: Player Two`
    } else {
      currentPlayer = 'p1'
      current.innerHTML = `Current Player: Player One`
    }
    checkForRow()
    checkForColumn()
    checkForLeft()
    checkForRight()
  }
}

function checkForRight() {
  for(i=0; i<21; i++) {
    let right = [i, i+6, i+12, i+18]
    let notValid = [1, 2, 3, 7, 8, 9]
    if(notValid.includes(i)) continue

    if(right.every(index => squares[index].classList.contains('p1'))) {
      setTimeout(oneWin, 1500)
    } else if(right.every(index => squares[index].classList.contains('p2'))) {
      setTimeout(twoWin, 1500)
    }
  }
}

function checkForLeft() {
  for(i=0; i < 18; i++) {
    let left = [i, i+width+1, i+2+width*2, i+3+width*3]
    let notValid = [4, 5, 6, 11, 12, 13]
    if(notValid.includes(i)) continue
    
    if(left.every(index => squares[index].classList.contains('p1'))) {
      setTimeout(oneWin, 1500)
    } else if(left.every(index => squares[index].classList.contains('p2'))) {
      setTimeout(twoWin, 1500)
    }
  }
}

function checkForRow() {
  for(i=0; i < 39; i++) {
    let row = [i, i+1, i+2, i+3]
    const notValid = [4, 5, 6, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 39, 40, 41]
    if(notValid.includes(i)) continue

    if(row.every(index => squares[index].classList.contains('p1'))) {
      setTimeout(oneWin, 1500)
    } else if (row.every(index => squares[index].classList.contains('p2'))) {
      setTimeout(twoWin, 1500)
    }
  }
}

function checkForColumn() {
  for(i=0; i<21; i++) {
    let column = [i, i+width, i+width*2, i+width*3]
    if(column.every(index => squares[index].classList.contains('p1'))) {
      setTimeout(oneWin, 1500)
    } else if(column.every(index => squares[index].classList.contains('p2'))) {
      setTimeout(twoWin, 1500)
    }

  }
}

function oneWin () {
  winScreen.classList.remove('hidden')
  winText.innerHTML = "Player One Wins"
}

function twoWin () {
  winScreen.classList.remove('hidden')
  winText.innerHTML = "Player Two Wins"
}

function reset() {
  squares.forEach(square => {
    if(square.classList.contains('p1')) {
      square.classList.remove('p1')
    } else if (square.classList.contains('p2')) {
      square.classList.remove('p2')
    } else return
  })
  winScreen.classList.add('hidden')
  currentPlayer = 'p1'
  current.innerHTML = `Current Player: Player One`
}

resetBtn.addEventListener('click', reset)