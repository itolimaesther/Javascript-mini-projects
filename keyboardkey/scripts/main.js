// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const h1 = document.querySelector('h1')
const div = document.querySelector('.textWrap')
const keyCode = document.querySelector('.key-code')
const keycodeH1 = document.createElement('h1')



document.body.addEventListener('keypress', e => {
    h1.textContent = ""

    h1.innerHTML = 'You press ' + "<span style= 'color: green' >" + `${e.key}`+ "</span"

    keyCode.appendChild(keycodeH1)
    keycodeH1.textContent = `${e.keyCode}`

    keycodeH1.style.padding = '32px 0px'
    keycodeH1.style.color = 'green'
    keyCode.style.backgroundColor = '#ffffff'
    keyCode.style.borderShadow = '0 0 8px'
    keyCode.style.width = '10%'


})