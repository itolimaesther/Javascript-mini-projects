// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


const selectOption = document.querySelector('select')
const option = document.querySelector('option')
const options = document.querySelectorAll('option')
const image = document.querySelector('img')
const button = document.querySelector('button')
const input = document.querySelector('input')
const description = document.querySelector('.description')
const flexItem = document.querySelector('.flex-container')
const resultDescription = document.createElement('p')
const planetName = document.createElement('span')
const weightSection = document.createElement('div')
const weightValue = document.createElement('h2')





const earthGravity = 9.8, mercuryGravity = 3.7, venusGravity = 8.87, moonGravity = 1.622, marsGravity = 3.711, jupiterGravity = 24.79, sapturnGravity = 10.44,
uranusGravity = 8.69, neptuneGravity = 11.15, plutoGravity = 0.7

showWeightSection = () => {
    flexItem.style.display = 'flex'
    flexItem.style.justifyContent = 'space-around'
    flexItem.style.display = 'flex'
    flexItem.style.backgroundColor = 'rgba(155, 155, 155, 0.164)'
    flexItem.style.alignItems = 'center'
    image.style.width = '60%'
    description.style.backgroundColor = 'rgba(134, 134, 134, 0.342)'
    description.style.width = '40%'
    description.style.padding = '15px 0px'
    resultDescription.innerText = 'The weight of the object on '
    resultDescription.style.color = '#ffffff'
    resultDescription.appendChild(planetName)
    planetName.innerText = `${selectOption.value}`.toUpperCase()
    planetName.classList.add('planet-name')
    weightValue.innerText = `${weight}`+ 'N'
    weightSection.classList.add('weigth-result')
    weightValue.style.padding = '0px 8px'
    description.appendChild(resultDescription)
    weightSection.appendChild(weightValue)
    description.appendChild(weightSection)
}



let weight 
calculateWeight = () => {
    const myArray = [...options]
    myArray.forEach((item) => {
        if(selectOption.value === 'mercury'){
            weight = input.value * mercuryGravity
            console.log(weight)
            image.src = './images/mercury.png'
            showWeightSection()
            
        }
        else if(selectOption.value === 'venus'){
            image.src = './images/venus.png'
            weight = input.value * venusGravity
            showWeightSection()
        }
        else if(selectOption.value === 'earth'){
            image.src = './images/earth.png'
            weight = input.value * earthGravity
            showWeightSection()
        }
        else if(selectOption.value === 'moon'){
            image.src = './images/moon.png'
            weight = input.value * moonGravity
            showWeightSection()
        }
        else if(selectOption.value === 'mars'){
            image.src = './images/mars.png'
            weight = input.value * marsGravity
            showWeightSection()
        }
        else if(selectOption.value === 'jupita'){
            image.src = './images/jupita.png'
            weight += input.value * jupitaGravity
            showWeightSection()
        }
        else if(selectOption.value === 'saturn'){
            image.src = './images/saturn.png'
            weight = input.value * sapturnGravity
            showWeightSection()
        }
        else if(selectOption.value === 'uranus'){
            image.src = './images/uranus.png'
            weight = input.value * uranusGravity
            showWeightSection()
        }
        else if(selectOption.value === 'neptune'){
            image.src = './images/neptune.png'
            weight = input.value * neptuneGravity
            showWeightSection()
        
        }
        else if(selectOption.value === 'pluto'){
            image.src = './images/pluto.png'
            weight = input.value * plutoGravity
            showWeightSection()
            
        }
        else if(selectOption.value === 'none' && input.value === '' ){
            image.src = ''
            description.style.backgroundColor = 'rgba(134, 134, 134, 0.342)'
            description.style.padding = '5px 0px'
            description.style.width = '40%'
            description.style.margin = '0 auto'
            description.style.position = 'relative'
            description.style.top = '-20px'
            resultDescription.innerText = 'Mass is required'
            resultDescription.style.fontSize = '18px'
            resultDescription.style.color = '#fff'
            resultDescription.style.fontWeight = 'bold'
            description.appendChild(resultDescription)
        }
        else if(selectOption.value === 'none'){
            image.src = ''
            description.style.backgroundColor = 'rgba(134, 134, 134, 0.342)'
            description.style.padding = '5px 0px'
            description.style.width = '40%'
            description.style.margin = '0 auto'
            description.style.position = 'relative'
            description.style.top = '-20px'
            resultDescription.innerText = 'You have not choose a planet yet'
            resultDescription.style.fontSize = '18px'
            resultDescription.style.color = '#fff'
            resultDescription.style.fontWeight = 'bold'
            description.appendChild(resultDescription)
        }else{
            return flexItem
        }
    })
    return weight
}


button.addEventListener('click', () => {
    calculateWeight()
})

