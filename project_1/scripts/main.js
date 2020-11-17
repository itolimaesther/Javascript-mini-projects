// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const wrap = document.querySelector('.wrapper')
const body = document.querySelector('body')




body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'

wrap.style.width = '33%'



for(let i = 0; i <= 101; i++){
    const div = document.createElement('div')
    // console.log(divChild)
    
    div.style.textAlign = 'center'
    div.style.display = 'inline-flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.margin = '2px'
    div.style.width = '60px'
    div.style.height = '35px'
    div.textContent = i
    wrap.appendChild(div)
    
   
    if(i % 2 === 0 && i !== 2){
        div.style.backgroundColor = 'green'  // even
    }
    if(i % 2 === 1 && i !== 1 || i === 2){

        
        div.style.backgroundColor = 'red'  // Prime


        for(let x = 2; x < i; x++){
       if(i % x === 0){
         div.style.backgroundColor = 'yellow' // Odd
                                
         }
        }
    }

    
 
  
  
} 


// evenOdd = () => {
//     for(let i = 0; i <= 101; i++){
//         let div = document.createElement('div')
//         if(i % 2 === 0 && i !== 2){
//             div.innerHTML = i
//             div.style.backgroundColor = 'green'  // even
//             flag = 1
//         }
        
//         else{
//             div.innerHTML = i
//             div.style.backgroundColor = 'yellow'  // Odd

//             for(let x = 2; x < i; x++){
//                 if(i % x == 0){
//                     div.style.backgroundColor = 'red' // Prime
                    
//                 }
//             }
//         }

//         div.style.textAlign = 'center'
//         div.style.display = 'inline-flex'
//         div.style.justifyContent = 'center'
//         div.style.alignItems = 'center'
//         div.style.margin = '2px'
//         div.style.width = '60px'
//         div.style.height = '35px'
//         wrap.appendChild(div)
        
//         if(flag == 0){
//             console.log(i)
//         }
        
//     }
    
    
// }

// evenOdd()





    // if(i % 2 === 0 && i !== 2){
    //     div.style.backgroundColor = 'green'  // even
    // }
    // else if((i % 2 === 1) || (i % 3 === 0) ) {
    //     div.style.backgroundColor = 'red' // Prime
    // }
    // else if((i === 1) || (i % 3 === 0 && i !== 3) ){
    //     div.style.backgroundColor = 'yellow'  // Odd
    // }
    



// console.log(num)


