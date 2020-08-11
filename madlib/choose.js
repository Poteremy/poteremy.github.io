let selector = document.getElementById('selector');

// Select Option

selector.onchange=function(selector){
    if (this.value == 1) {
        addOne();
    } else if (this.value == 2){
        addTwo();
    }
    else{return}
}

// Story Options

let create = document.createElement('input');
let newInput = JSON.parse(localStorage.getItem('inputs'));
let inputForm = document.getElementById('inputs');

function addOne () {

let inputs = ['blank',
            'Adjective',
            'Noun',
            'Plural Noun',
            "Girl's Name",
            'Adjective',
            'Article of Clothing',
            'Noun',
            'City',
            'Plural Noun',
            'Adjective',
            'Body Part',
            'Letter of Alphabet',
            'Celebrity',
            'Plural Noun',
            'Adjective',
            'Place',
            'Body Part',
            'Adjective',
            'Adjective',
            'Verb',
            'Plural Noun',
            'Number']
let story ="The hebrew word for deidel is sevivon, whose root word means 'to 1'. Dreidels have four Hebrew letters on them - Nun, Gimel, Hey, and 2. They stand for the words 'A Great 3 happened here'. Each player starts out with the same number of game pieces, which can be pennies, chocolate chips, or even 4. At the beginning of every round, each player antes up one 5, then they take turns 6 spinning the dreidel. If the dreidel lands on Nun, the player neither gives nor takes any 7 from the pot. If a player spins a Gimel, he gets to take all the 8 for himself. If the dreidel lands on Hey, the player takes half the 9, and if it lands on Shin, the player has to pay two 10 into the pot. Once a player runs out of game pieces, that player is '11'. The game is over when one person has won all of the 12 for himself or herself!"
let title = "How To Play Dreidel"

localStorage.setItem('title', JSON.stringify(title))
localStorage.setItem('story', JSON.stringify(story))
localStorage.setItem('input', JSON.stringify(inputs))

for(i=1; i<inputs.length; i++){
    let create = document.createElement('input')
    create.setAttribute('type', 'text')
    create.setAttribute('id', i)
    create.setAttribute('placeholder', inputs[i])
    inputForm.appendChild(create)
    }

let read = document.getElementById('read');
read.style.display = 'block'

}

function addTwo () {
    let inputs = [
        'blank',
        'Verb',
        'Letter',
        'Noun',
        'Plural Noun',
        'Noun',
        'Adverb',
        'Plural Noun',
        'Plural Noun',
        'Plural Noun',
        'Plural Noun',
        'Adjective',
        'Plural Noun'
    ]
let story = "There are many 1 ways to choose a/an 2 to read. First, you could ask for recommendations from your friends and 3. Just don't ask Aunt 4 - she only reads 5 books with 6 - ripping goddesses on the cover. If your friends and family are no help, try checking out the 7 Review in the 8 times. If the 9 featured there are too 10 for your taste, try something a little more low- 11, like 12: the 13 Magazine or 14 Magazine. You could also choose a book the 15 -fashioned way. Head to your local library or 16 and browse the shelves until something catches your 17. Or, you could save yourself a whole lot of 18 trouble and log on to www.bookish.com, the 19 new website to 20 for books! With all the time you'll save not having to search for 21, you can read 22 more books!"
let title = "Bookish Madlibs"

localStorage.setItem('title', JSON.stringify(title))
localStorage.setItem('story', JSON.stringify(story))
localStorage.setItem('input', JSON.stringify(inputs))

for(i=1; i<inputs.length; i++){
    let create = document.createElement('input')
    create.setAttribute('type', 'text')
    create.setAttribute('id', i)
    create.setAttribute('placeholder', inputs[i])
    inputForm.appendChild(create)
    }

let read = document.getElementById('read');
read.style.display = 'block'

    }

function submit(e) {

    let finalInputs = ['blank']
        localStorage.setItem('finalInputs', JSON.stringify(finalInputs))
        JSON.parse(localStorage.getItem('finalInputsOne'))
    for (let i = 1; i<inputs.length + 1; i++){
        let inputNumber = document.getElementById(i);
        finalInputs.push(inputNumber.value)
    }
        localStorage.setItem('finalInputs', JSON.stringify(finalInputs))
    }