let b1 = document.getElementById('b1');
let mainb = document.getElementById('mainb');
let answerb = document.getElementById('answerb');
let answerbtn = document.getElementById('answerbtn');
let boxes = document.querySelectorAll('.box')
let answerSpace = document.getElementById('answerSpace');

let questions = [
  "Who were the main characters of the book we finished reading before break?",
  "What does 'blaze' mean?",
  "What year is it now?",
  "How many months have you been in school this school year?",
  "How many cats does Mr. Atlas have?",
  "What do we talk about first in the morning - the Would You Rather, or the Question of the Day?",
  "What comes first in the day - Language Arts or Math?",
  "What does 'scholar' mean?",
  "How many more months of school do we have?",
  "True or False: It is a rule in our classroom to raise your hand before you get out of your seat.",
  "If you are not sure of what you are supposed to do, how can you solve that problem?",
  "True or False: It is a rule in our classroom that you can say Mr. Atlas' until he has a headache whenever you have a question.",
  "What does 'pasture' mean?",
  "What day comes before Wednesday?",
  "What month is it now?",
  "What does 'peering' mean?"
]

b1.addEventListener('click', showQuestion)
answerbtn.addEventListener('click', back)


boxes.forEach(box => {
  box.addEventListener('click', pullQuestion)
  box.addEventListener('click', showQuestion)
  box.addEventListener('click', disable)
})

function disable() {
  this.classList.add('out')
  }

  function back() {
    answerb.classList.add('hidden')
    mainb.classList.remove('hidden')
  }

  function pullQuestion() {
    let st = Array.from(this.id)
    if(st.length==2) {
    answerSpace.innerText=(questions[st[1]-1])
  } else if (st.length==3) {
    answerSpace.innerText=(questions[(st[1] + st[2])-1])
  }
  }

  function showQuestion() {
    mainb.classList.add('hidden')
    answerb.classList.remove('hidden')
  }