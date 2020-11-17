// console.log(countries)

const wrap = document.querySelector('.countries-wrapper')
const body = document.querySelector('body')


body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'

wrap.style.width = '70%'
wrap.style.margin = '0 auto'

for(let i = 0; i < countries.length; i++){
    const div = document.createElement('div')

    div.style.textAlign = 'center'
    div.style.display = 'inline-flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.margin = '2px'
    div.style.width = '100px'
    div.style.height = '100px' 
    div.style.border = '2px solid #ccc'
    div.style.borderRadius = '6px'
    div.style.fontSize = '12px'
    div.style.padding = '5px'

    div.textContent = countries[i].toUpperCase()
    wrap.appendChild(div)

    // console.log(div)

}
