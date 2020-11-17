// console.log(asabenehChallenges2020)

const body = document.querySelector("body")
const wrap = document.querySelector(".wrapper");
const title = document.createElement("h1");
const subtitle = document.createElement("h2");
const year = document.createElement("span");
const currentDate = document.createElement("p");



body.style.display = "flex";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
body.style.alignItems = "center";

wrap.style.width = "65%"
wrap.style.margin = "0 auto"



wrap.appendChild(title);
title.textContent = `${asabenehChallenges2020.challengeTitle}` + " in ";
title.appendChild(year);
title.style.textAlign = 'center'
year.textContent = `${asabenehChallenges2020.challengeYear}`;
year.style.fontSize = "70px";

wrap.appendChild(subtitle);
subtitle.textContent = `${asabenehChallenges2020.challengeSubtitle}`;
subtitle.style.textDecoration = "underline";
subtitle.style.textAlign = "center"

newDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const mint = date.getMinutes();
  const secs = date.getSeconds();

  return `${month} ${day}, ${year} ${hours}:${mint}:${secs}`;
};

wrap.appendChild(currentDate);
currentDate.textContent = newDate();
currentDate.style.padding = "5px 20px";
currentDate.style.textAlign = "center"



let innerDiv, div;

for (let j = 0; j < asabenehChallenges2020.challenges.length; j++) {
  div = document.createElement("div");
  innerDiv = document.createElement("div");

  innerDiv.innerHTML +=
    "<div style='width: 50%'>" + asabenehChallenges2020.challenges[j].name + "</div>";
  innerDiv.innerHTML +=
    "<div style='width: 60%'>" +
    "<details>" +
    "<summary>" +
    asabenehChallenges2020.challenges[j].topics[0] +
    "</summary>" +
    asabenehChallenges2020.challenges[j].topics +
    "</details>" +
    "</div>";
  innerDiv.innerHTML +=
    "<div style='width: 20%'>" + asabenehChallenges2020.challenges[j].status + "</div>";
  wrap.appendChild(innerDiv);
  // innerDiv.style.width = "80%";
  innerDiv.style.marginBottom = "5px";
  innerDiv.style.backgroundColor = "blue";

  // innerDiv.appendChild(div);
  innerDiv.style.display = "flex";
  innerDiv.style.justifyContent = "space-around";
  innerDiv.style.padding = "16px 12px";
  innerDiv.style.listStyle = "none";
  innerDiv.style.textAlign = "justify";

  if (j === 0) {
    innerDiv.style.backgroundColor = "#5bbc7a";
  } else if (j === 1) {
    innerDiv.style.backgroundColor = "#f7dc5c";
  } else {
    innerDiv.style.backgroundColor = "#eb695b";
  }
}


getColor = () => {
  setInterval(() => {
    let hex = "#";
    let characters = "0123456789abcdef";
    for (let j = 0; j < 6; j++) {
      hex += characters[Math.floor(Math.random() * characters.length)];
    }
    currentDate.style.backgroundColor = hex;

    invertColor = () => {
      let hexNew = hex.replace("#", "").split("");
      let inverseColor = "#" + hexNew.reverse().join("");
      year.style.color = inverseColor;
    };
    invertColor();
  }, 1000);
};

getColor();





let titleWrap = document.createElement("div")
const authorTitle = document.createElement("h2")

titleWrap.appendChild(authorTitle);
wrap.appendChild(titleWrap)
authorTitle.textContent = `${asabenehChallenges2020.author.firstName}` + ` ${asabenehChallenges2020.author.lastName}`;
authorTitle.style.textAlign = "center"



let socialLinks = document.createElement("div")
let iconsImage = ''
for(let x = 0; x < asabenehChallenges2020.author.socialLinks.length; x++){
  iconsImage += `${asabenehChallenges2020.author.socialLinks[x].fontawesomeIcon}`
}

socialLinks.innerHTML = iconsImage
socialLinks.className = 'social-links'
titleWrap.appendChild(socialLinks)

socialLinks.style.display = 'flex'
socialLinks.style.justifyContent = 'center'

const twitterIcon = document.querySelector('.fa-twitter-square')
const linkedinIcon = document.querySelector('.fa-linkedin')
const githubIcon = document.querySelector('.fa-github-square')
twitterIcon.style.margin ='0px 10px'
twitterIcon.style.fontSize = 'larger'
linkedinIcon.style.fontSize = 'larger'
githubIcon.style.fontSize = 'larger'


const bioWrap = document.createElement('div')
const bio = document.createElement('p')
bioWrap.appendChild(bio)
wrap.appendChild(bioWrap)
bio.textContent = `${asabenehChallenges2020.author.bio}`
bio.style.textAlign = "center"


