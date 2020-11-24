let fallingWords = document.getElementById('fallingWords')
let wordInput = document.getElementById('word-input')
let fallingSingleWord = document.getElementsByClassName("falling")
let buttonStart = document.querySelector(".wrapper button")
let buttonAbout = document.querySelector(".wrapper3 button")
let buttonMenu = document.querySelector(".wrapper4 button")
let buttonMedium = document.querySelector(".wrapper5 button")
let score = document.querySelector(".scoreSpan")

let difficulty = document.querySelector('.difficulty')
let homePage = document.querySelector('.home')
let gamePage = document.querySelector('#game')
let borderRgb = document.querySelector('.block')
let about = document.querySelector('.about')

let timer;
let totalTime;

function setTimer () {
  window.alert("GAME OVER !")
}

function clear () {
  clearTimeout(timer)
}


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

function addScore () {
  
score.textContent = Number(score.textContent) + 50
}

function removeScore () {
  score.textContent = Number(score.textContent) - 10
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
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'bobby',
  'siblings',
  'investigate',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'rollercoaster',
  'ironhack'
];

const sentences = [
  'Love For All, Hatred For None',
  'Change the world by being yourself.',
  'Every moment is a fresh beginning.',
  'Never regret anything that made you smile.',
  'Aspire to inspire before we expire.',
  'Everything you can imagine is real.',
  'Simplicity is the ultimate sophistication.',
  'Whatever you do, do it well.',
  'What we think, we become.',
  'All limitations are self-imposed.',
  'Tough times never last but tough people do.',
  'Problems are not stop signs, they are guidelines.',
  'Be so good they can’t ignore you.' 
]

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
  timer = setTimeout (setTimer, 5000)
}


function generateSentence () {
  const randomPx = Math.floor(Math.random() * 700) + 10
  const randomSize = Math.floor(Math.random() * 5) + 2  
  const randomElement = sentences[Math.floor(Math.random() * sentences.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  fallingWords.innerHTML += `<h2 class="fallingSentence" style="left: ${randomPx}px; font-size: ${randomSize}em; color: ${randomColor};">${randomElement}</h2>`
  timer = setTimeout (setTimer, 10000)
}


function matchWords() {

  if (wordInput.value === fallingWords.querySelector(".falling, .fallingSentence").textContent) {
    if (wordInput.value.length < 15) {
      clear();
      fallingWords.removeChild(fallingWords.firstElementChild)    
      generateWord()
      wordInput.value = ""
      addScore();
      
    }

    else {
      clear();
      fallingWords.removeChild(fallingWords.firstElementChild)    
      generateSentence()
      wordInput.value = ""
      addScore();
    
    }
    
  } 
  
  else {
    wordInput.value = ""
    console.log("Wrong")
  removeScore()
  }
}


wordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
 matchWords();
  }
});

buttonStart.addEventListener('click', () => {
  showGame();
  generateWord()
})

buttonMedium.addEventListener('click', () => {
  showGame();
  generateSentence()
})

buttonAbout.addEventListener('click', () => {
  showAbout();
})

buttonMenu.addEventListener('click', () => {
  showMenu();
})


// function removeWord () {
//   fallingWords.textContent= ""
//   inputWord.value = ""
// }

// function addWordToHtml () {
//   generateWord();
//   console.log(randomElement)
// }

