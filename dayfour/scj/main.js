// Constants
let answer = document.getElementById('answer');
let submit = document.getElementById('submit');
let problem = document.getElementById('problem');
let answerWrapper = document.getElementById('answerWrapper');

// Answer
let num = 12;

// Check Function
submit.addEventListener('click', function() {
  if(answer.value == num) {
    problem.classList.add('fade-out');
    answerWrapper.classList.add('fade-out')
    answer.value=""
    submit.classList.add('hidden')
    setTimeout(addHidden, 4900)
    picture.classList.add('fade-in')
    setTimeout(removeHidden, 5000)
  } else answer.value = "";
})

function addHidden() {
  problem.classList.add('hidden');
  answerWrapper.classList.add('hidden');
}

function removeHidden() {
  picture.classList.remove('hidden');
}