const authorSection = document.createElement('div')
wrap.appendChild(authorSection)
authorSection.style.display = "flex"
authorSection.style.justifyContent = "space-between"



const authorTitles = document.createElement('div')
const titleHeading = document.createElement('h3')
const titlesWrap = document.createElement('div')
titleHeading.textContent = 'Titles'
authorTitles.appendChild(titleHeading)
authorTitles.appendChild(titlesWrap)
authorSection.appendChild(authorTitles)
// authorTitles.style.marginRight = '60px'

asabenehChallenges2020.author.titles.forEach((elem) =>{
  let titleList = document.createElement('li')
  titleList.textContent = `${elem}` 
  titlesWrap.appendChild(titleList)
  titleList.style.listStyle = 'none'
})


const authorSkills = document.createElement('div')
const skillHeading = document.createElement('h3')
const skillWrap = document.createElement('div')
skillHeading.textContent = 'Skills'
authorSkills.appendChild(skillHeading)
authorSkills.appendChild(skillWrap)
authorSection.appendChild(authorSkills)
// authorSkills.style.marginRight = '60px'

asabenehChallenges2020.author.skills.forEach((elem) =>{
  let skillList = document.createElement('li')
  skillList.textContent = `${elem}` 
  skillWrap.appendChild(skillList)
  skillList.style.listStyle = 'none'
})


const authorQualifications = document.createElement('div')
const qualificationHeading = document.createElement('h3')
const qualificationWrap = document.createElement('div')
qualificationHeading.textContent = 'Qualification'
authorQualifications.appendChild(qualificationHeading)
authorQualifications.appendChild(qualificationWrap)
authorSection.appendChild(authorQualifications)

asabenehChallenges2020.author.qualifications.forEach((elem) =>{
  let qualificationList = document.createElement('li')
  qualificationList.textContent = `${elem}` 
  qualificationWrap.appendChild(qualificationList)
  qualificationList.style.listStyle = 'none'
})


const keywordsSection = document.createElement('div')
const keywordHeading = document.createElement('h3')
const keywordWrap = document.createElement('div')
keywordHeading.textContent = "Keywords"
keywordHeading.style.textAlign = 'left'
keywordsSection.appendChild(keywordHeading)
keywordsSection.appendChild(keywordWrap)
wrap.appendChild(keywordsSection)

