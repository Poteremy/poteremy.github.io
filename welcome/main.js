let b1 = document.getElementById('b1');
let mainb = document.getElementById('mainb');
let answerb = document.getElementById('answerb');
let answerbtn = document.getElementById('answerbtn');
let boxes = document.querySelectorAll('.box')
let answerSpace = document.getElementById('answerSpace');
let welcome = document.getElementById('welcome');
let show = document.getElementById('show');


let questions = [
  `Who were the main characters of the book we finished reading before break? 


  a) Jack and Annie
  b) Jim and Franny
  c) John and Allie
  d) James and Alison`,
  `What does 'blaze' mean?
  

  a) gave off light
  b) an intense and dangerous fire
  c) glowing in an unsteady way
  d) big metal disc instrument`,
  `What year is it now?
  

  a) 2021
  b) 21
  c) 22
  d) 2022`,
  `How many months have you been in school this school year?
  

  a) 2
  b) 3
  c) 4
  d) 5`,
  `How many cats does Mr. Atlas have?
  

  a) 0
  b) 1
  c) 2
  d) 3`,
  `What do we talk about first in the morning - the Would You Rather, or the Question of the Day?
  

  a) Would You Rather
  b) Question of the Day`,
  `What comes first in the day - Language Arts or Math?
  

  a) Math
  b) Language Arts`,
  `What does 'scholar' mean?
  

  a) someone who studied something for a long time
  b) looking carefully
  c) going up or down sharply
  d) hold in your arms`,
  `How many more months of school do we have?
  

  a) 5
  b) 6
  c) 7
  d) 8`,
  `True or False: It is a rule in our classroom to raise your hand before you get out of your seat.
  

  a) True
  b) False`,
  `If you are not sure of what you are supposed to do, how can you solve that problem?
  

  a) do nothing
  b) give up
  c) ask a friend
  d) ask Mr. Atlas`,
  `True or False: It is a rule in our classroom that you can say Mr. Atlas' until he has a headache whenever you have a question.
  

  a) True
  b) False`,
  `What does 'pasture' mean?
  

  a) make cloth with thread
  b) all alone
  c) land where animals eat
  d) none of the above`,
  `What day comes before Wednesday?
  

  a) Monday
  b) Tuesday
  c) Wednesday
  d) Thursday`,
  `What month is it now?
  

  a) September
  b) December
  c) June
  d) January`,
  `What does 'peering' mean?
  

  a) carefully or beautifully made
  b) glowing in an unsteady way
  c) intense and dangerous fire
  d) none of the above`
]

let answers = [
  `Who were the main characters of the book we finished reading before break? 


  a) Jack and Annie
  
  
  `,
  `What does 'blaze' mean?
  


  b) an intense and dangerous fire
  
  `,
  `What year is it now?
  




  d) 2022`,
  `How many months have you been in school this school year?
  



  c) 4
  `,
  `How many cats does Mr. Atlas have?
  



  c) 2
  `,
  `What do we talk about first in the morning - the Would You Rather, or the Question of the Day?
  

  a) Would You Rather
  `,
  `What comes first in the day - Language Arts or Math?
  


  b) Language Arts`,
  `What does 'scholar' mean?
  

  a) someone who studied something for a long time
  
  
  `,
  `How many more months of school do we have?
  


  b) 6
  
  `,
  `True or False: It is a rule in our classroom to raise your hand before you get out of your seat.
  

  a) True
  `,
  `If you are not sure of what you are supposed to do, how can you solve that problem?
  



  c) ask a friend
  d) ask Mr. Atlas`,
  `True or False: It is a rule in our classroom that you can say Mr. Atlas' until he has a headache whenever you have a question.
  


  b) False`,
  `What does 'pasture' mean?
  



  c) land where animals eat
  `,
  `What day comes before Wednesday?
  


  b) Tuesday
  
  `,
  `What month is it now?
  




  d) January`,
  `What does 'peering' mean?
  



  
  d) none of the above`
]

b1.addEventListener('click', showQuestion)
answerbtn.addEventListener('click', back)
show.addEventListener('click', showAnswer)


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
    welcome.classList.remove('hidden')
  }

  function showAnswer() {
    if(this.previousElementSibling.innerText.includes('book')) {
      answerSpace.innerText=(answers[0])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('blaze')) {
      answerSpace.innerText=(answers[1])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('What year is it now?')) {
      answerSpace.innerText=(answers[2])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('How many months have you been in school this school year?')) {
      answerSpace.innerText=(answers[3])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('cats')) {
      answerSpace.innerText=(answers[4])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('Rather')) {
      answerSpace.innerText=(answers[5])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('Math')) {
      answerSpace.innerText=(answers[6])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('scholar')) {
      answerSpace.innerText=(answers[7])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('more')) {
      answerSpace.innerText=(answers[8])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('seat')) {
      answerSpace.innerText=(answers[9])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('problem')) {
      answerSpace.innerText=(answers[10])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('headache')) {
      answerSpace.innerText=(answers[11])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('pasture')) {
      answerSpace.innerText=(answers[12])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('Wednesday')) {
      answerSpace.innerText=(answers[13])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('now')) {
      answerSpace.innerText=(answers[14])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } else if (this.previousElementSibling.innerText.includes('peering')) {
      answerSpace.innerText=(answers[15])
      show.classList.add('hidden')
      answerbtn.classList.remove('hidden')
    } 
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
    welcome.classList.add('hidden')
    show.classList.remove('hidden')
    answerbtn.classList.add('hidden')
  }