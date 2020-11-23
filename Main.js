let fallingWords = document.getElementById('fallingWords')
let wordInput = document.getElementById('word-input')
let fallingSingleWord = document.getElementsByClassName("falling")
let buttonStart = document.querySelector(".wrapper button")
let buttonAbout = document.querySelector(".wrapper3 button")
let buttonMenu = document.querySelector(".wrapper4 button")

let homePage = document.querySelector('.home')
let gamePage = document.querySelector('#game')
let borderRgb = document.querySelector('.block')
let about = document.querySelector('.about')

function showGame () {
  homePage.style.visibility = "hidden";
  gamePage.style.visibility = "visible";
  borderRgb.style.visibility = "hidden";
}

function showAbout () {
  homePage.style.visibility = "hidden";
  about.style.visibility = "visible";
}

function showMenu () {
  about.style.visibility ="hidden";
  homePage.style.visibility ="visible";
}



const wordsList = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'bobby',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'roller coaster',
  'IronHack'
];

const colors = [
  'blue',
  'red',
  'green'
];

function generateWord () {
  const randomPx = Math.floor(Math.random() * 700) + 10
  const randomSize = Math.floor(Math.random() * 5) + 2  
  const randomElement = wordsList[Math.floor(Math.random() * wordsList.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  fallingWords.innerHTML += `<h2 class="falling" style="left: ${randomPx}px; font-size: ${randomSize}em; color: ${randomColor};">${randomElement}</h2>`
}




function matchWords() {
  
  if (wordInput.value === fallingWords.querySelector(".falling").textContent) {
    console.log('Correct!!!');
    fallingWords.removeChild(fallingWords.firstElementChild)
    generateWord()
    wordInput.value = ""
  } 
  

  else {

    wordInput.value = ""
    console.log("Wrong")
  }
}

// function checkWordPos () {
//   setInterval(() => {
//     let word = document.querySelector(".falling")
//     if (word)
//   }, 30);
// }



wordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
 matchWords()
  }
});

buttonStart.addEventListener('click', () => {
  showGame();
  generateWord()
})

buttonAbout.addEventListener('click', () => {
  showAbout();
})

buttonMenu.addEventListener('click', () => {
  showMenu();
})


function removeWord () {
  fallingWords.textContent= ""
  inputWord.value = ""
}

// function addWordToHtml () {
//   generateWord();
//   console.log(randomElement)
// }