// let keywordList
asabenehChallenges2020.keywords.forEach((elem) =>{
  let keywordList = document.createElement('div')
  keywordList.textContent = `${elem}` 
  keywordWrap.appendChild(keywordList)
  keywordList.style.padding = '8px 10px'
  keywordList.style.marginRight = '8px'
  keywordList.style.marginTop = '8px'
  keywordList.style.display = 'inline-block'
  keywordList.style.borderRadius = '18px'
  
  
 
    
    getColor = () => {
        let hex = "#";
        let characters = "0123456789abcdef";
        for (let j = 0; j < 6; j++) {
            hex += characters[Math.floor(Math.random() * characters.length)];
          }
          keywordList.style.backgroundColor = hex;
        };
        
        getColor();
      

      // console.log(keywordList)
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    






// // // console.log(asabenehChallenges2020)

// const wrap = document.querySelector(".wrapper");
// // const title = document.createElement("h1");
// // const subtitle = document.createElement("h2");
// const year = document.querySelector("span");
// const currentDate = document.createElement("p");
// const coloredBlocks = document.querySelector('.colored-blocks')
// const colorBlockItem = document.querySelectorAll('.color-block')
// const colorBlock = document.querySelector('.color-block')
// const blockItems = document.querySelectorAll('.block-items')
// const col = document.querySelector('.col-4')
// // let titleWrap = document.createElement("div")
// // const authorTitle = document.createElement("h2")

// wrap.style.display = "flex";
// wrap.style.justifyContent = "center";
// wrap.style.flexDirection = "column";
// wrap.style.alignItems = "center";


// year.style.fontSize = "70px";
// year.style.color = "#181890";

// // wrap.appendChild(title);
// // title.textContent = `${asabenehChallenges2020.challengeTitle}` + " in ";
// // title.appendChild(year);
// // year.textContent = `${asabenehChallenges2020.challengeYear}`;
// // year.style.fontSize = "70px";

// // wrap.appendChild(subtitle);
// // subtitle.textContent = `${asabenehChallenges2020.challengeSubtitle}`;
// // subtitle.style.textDecoration = "underline";

// newDate = () => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const date = new Date();
//   const month = months[date.getMonth()];
//   const day = date.getDate();
//   const year = date.getFullYear();
//   const hours = date.getHours();
//   const mint = date.getMinutes();
//   const secs = date.getSeconds();

//   return `${month} ${day}, ${year} ${hours}:${mint}:${secs}`;
// };

// wrap.appendChild(currentDate);
// wrap.insertBefore(currentDate, coloredBlocks);
// currentDate.textContent = newDate();
// currentDate.style.padding = "5px 20px";

// colorBlockItem.forEach((block, i) => {
//   block.style.padding = "15px 15px";
//   block.style.marginBottom = "5px";

//   if (i === 0) {
//     block.style.backgroundColor = "#5bbc7a";
//   } else if (i === 1) {
//     block.style.backgroundColor = "#f7dc5c";
//   } else {
//     block.style.backgroundColor = "#eb695b";
//   }
// })




// // asabenehChallenges2020.challenges.forEach((item) => {
// //   colorBlock.innerHTML += '<div> Hello</div>'
// //   console.log(colorBlock)
// // })




// for (let j = 0; j < asabenehChallenges2020.challenges.length; j++) {
  
//   colorBlock.innerHTML += '<div> Hello</div>'
//   console.log(colorBlock)
//   // colorBlockItem.innerHTML +=
//   //   "<div>" +
//   //   "<details>" +
//   //   "<summary>" +
//   //   asabenehChallenges2020.challenges[j].topics[0] +
//   //   "</summary>" +
//   //   asabenehChallenges2020.challenges[j].topics +
//   //   "</details>" +
//   //   "</div>";
//   // colorBlockItem.innerHTML +=
//   //   "<div>" + asabenehChallenges2020.challenges[j].status + "</div>";
//   // wrap.appendChild(colorBlockItem);

// }




  
   



  
  





// // let innerDiv, div;

// // for (let j = 0; j < asabenehChallenges2020.challenges.length; j++) {
// //   div = document.createElement("div");
// //   innerDiv = document.createElement("div");

// //   innerDiv.innerHTML +=
// //     "<div>" + asabenehChallenges2020.challenges[j].name + "</div>";
// //   innerDiv.innerHTML +=
// //     "<div>" +
// //     "<details>" +
// //     "<summary>" +
// //     asabenehChallenges2020.challenges[j].topics[0] +
// //     "</summary>" +
// //     asabenehChallenges2020.challenges[j].topics +
// //     "</details>" +
// //     "</div>";
// //   innerDiv.innerHTML +=
// //     "<div>" + asabenehChallenges2020.challenges[j].status + "</div>";
// //   wrap.appendChild(innerDiv);
// //   innerDiv.style.width = "55%";
// //   innerDiv.style.marginBottom = "5px";
// //   innerDiv.style.backgroundColor = "blue";

// //   innerDiv.appendChild(div);
// //   innerDiv.style.display = "flex";
// //   innerDiv.style.justifyContent = "space-around";
// //   innerDiv.style.padding = "16px 0px";
// //   innerDiv.style.listStyle = "none";
// //   innerDiv.style.textAlign = "justify";

// //   if (j === 0) {
// //     innerDiv.style.backgroundColor = "#5bbc7a";
// //   } else if (j === 1) {
// //     innerDiv.style.backgroundColor = "#f7dc5c";
// //   } else {
// //     innerDiv.style.backgroundColor = "#eb695b";
// //   }
// // }


// getColor = () => {
//   setInterval(() => {
//     let hex = "#";
//     let characters = "0123456789abcdef";
//     for (let j = 0; j < 6; j++) {
//       hex += characters[Math.floor(Math.random() * characters.length)];
//     }
//     currentDate.style.backgroundColor = hex;

//     invertColor = () => {
//       let hexNew = hex.replace("#", "").split("");
//       let inverseColor = "#" + hexNew.reverse().join("");
//       year.style.color = inverseColor;
//     };
//     invertColor();
//   }, 1000);
// };

// getColor();



// // titleWrap.appendChild(authorTitle);
// // wrap.appendChild(titleWrap)
// // authorTitle.textContent = `${asabenehChallenges2020.author.firstName}` + ` ${asabenehChallenges2020.author.lastName}`;


// // let iconList = document.querySelector('.icon-list')
// // iconList.innerHTML = `${asabenehChallenges2020.author.socialLinks[0].fontawesomeIcon}`


// // // let iconsImage
// // // for(let x = 0; x < asabenehChallenges2020.author.socialLinks.length; x++){
// // //   iconsImage = asabenehChallenges2020.author.socialLinks[x].fontawesomeIcon
  
// // // }
// // // let socialLinks = document.createElement("div")
// // // console.log(iconsImage)

// // // socialLinks.innerHTML = iconsImage
// // // titleWrap.appendChild(socialLinks)