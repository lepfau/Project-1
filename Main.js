let fallingWords = document.getElementById('fallingWords')
let wordInput = document.getElementById('word-input')
let fallingSingleWord = document.getElementsByClassName("falling")
let buttonStart = document.querySelector("button")

let homePage = document.querySelector('.home')
let gamePage = document.querySelector('#game')


function showGame () {
  homePage.style.visibility = "hidden";
  gamePage.style.visibility = "visible";
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
  const randomSize = Math.floor(Math.random() * 4) + 1  
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




function removeWord () {
  fallingWords.textContent= ""
  inputWord.value = ""
}

// function addWordToHtml () {
//   generateWord();
//   console.log(randomElement)
// }

