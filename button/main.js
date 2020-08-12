// DOM Elements

let inputs = {
  'btn': document.getElementById('btn'),
  'input': document.getElementById('input'),
  'size': document.getElementById('size'),
  'bgColor': document.getElementById('bgColor'),
  'customColor': document.getElementById('customColor'),
  'txtColor': document.getElementById('txtColor'),
  'border': document.getElementById('border'),
  'shadow': document.getElementById('shadow'),
  'hover': document.getElementById('hover') 

}

let code = {
  'sizeD': document.getElementById('sizeD'),
  'bgD': document.getElementById('bgD'),
  'txtD': document.getElementById('txtD'),
  'decorD': document.getElementById('decorD'),
  'borderD': document.getElementById('borderD'),
  'shadowD': document.getElementById('shadowD')
}

let customs = {
  'customOne': document.getElementById('customOne'),
  'cd1': document.getElementById('cd1'),
  'customTwo': document.getElementById('customTwo'),
  'cd2': document.getElementById('cd2'),
  'customThree': document.getElementById('customThree'),
  'cd3': document.getElementById('cd3'),
  'customFour': document.getElementById('customFour'),
  'cd4': document.getElementById('cd4'),
}

//! Custom Colors

const colorChange = function (e) {
  if (customOne.value.length < 7) {
    return
  } else {
    cd1.style.background = e.target.value
  }
}
customOne.addEventListener('input', colorChange)
customOne.addEventListener('propertychange', colorChange)

const colorChange2 = function (e) {
  if (customTwo.value.length < 7) {
    return
  } else {
    cd2.style.background = e.target.value
  }
}
customTwo.addEventListener('input', colorChange2)
customTwo.addEventListener('propertychange', colorChange2)

const colorChange3 = function (e) {
  if (customThree.value.length < 7) {
    return
  } else {
    cd3.style.background = e.target.value
  }
}
customThree.addEventListener('input', colorChange3)
customThree.addEventListener('propertychange', colorChange3)

const colorChange4 = function (e) {
  if (customFour.value.length < 7) {
    return
  } else {
    cd4.style.background = e.target.value
  }
}
customFour.addEventListener('input', colorChange4)
customFour.addEventListener('propertychange', colorChange4)

//! Change The Button Display

// Input = Btn Txt Content
const inputChange = function (e) {
  if(input.value.length <=0) {
    btn.innerHTML = 'Button'
  } else {
  btn.innerHTML = e.target.value
  }
}
input.addEventListener('input', inputChange)
input.addEventListener('propertychange', inputChange)

// Size
size.addEventListener('change', function(e) {
  if(e.target.value === 'small') {
    btn.classList.remove('medium')
    btn.classList.remove('large')
    btn.classList.add('small')
    sizeD.innerText = `\u00A0\u00A0font-size: 10px;\n\u00A0\u00A0padding: 3px 5px;`
  } else if (e.target.value === 'medium'){
    btn.classList.remove('small')
    btn.classList.remove('large')
    btn.classList.add('medium')
    sizeD.innerText = `\u00A0\u00A0font-size: 16px;\n\u00A0\u00A0padding: 7px 10px;`
  } else {
    btn.classList.remove('medium')
    btn.classList.remove('small')
    btn.classList.add('large')
    sizeD.innerText = `\u00A0\u00A0font-size: 24px;\n\u00A0\u00A0padding: 10px 15px;`
  }
})

