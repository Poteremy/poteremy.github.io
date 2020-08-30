let name = document.getElementById('name');
let answer = document.getElementById('answer');
let submitBtn = document.getElementById('submitBtn');
let answerbox = document.getElementById('answerbox');

submitBtn.addEventListener('click', function() {
  let sname = document.createElement('h1')
  let sanswer = document.createElement('h3')

  answerbox.appendChild(sname)
  answerbox.appendChild(sanswer)

  sname.innerHTML = name.value
  sanswer.innerHTML = answer.value

})


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(name) {
    element.setAttribute(name, attributes[name])
  })
}