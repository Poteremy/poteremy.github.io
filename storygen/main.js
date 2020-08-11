let who = document.getElementById('who');
let what = document.getElementById('what');
let where = document.getElementById('where');
let get = document.getElementById('get');
let reset = document.getElementById('reset');

let whoArray = [
  'A doctor',
  'A pirate',
  'A king', 
  'A princess',
  'A teacher',
  'A frog',
  'My dad', 
  'A lion', 
  'A giant ant',
  'The president',
  'A knight',
  'A clown',
  'A singer',
  'An actor',
  'A waiter',
  'A giant',
];
let whatArray = [
  'found a magic bean',
  'got lost',
  'saved a princess',
  'went fishing',
  'found $100',
  'fought a dragon',
  'climbed a tree',
  'found a strange egg',
  'found a hole in a tree',
  'found a large footprint',
  'saw a bright light',
  'ate the magical donut',
  'caught a leprechaun',
  'ate a leaf from the magical tree',
  'caught a unicorn',
  'found a baby owl'

];
let whereArray = [
  'in a castle',
  'at school',
  'in Walmart',
  'on a boat',
  'in the jungle',
  'at their house',
  'on a trampoline',
  'in space',
  'in a mall',
  'at a restaurant',
  'at an ice cream shop',
  'in a forest',
  'at a toy store',
  'at a pizza shop',
  'at the zoo',
  'on another planet',
  'at an aquarium',
  'at a bakery',
  'in Anarctica',
  'in a garden',
  'at the beach'
];

function getNew() {
who.textContent=whoArray[Math.floor(Math.random()*whoArray.length)]; 
what.textContent=whatArray[Math.floor(Math.random() * whatArray.length)];
where.textContent=whereArray[Math.floor(Math.random() * whereArray.length)];
  }

function clear() {
  who.textContent = '';
  what.textContent = '';
  where.textContent = '';
}

get.addEventListener('click', getNew)
reset.addEventListener('click', clear)