// Background Color
bgColor.addEventListener('change', function(e) {
  if(e.target.value === 'white') {
    btn.style.background=''
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('transparent')
    btn.classList.add('white')
    bgD.innerText=`\u00A0\u00A0background: ${e.target.value};`
  } else if (e.target.value === 'black') {
    btn.style.background=''
    btn.classList.remove('white')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('transparent')
    btn.classList.add('black')
    bgD.innerText=`\u00A0\u00A0background: ${e.target.value};`
  } else if (e.target.value === 'red') {
    btn.style.background=''
    btn.classList.remove('black')
    btn.classList.remove('white')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('transparent')
    btn.classList.add('red')
    bgD.innerText=`\u00A0\u00A0background: ${e.target.value};`
  } else if (e.target.value === 'green') {
    btn.style.background=''
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('white')
    btn.classList.remove('blue')
    btn.classList.remove('transparent')
    btn.classList.add('green')
    bgD.innerText=`\u00A0\u00A0background: ${e.target.value};`
  } else if (e.target.value === 'blue') {
    btn.style.background=''
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.classList.add('blue')
    bgD.innerText=`\u00A0\u00A0background: ${e.target.value};`
  } else if(e.target.value === 'transparent') {
    btn.style.background=''
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.add('transparent')
    bgD.innerText=`\u00A0\u00A0background: ${e.target.value};`
  } else if (e.target.value === 'custom1') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.background=customOne.value
    bgD.innerText=`\u00A0\u00A0background: ${customOne.value};`
  } else if (e.target.value === 'custom2') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.background=customTwo.value
    bgD.innerText=`\u00A0\u00A0background: ${customTwo.value};`
  } else if(e.target.value === 'custom3') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.background=customThree.value
    bgD.innerText=`\u00A0\u00A0background: ${customThree.value};`
  } else if (e.target.value === 'custom4') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.background=customFour.value
    bgD.innerText=`\u00A0\u00A0background: ${customFour.value};`
  }
})

// Text Color
txtColor.addEventListener('change', function(e) {
  if(e.target.value === 'black') {
    btn.style.color=''
    btn.classList.remove('tWhite')
    btn.classList.remove('tRed')
    btn.classList.remove('tGreen')
    btn.classList.remove('tBlue')
    btn.classList.add('tBlack')
    txtD.innerText=`\u00A0\u00A0color: ${e.target.value};`
  } else if(e.target.value === 'white') {
    btn.style.color=''
    btn.classList.remove('tBlack')
    btn.classList.remove('tRed')
    btn.classList.remove('tGreen')
    btn.classList.remove('tBlue')
    btn.classList.add('tWhite')
    txtD.innerText=`\u00A0\u00A0color: ${e.target.value};`
  } else if(e.target.value === 'red') {
    btn.style.color=''
    btn.classList.remove('tWhite')
    btn.classList.remove('tBlack')
    btn.classList.remove('tGreen')
    btn.classList.remove('tBlue')
    btn.classList.add('tRed')
    txtD.innerText=`\u00A0\u00A0color: ${e.target.value};`
  } else if(e.target.value === 'green') {
    btn.style.color=''
    btn.classList.remove('tWhite')
    btn.classList.remove('tRed')
    btn.classList.remove('tBlack')
    btn.classList.remove('tBlue')
    btn.classList.add('tGreen')
    txtD.innerText=`\u00A0\u00A0color: ${e.target.value};`
  } else if (e.target.value === 'blue') {
    btn.style.color=''
    btn.classList.remove('tWhite')
    btn.classList.remove('tRed')
    btn.classList.remove('tGreen')
    btn.classList.remove('tBlack')
    btn.classList.add('tBlue')
    txtD.innerText=`\u00A0\u00A0color: ${e.target.value};`
  } else if (e.target.value === 'custom1') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.color=customOne.value
    txtD.innerText=`\u00A0\u00A0color: ${customOne.value};`
  } else if (e.target.value === 'custom2') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.color=customTwo.value
    txtD.innerText=`\u00A0\u00A0color: ${customTwo.value};`
  } else if(e.target.value === 'custom3') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.color=customThree.value
    txtD.innerText=`\u00A0\u00A0color: ${customThree.value};`
  } else if (e.target.value === 'custom4') {
    btn.classList.remove('black')
    btn.classList.remove('red')
    btn.classList.remove('green')
    btn.classList.remove('blue')
    btn.classList.remove('white')
    btn.classList.remove('transparent')
    btn.style.color=customFour.value
    txtD.innerText=`\u00A0\u00A0color: ${customFour.value};`
  }
})

// Decor 
let bold = document.createElement('p')
bold.setAttribute('id', 'boldText')
bold.innerText='\u00A0\u00A0font-weight: bold;'
let noOutline = document.createElement('p')
noOutline.setAttribute('id', 'noOutlineText')
noOutline.innerText='\u00A0\u00A0outline: none;'
let round = document.createElement('p')
round.setAttribute('id', 'roundText')
round.innerText='\u00A0\u00A0border-radius: 40px'

