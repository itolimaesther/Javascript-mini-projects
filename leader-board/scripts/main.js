const blocks = document.querySelector('.blocks')
const addPlayer = document.getElementById('add-player')
const inputBox = document.querySelectorAll('input')
let inputWrapper = document.querySelector('.inputs')




let firstNameVal = document.getElementById('first-name')
let secondNameVal = document.getElementById('second-name')
let countryVal = document.getElementById('country-name')
let playerScore = document.getElementById('player-score')

let playerBlock = document.createElement('div')
let name = document.createElement('p')
let countryName = document.createElement('p')
let score = document.createElement('p')
let buttonsWrapper = document.createElement('div')
let addFive = document.createElement('button')
let minusFive = document.createElement('button')
let deleteButton = document.createElement('button')

addInputVal = () => {
 const fragment = document.createDocumentFragment()
playerBlock.setAttribute('class', 'player')
name.setAttribute('class', 'name')
countryName.setAttribute('class', 'country')
score.setAttribute('class', 'score')
buttonsWrapper.setAttribute('class', 'buttons')
addFive.setAttribute('id', 'add-five')
minusFive.setAttribute('id', 'remove-five')
deleteButton.setAttribute('id', 'delete-btn')



deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'
addFive.innerText = '+5'
minusFive.innerText = '-5'

deleteButton.style.color = ' rgb(138, 0, 0)'

playerBlock.append(name)
playerBlock.append(countryName)
playerBlock.append(score)
playerBlock.append(buttonsWrapper)


buttonsWrapper.appendChild(deleteButton)
buttonsWrapper.appendChild(addFive)
buttonsWrapper.appendChild(minusFive)
fragment.append(playerBlock)


name.innerText = `${firstNameVal.value} ` + `${secondNameVal.value}`
countryName.innerText = `${countryVal.value}`
score.innerText = `${playerScore.value}`
blocks.appendChild(fragment)

}



let errorMessage = document.createElement('p')

addPlayer.addEventListener('click', () => { 
    // check if all inputs have values 
if(!firstNameVal.value || !secondNameVal.value || !countryVal.value || !playerScore.value ){
    errorMessage.innerText = 'All fields are required'
    inputWrapper.appendChild(errorMessage)
    errorMessage.style.color = 'red'
    errorMessage.style.textAlign = 'center'
    playerBlock.classList.toggle("hide")
}else{
    errorMessage.innerText = ''
    addInputVal()
    firstNameVal.value = ''
    secondNameVal.value = ''
    countryVal.value = ''
    playerScore.value = ''
}
   
})



deleteButton.addEventListener('click', e => {
    playerBlock.classList.toggle("hide")
})


addFive.addEventListener('click', e => {
    let scorePoint = parseInt(score.innerText)
    scorePoint += 5
    score.innerText = `${scorePoint}`
})

minusFive.addEventListener('click', e => {
    let scorePoint = parseInt(score.innerText)
    scorePoint -= 5
    score.innerText = `${scorePoint}`
})


