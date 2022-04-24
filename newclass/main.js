// Answers
let christopher = "71";
let brody = "92";
let isla = "82";
let anthony = "19";
let jaxson = "235";
let jeramiah = "132";
let kymere = "111";
let fairlee = "143";
let halia = "1";
let chase = "52";

// Dom Objects

let containerBox = document.getElementById('containerBox');
let revealBox = document.getElementById('revealBox');
let clickReveal = document.getElementById('clickReveal');
let prize = document.getElementById('prize');
let sound = document.getElementById('sound');
let soundTwo = document.getElementById('soundTwo');

// Boxes
let boxOne = document.getElementById('boxOne');
let boxTwo = document.getElementById('boxTwo');
let boxThree = document.getElementById('boxThree');
let boxFour = document.getElementById('boxFour');
let boxFive = document.getElementById('boxFive');
let boxSix = document.getElementById('boxSix');
let boxSeven = document.getElementById('boxSeven');
let boxEight = document.getElementById('boxEight');
let boxNine = document.getElementById('boxNine');
let boxTen = document.getElementById('boxTen');

// Answer Inputs
let cAnswer = document.getElementById('cAnswer');
let bAnswer = document.getElementById('bAnswer');
let iAnswer = document.getElementById('iAnswer');
let aAnswer = document.getElementById('aAnswer');
let jdAnswer = document.getElementById('jdAnswer');
let jgAnswer = document.getElementById('jgAnswer');
let kAnswer = document.getElementById('kAnswer');
let fAnswer = document.getElementById('fAnswer');
let hAnswer = document.getElementById('hAnswer');
let chAnswer = document.getElementById('chAnswer');

// Buttons
let cBtn = document.getElementById('cBtn');
let bBtn = document.getElementById('bBtn');
let iBtn = document.getElementById('iBtn');
let aBtn = document.getElementById('aBtn');
let jdBtn = document.getElementById('jdBtn');
let jgBtn = document.getElementById('jgBtn');
let kBtn = document.getElementById('kBtn');
let fBtn = document.getElementById('fBtn');
let hBtn = document.getElementById('hBtn');
let chBtn = document.getElementById('chBtn');

// Check Functions Definitions

function cCheck() {
  if(cAnswer.value == christopher) {
    boxOne.classList.add('correct')
    cBtn.classList.add('hidden')
    cAnswer.classList.add('hidden')
  } else cAnswer.value = ""
}
function bCheck() {
  if(bAnswer.value == brody) {
    boxTwo.classList.add('correct')
    bBtn.classList.add('hidden')
    bAnswer.classList.add('hidden')
  } else bAnswer.value = ""
}
function iCheck() {
  if(iAnswer.value == isla) {
    boxThree.classList.add('correct')
    iBtn.classList.add('hidden')
    iAnswer.classList.add('hidden')
  } else iAnswer.value = ""
}
function aCheck() {
  if(aAnswer.value == anthony) {
    boxFour.classList.add('correct')
    aBtn.classList.add('hidden')
    aAnswer.classList.add('hidden')
  } else aAnswer.value = ""
}
function jdCheck() {
  if(jdAnswer.value == jaxson) {
    boxFive.classList.add('correct')
    jdBtn.classList.add('hidden')
    jdAnswer.classList.add('hidden')
  } else jdAnswer.value = ""
}
function jgCheck() {
  if(jgAnswer.value == jeramiah) {
    boxSix.classList.add('correct')
    jgBtn.classList.add('hidden')
    jgAnswer.classList.add('hidden')
  } else jgAnswer.value = ""
}
function kCheck() {
  if(kAnswer.value == kymere) {
    boxSeven.classList.add('correct')
    kBtn.classList.add('hidden')
    kAnswer.classList.add('hidden')
  } else kAnswer.value = ""
}
function fCheck() {
  if(fAnswer.value == fairlee) {
    boxEight.classList.add('correct')
    fBtn.classList.add('hidden')
    fAnswer.classList.add('hidden')
  } else fAnswer.value = ""
}
function hCheck() {
  if(hAnswer.value == halia) {
    boxNine.classList.add('correct')
    hBtn.classList.add('hidden')
    hAnswer.classList.add('hidden')
  } else hAnswer.value = ""
}
function chCheck() {
  if(chAnswer.value == chase) {
    boxTen.classList.add('correct')
    chBtn.classList.add('hidden')
    chAnswer.classList.add('hidden')
  } else chAnswer.value = ""
}

// Check for all done
function checkAll() {
  if(boxOne.classList.contains('correct') && boxTwo.classList.contains('correct') && boxThree.classList.contains('correct') && boxFour.classList.contains('correct') && boxFive.classList.contains('correct') && boxSix.classList.contains('correct') && boxSeven.classList.contains('correct') && boxEight.classList.contains('correct') && boxNine.classList.contains('correct') && boxTen.classList.contains('correct')) {
    containerBox.classList.add('hidden')
    containerBox.classList.add('back')
    revealBox.classList.remove('hidden')
    revealBox.classList.add('front')
    sound.play()
  } else return
}

function remove () {
  let boxes = document.querySelectorAll('.box')
  for(i=0; i<boxes.length; i++) {
    boxes[i].classList.remove('correct')
  }
}
// Reveal
function revealIt() {
  remove()
  boxNine.classList.remove('correct')
  boxTen.classList.remove('correct')
  clickReveal.classList.add('easeOut')
  setTimeout(function() {prize.classList.remove('hidden')}, 2000)
  setTimeout(function() {clickReveal.classList.add('hidden')}, 2000)
  soundTwo.play()
}

clickReveal.addEventListener('click', revealIt)

// Button Check Events
cBtn.addEventListener("click", function() {
  cCheck()
})
bBtn.addEventListener("click", function() {
  bCheck()
})
iBtn.addEventListener("click", function() {
  iCheck()
})
aBtn.addEventListener("click", function() {
  aCheck()
})
jdBtn.addEventListener("click", function() {
  jdCheck()
})
jgBtn.addEventListener("click", function() {
  jgCheck()
})
kBtn.addEventListener("click", function() {
  kCheck()
})
fBtn.addEventListener("click", function() {
  fCheck()
})
hBtn.addEventListener("click", function() {
  hCheck()
})
chBtn.addEventListener("click", function() {
  chCheck()
})

document.addEventListener('click', checkAll)