document.querySelectorAll('.checkbox').forEach(check => {
 check.addEventListener('click', function(e) {
   if(e.target.checked) {
     btn.classList.add(e.target.id)
     if(e.target.id === 'bold') {
       decorD.appendChild(bold)
     } else if(e.target.id === 'noOutline') {
       decorD.appendChild(noOutline)
     } else {
       decorD.appendChild(round)
     }
   } else {
     btn.classList.remove(e.target.id)
     document.getElementById(`${e.target.id}Text`).remove()
   }
 })
})

// Border Color
border.addEventListener('change', function(e) {
  if(e.target.value === 'bBlack') {
    btn.style.border=''
    btn.classList.remove('bLight')
    btn.classList.add('bBlack')
    borderD.innerText = `\u00A0\u00A0border: 2px solid #222;`
  } else if (e.target.value === 'bLight') {
    btn.style.border=''
    btn.classList.remove('bBlack')
    btn.classList.add('bLight')
    borderD.innerText = `\u00A0\u00A0border: 2px solid rgba(34, 34, 34, .5);`
  } else if(e.target.value === 'custom1') {
    btn.classList.remove('bLight')
    btn.classList.remove('bBlack')
    btn.style.border=`2px solid ${customOne.value}`
    borderD.innerText=`\u00A0\u00A0border: 2px solid ${customOne.value}`
  } else if(e.target.value === 'custom2') {
    btn.classList.remove('bLight')
    btn.classList.remove('bBlack')
    btn.style.border=`2px solid ${customTwo.value}`
    borderD.innerText=`\u00A0\u00A0border: 2px solid ${customTwo.value}`
  } else if(e.target.value === 'custom3') {
    btn.classList.remove('bLight')
    btn.classList.remove('bBlack')
    btn.style.border=`2px solid ${customThree.value}`
    borderD.innerText=`\u00A0\u00A0border: 2px solid ${customThree.value}`
  } else if(e.target.value === 'custom1') {
    btn.classList.remove('bLight')
    btn.classList.remove('bBlack')
    btn.style.border=`2px solid ${customFour.value}`
    borderD.innerText=`\u00A0\u00A0border: 2px solid ${customFour.value}`
  }
})

// Shadow
shadow.addEventListener('change', function(e) {
  if(e.target.value === 'shadow') {
    btn.classList.add('shadow')
    shadowD.innerText=`\u00A0\u00A0box-shadow: 1px 1px 5px #222`
  } else {
    btn.classList.remove('shadow')
    shadowD.innerText=''
  }
})

// Hover
hover.addEventListener('change', function(e) {
  if(e.target.value === 'default') {
    btn.classList.remove('hpoint')
    btn.classList.remove('hshadow')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hup')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hupShadowPoint')
  } else if(e.target.value === 'point') {
    btn.classList.remove('hshadow')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hup')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hupShadowPoint')
    btn.classList.add(e.target.value)
  } else if(e.target.value === 'shadow') {
    btn.classList.remove('hpoint')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hup')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hupShadowPoint')
    btn.classList.add(e.target.value)
  } else if(e.target.value === 'shadowPoint') {
    btn.classList.remove('hshadow')
    btn.classList.remove('hpoint')
    btn.classList.remove('hup')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hupShadowPoint')
    btn.classList.add(e.target.value)
  } else if(e.target.value === 'up') {
    btn.classList.remove('hshadow')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hpoint')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hupShadowPoint')
    btn.classList.add(e.target.value)
  } else if(e.target.value === 'upShadow') {
    btn.classList.remove('hshadow')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hup')
    btn.classList.remove('hpoint')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hupShadowPoint')
    btn.classList.add(e.target.value)
  } else if(e.target.value === 'upPoint') {
    btn.classList.remove('hupPoint')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hup')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hpoint')
    btn.classList.remove('hupShadowPoint')
    btn.classList.add(e.target.value)
  } else if(e.target.value === 'upShadowPoint') {
    btn.classList.remove('hshadow')
    btn.classList.remove('hshadowPoint')
    btn.classList.remove('hup')
    btn.classList.remove('hupShadow')
    btn.classList.remove('hupPoint')
    btn.classList.remove('hpoint')
    btn.classList.add(e.target.value)
  }
})