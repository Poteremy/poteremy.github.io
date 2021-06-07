let roll = document.getElementById('roll');
let given = document.getElementById('given');
let start = document.getElementById('start');
let next = document.getElementById('next');
let list = document.getElementById('list');
let picture = document.getElementById('picture');

let pirates = document.getElementById('pirates');
let moon = document.getElementById('moon');
let pool = document.getElementById('pool');
let bears = document.getElementById('bears');
let cake = document.getElementById('cake');
let nap = document.getElementById('nap');
let pizza = document.getElementById('pizza');
let ketchup = document.getElementById('ketchup');
let soup = document.getElementById('soup');
let aliens = document.getElementById('aliens');
let toaster = document.getElementById('toaster');
let horse = document.getElementById('horse');
let party = document.getElementById('party');
let seven = document.getElementById('seven');
let atlas = document.getElementById('atlas');

// Choices
let starts = [
  "On my first day of summer, I will ",
  "When it gets too hot out, I can cool off by  ",
  "For a special lunch, I'll make my signature creation: ",
  "I'll entertain myself at night by ",
  "On the last day of summer, I'll celebrate by "
]

let choiceOne = [
  "go adventuring with some pirates.",
  "build my own spaceship and go to the moon.",
  "dig a giant pool in my backyard."
]

let choiceTwo = [
  "going swimming with the polar bears.",
  "eating an entire ice cream cake.",
  "making a bed in my freezer and taking a nap."
]
let choiceThree = [
  "cat hair and dog toenail pizza.",
  "peanut butter and ketchup sandwich.",
  "water and ice soup."
]
let choiceFour = [
  "partying with the aliens.",
  "having a conversation with my toaster.",
  "pretending I am a horse."
]
let choiceFive = [
  "throwing a party for all of my friends.",
  "eating seven ice cream cakes.",
  "practicing my Mr. Atlas impression so I get to be the teacher."
]

let i = 0

start.addEventListener('click', function() {
  start.classList.add('hidden');
  roll.classList.remove('hidden');
  picture.classList.add('hidden')
  given.innerText = starts[i]
})

roll.addEventListener('click', function() {
  if (given.innerText.includes('first')) {
    given.innerText = starts[0] + choiceOne[Math.floor(Math.random() * choiceOne.length)];
    roll.classList.add('hidden');
    next.classList.remove('hidden');
  } else if (given.innerText.includes('hot')) {
    given.innerText = starts[1] + choiceTwo[Math.floor(Math.random() * choiceTwo.length)]
    roll.classList.add('hidden');
  next.classList.remove('hidden')
  } else if (given.innerText.includes('signature')) {
    given.innerText = starts[2] + choiceThree[Math.floor(Math.random() * choiceTwo.length)]
    roll.classList.add('hidden');
    next.classList.remove('hidden')
  } else if (given.innerText.includes('night')) {
    given.innerText = starts[3] + choiceFour[Math.floor(Math.random() * choiceTwo.length)]
    roll.classList.add('hidden');
    next.classList.remove('hidden')
  } else if (given.innerText.includes('last')) {
    given.innerText = starts[4] + choiceFive[Math.floor(Math.random() * choiceTwo.length)];
    roll.classList.add('hidden');
    next.classList.remove('hidden')
  }
  i++
})

next.addEventListener('click', function() {
  if(i<=4) {
    add()
    given.innerText = starts[i];
    next.classList.add('hidden');
    roll.classList.remove('hidden')
  } else if (i=5){
    add()
    given.innerText = ''
    next.classList.add('hidden')
    roll.classList.add('hidden')
    picture.classList.remove('hidden')
  }
})

function add () {
  let div = document.createElement('div')
  let listItem = document.createElement('h3')
  let img = document.createElement('img')
  listItem.innerText = `(${i}) ${given.innerText}`;
  div.setAttribute('class', 'listed')
  img.setAttribute('src', '../assets/speakerpng.png')
  img.setAttribute('class', 'small')
  list.appendChild(div)
  div.appendChild(listItem)
  div.appendChild(img)

  let imgs = document.querySelectorAll('.small')
imgs.forEach(img => img.addEventListener('click', function() {
  if(this.previousElementSibling.innerText.includes('pirates')) {
    pirates.play()
  } else if (this.previousElementSibling.innerText.includes('moon')) {
    moon.play()
  } else if (this.previousElementSibling.innerText.includes('pool')) {
    pool.play()
  } else if (this.previousElementSibling.innerText.includes('bears')) {
    bears.play()
  } else if (this.previousElementSibling.innerText.includes('entire')) {
    cake.play()
  } else if (this.previousElementSibling.innerText.includes('nap')) {
    nap.play()
  } else if (this.previousElementSibling.innerText.includes('pizza')) {
    pizza.play()
  } else if (this.previousElementSibling.innerText.includes('ketchup')) {
    ketchup.play()
  } else if (this.previousElementSibling.innerText.includes('soup')) {
    soup.play()
  } else if (this.previousElementSibling.innerText.includes('aliens')) {
    aliens.play()
  } else if (this.previousElementSibling.innerText.includes('toaster')) {
    toaster.play()
  } else if (this.previousElementSibling.innerText.includes('pizza')) {
    pizza.play()
  } else if (this.previousElementSibling.innerText.includes('horse')) {
    horse.play()
  } else if (this.previousElementSibling.innerText.includes('party')) {
    party.play()
  } else if (this.previousElementSibling.innerText.includes('seven')) {
    seven.play()
  } else if (this.previousElementSibling.innerText.includes('teacher')) {
    atlas.play()
  } 
}))
}

