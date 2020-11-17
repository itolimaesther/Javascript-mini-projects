// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


let letter = document.querySelector('h1').textContent































// console.log(letter)
let letter2 = letter.split('')

let result = letter2.filter(word => word.trim().length > 0)
// console.log(result)

let newResult = result.map(l => l)

letter2.forEach((c, idx) => {
    if(c === newResult[idx]){
        // letter.classList.add('character')
    }
    // console.log(c)
})

