// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let subtitle = document.querySelector(".subtitle");
let populationBtn = document.querySelector(".population");
let languagesBtn = document.querySelector(".languages");
const graphWrapper = document.querySelector(".graph-wrapper");
const graphTitle = document.querySelector(".graph-title")
const langData = document.createElement("div")
const populationData = document.createElement("div")
const firstColumn = document.createElement("div")
const secondColumn = document.createElement("div")
const thirdColumn = document.createElement("div")
const fourthColumn = document.createElement("div")
const fifthColumn = document.createElement("div")
const sixthColumn = document.createElement("div")

subtitle.innerText =
  "Currently, we have " + `${countries.length}` + " countries";

firstColumn.classList.add('col-1')
secondColumn.classList.add('col-2')
thirdColumn.classList.add('col-3')




graphWrapper.appendChild(langData)
graphWrapper.appendChild(populationData)


langData.appendChild(firstColumn)
langData.appendChild(secondColumn)
langData.appendChild(thirdColumn)
langData.style.display = 'flex'
langData.style.justifyContent = 'space-around'
graphTitle.innerHTML = '10 Most spoken languages in ther world'

populationData.appendChild(fourthColumn)
populationData.appendChild(fifthColumn)
populationData.appendChild(sixthColumn)
populationData.style.display = 'none'
populationData.style.justifyContent = 'space-around'




let spokenLanguages = (num) => {
  let newLang = [];
  let counts = [];

  for (let lang of countries) {
    newLang.push(lang.languages);
  }

  let allLanguages = newLang.join(",").split(",");
  let langObj = [];
  allLanguages.forEach((c) => {
    if (!langObj.includes(c)) {
      langObj.push(c);
    }
  });

  for (let l of langObj) {
    let newCount = 0;
    for (let i = 0; i < allLanguages.length; i++) {
      if (l === allLanguages[i]) {
        newCount++;
      }
    }

    counts.push({ lang: l, count: newCount });
  }

  let sortCount = counts.sort((a, b) => {
    return b.count - a.count;
  });

  let answer = sortCount.slice(0, num).filter(function (data){
    const countryName = document.createElement('div')
    const countryCount = document.createElement('div')
    const visualData = document.createElement('div')
    console.log(data.count)
    countryName.innerText = data.lang
    countryCount.innerText = data.count
    let maxWidth = 91
    let width = Math.floor((data.count / maxWidth) * 100) + "%"

    countryName.style.marginBottom = '7px'
    countryName.style.height = '30px'
    countryName.style.textAlign = 'justify'
    countryCount.style.marginBottom = '7px'
    countryCount.style.height = '30px'
    countryCount.style.textAlign = 'justify'

  
    visualData.style.backgroundColor = 'orange'
    visualData.style.width = `${width}`
    // visualData.style.width = '30%'
    visualData.style.height = '30px'
    visualData.style.borderRadius = '8px'
    visualData.style.marginBottom = '7px'
    firstColumn.appendChild(countryName)
    firstColumn.style.width = '25%'
    secondColumn.appendChild(visualData)
    secondColumn.style.width = '70%'
    thirdColumn.appendChild(countryCount)
    
    
  })
  
  return answer
}
spokenLanguages(10)


let population = (num) => {
  let newNames = [];
  let newPopulation =[]
  let counts = [];

  for (let country of countries) {
    newNames.push(country.name);
    newPopulation.push(country.population);
    counts.push({name:country.name, population: country.population})
}

let sortCount = counts.sort((a, b) => {
    return b.population - a.population  
});
let answer = sortCount.slice(0, num).filter(function (data){
  const countryName = document.createElement('div')
  const countryPopulation = document.createElement('div')
  const visualData = document.createElement('div')
  let maxWidth = 1377422166
  let width = Math.floor((data.population / maxWidth) * 100) + "%"

  countryName.innerText = data.name
    countryPopulation.innerText = data.population

    countryName.style.marginBottom = '7px'
    countryName.style.height = '30px'
    countryName.style.textAlign = 'justify'
    countryPopulation.style.marginBottom = '7px'
    countryPopulation.style.height = '30px'
    countryPopulation.style.textAlign = 'justify'

  
    visualData.style.backgroundColor = 'orange'
    visualData.style.width = `${width}`
    visualData.style.height = '30px'
    visualData.style.borderRadius = '8px'
    visualData.style.marginBottom = '7px'
    fourthColumn.appendChild(countryName)
    fourthColumn.style.width = '25%'
    fifthColumn.appendChild(visualData)
    fifthColumn.style.width = '70%'
    fifthColumn.style.marginRight = '20px'
    sixthColumn.appendChild(countryPopulation)
})

return answer

}
population(10)

languagesBtn.addEventListener("click", () => {
  graphTitle.innerHTML = '10 Most spoken languages in ther world'
  if(langData.style.display === 'none'){
    populationData.style.display = 'none'
    langData.style.display = 'flex'
  }
 
});

populationBtn.addEventListener("click", () => {
  graphTitle.innerHTML = '10 Most populated countries in ther world'
  if(populationData.style.display === 'none'){
    langData.style.display = 'none'
    populationData.style.display = 'flex'
  }
})