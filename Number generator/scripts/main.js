// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const wrap = document.querySelector(".wrapper");
const body = document.querySelector("body");
const numbersWrap = document.createElement("div");
const button = document.querySelector("button");
const inputSection = document.querySelector(".input");
const input = document.querySelector("input");
const p = document.querySelector("p");

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
body.style.alignItems = "center";

wrap.style.width = "45%";

wrap.appendChild(numbersWrap);

let div


for (let i = 0; i <= 50; i++) {
     div = document.createElement("div");
    // console.log(divChild)

    div.style.textAlign = "center";
    div.style.display = "inline-flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.margin = "2px";
    div.style.width = "60px";
    div.style.height = "35px";
    div.style.fontSize = "30px";
    div.textContent = i;
    numbersWrap.appendChild(div);

    if (i % 2 === 0 && i !== 2) {
      div.style.backgroundColor = "green"; // even
    }
    if ((i % 2 === 1 && i !== 1) || i === 2) {
      div.style.backgroundColor = "red"; // Prime

      for (let x = 2; x < i; x++) {
        if (i % x === 0) {
          div.style.backgroundColor = "yellow"; // Odd
        }
      }
    }
  }


button.addEventListener("click", (e) => {
  let regex = /^[0-9]+$/;
  if (input.value === "") {
    p.textContent = "Enter the number on the input field to generate numbers";
    p.style.color = "red";
  } else if (!input.value.match(regex)) {
    p.textContent = "Enter a number";
    p.style.color = "red";
  } else {
    p.textContent = "";
  }

 numbersWrap.innerHTML = ""

  for(let i = 0; i < input.value; i++){
      const div = document.createElement('div')

      div.style.textAlign = 'center'
      div.style.display = 'inline-flex'
      div.style.justifyContent = 'center'
      div.style.alignItems = 'center'
      div.style.margin = '2px'
      div.style.width = '60px'
      div.style.height = '35px'
      div.style.fontSize = '30px'
      div.textContent = i
      numbersWrap.appendChild(div)

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
});
