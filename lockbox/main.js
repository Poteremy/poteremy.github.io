// ! Change num - Line 15
// ! Change numberone, numbertwo, etc - Line 225
// ! Change correct answers - Lines 76-86

// constants

// Code Numbers
let numberone = document.getElementById('numberone');
let numbertwo = document.getElementById('numbertwo');
let numberthree = document.getElementById('numberthree');
let numberfour = document.getElementById('numberfour');

// ? Code is 5182

let num = '5'

// Student Boxes
let rowone = document.getElementById('rowone');
let rowtwo = document.getElementById('rowtwo');
let rowthree = document.getElementById('rowthree');
let cabox = document.getElementById('cabox');
let addbox = document.getElementById('addbox');
let ldbox = document.getElementById('ldbox');
let ngbox = document.getElementById('ngbox');
let nlbox = document.getElementById('nlbox');
let stbox = document.getElementById('stbox');
let jdbox = document.getElementById('jdbox');
let jgbox = document.getElementById('jgbox');
let fjbox = document.getElementById('fjbox');
let hjbox = document.getElementById('hjbox');
let klbox = document.getElementById('klbox');

// inputs
let caleb = document.getElementById('caleb');
let aiden = document.getElementById('aiden');
let logan = document.getElementById('logan');
let noah = document.getElementById('noah');
let nick = document.getElementById('nick');
let sam = document.getElementById('sam');
let jaxson = document.getElementById('jaxson');
let jeramiah = document.getElementById('jeramiah');
let fairlee = document.getElementById('fairlee');
let halia = document.getElementById('halia');
let kymere = document.getElementById('kymere');

// buttons

let reveal = document.getElementById('reveal');
let cacheck = document.getElementById('cacheck');
let adcheck = document.getElementById('adcheck');
let ldcheck = document.getElementById('ldcheck');
let ngcheck = document.getElementById('ngcheck');
let nlcheck = document.getElementById('nlcheck');
let stcheck = document.getElementById('stcheck');
let jdcheck = document.getElementById('jdcheck');
let jgcheck = document.getElementById('jgcheck');
let fjcheck = document.getElementById('fjcheck');
let hjcheck = document.getElementById('hjcheck');
let klcheck = document.getElementById('klcheck');

// Answers

// ! Day 2
// Halia - 975
// Noah - s
// Sam - k
// Caleb - h
// Jaxson - k
// Fairlee - u
// Jeramiah - t
// Nick - h
// Kymere - L
// Aiden - a
// Logan - e

// ! Day 3
// Halia - rgop
// Everyone else - congrats

//! Day 4
// Sam, Caleb, Jaxson - 12
// Nick, Noah, Jeramiah - 0
// Kymere, Halia, Logan - 11
// Aiden, Fairlee - 9

let caleba = '63';
let aidena = '76';
let logana = '28';
let noaha = '67';
let nicka = '24';
let sama = '34';
let jaxsona = '21';
let jeramiaha = '1413';
let fairleea = '411';
let haliaa = '67';
let kymerea = '78';

// Check Functions



function calebcheck() {
  if(caleb.value == caleba) {
    cabox.classList.add('correct')
    caleb.classList.add('hidden')
    cacheck.classList.add('hidden')
  } else {
    caleb.value = ""
  }
}
cacheck.addEventListener('click', calebcheck)

function aidenCheck() {
  if(aiden.value == aidena) {
    addbox.classList.add('correct')
    aiden.classList.add('hidden')
    adcheck.classList.add('hidden')
  } else {
    aiden.value = ""
  }
}
adcheck.addEventListener('click', aidenCheck)

function loganCheck() {
  if(logan.value == logana) {
    ldbox.classList.add('correct')
    logan.classList.add('hidden')
    ldcheck.classList.add('hidden')
  } else {
    logan.value = ""
  }
}
ldcheck.addEventListener('click', loganCheck)

function noahCheck() {
  if(noah.value == noaha) {
    ngbox.classList.add('correct')
    noah.classList.add('hidden')
    ngcheck.classList.add('hidden')
  } else {
    noah.value = ""
  }
}
ngcheck.addEventListener('click', noahCheck)

function nickCheck() {
  if(nick.value == nicka) {
    nlbox.classList.add('correct')
    nick.classList.add('hidden')
    nlcheck.classList.add('hidden')
  } else {
    nick.value = ""
  }
}
nlcheck.addEventListener('click', nickCheck)

function samCheck() {
  if(sam.value == sama) {
    stbox.classList.add('correct')
    sam.classList.add('hidden')
    stcheck.classList.add('hidden')
  } else {
    sam.value = ""
  }
}
stcheck.addEventListener('click', samCheck)

function jaxsonCheck() {
  if(jaxson.value == jaxsona) {
    jdbox.classList.add('correct')
    jaxson.classList.add('hidden')
    jdcheck.classList.add('hidden')
  } else {
    jaxson.value = ""
  }
}
jdcheck.addEventListener('click', jaxsonCheck)

function jeramiahCheck() {
  if(jeramiah.value == jeramiaha) {
    jgbox.classList.add('correct')
    jeramiah.classList.add('hidden')
    jgcheck.classList.add('hidden')
  } else {
    jeramiah.value = ""
  }
}
jgcheck.addEventListener('click', jeramiahCheck)

function fairleeCheck() {
  if(fairlee.value == fairleea) {
    fjbox.classList.add('correct')
    fairlee.classList.add('hidden')
    fjcheck.classList.add('hidden')
  } else {
    fairlee.value = ""
  }
}
fjcheck.addEventListener('click', fairleeCheck)

function haliaCheck() {
  if(halia.value == haliaa) {
    hjbox.classList.add('correct')
    halia.classList.add('hidden')
    hjcheck.classList.add('hidden')
  } else {
    halia.value = ""
  }
}
hjcheck.addEventListener('click', haliaCheck)

function kymereCheck() {
  if(kymere.value == kymerea) {
    klbox.classList.add('correct')
    kymere.classList.add('hidden')
    klcheck.classList.add('hidden')
  } else {
    kymere.value = ""
  }
}
klcheck.addEventListener('click', kymereCheck)

function revealNumber() {
  if(cabox.classList.contains('correct') && addbox.classList.contains('correct') && ldbox.classList.contains('correct') && ngbox.classList.contains('correct') && nlbox.classList.contains('correct') && stbox.classList.contains('correct') && jdbox.classList.contains('correct') && jgbox.classList.contains('correct') && fjbox.classList.contains('correct') && hjbox.classList.contains('correct') && klbox.classList.contains('correct'))
  {rowone.classList.add('hidden')
    rowtwo.classList.add('hidden')
    klbox.classList.add('hidden')
    reveal.classList.remove('hidden')}
  else return
} 

let answers = document.querySelectorAll('.answer')

answers.forEach(answer => answer.addEventListener('keyup', function(e) {
  e.preventDefault;
  if(e.keyCode===13) {
    answer.nextElementSibling.click();
  }
}))

document.addEventListener('click', revealNumber)

function replace() {
  numberone.innerText = num
}
reveal.addEventListener('click', replace)