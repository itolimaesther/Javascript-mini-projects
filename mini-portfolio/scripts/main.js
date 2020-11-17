const data = {
  technologies: [
    "HTML",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Numpy",
    "Pandas",
  ],
  author: {
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
  },
};

const technologies = document.querySelector(".technologies");
let techText = document.querySelector(".tech-text");
let span = document.querySelector("span");
let slideText = document.querySelector("p")

let counter = 0;
setInterval(() => {
  span.innerText = data.technologies[counter];
  span.style.fontSize = "35px";
  span.style.fontWeight = "bold";
  counter++;
  if (counter === data.technologies.length) {
    counter = 0;
  }
  getColor = () => {
    setInterval(() => {
      let hex = "#";
      let characters = "0123456789abcdef";
      for (let j = 0; j < 6; j++) {
        hex += characters[Math.floor(Math.random() * characters.length)];
      }
      span.style.color = hex;
    }, 1000);
  };
  
  getColor();
}, 1000);



slideShow = () => {
  
  let i = 0
  setInterval(() => {

    slideText.innerText = data.author.titles[i]
    slideText.style.animation = 'slidein 2s infinite'
      i++
        if(i === data.author.titles.length) {
          i = 0;
        }
  }, 2000)

}
slideShow()
