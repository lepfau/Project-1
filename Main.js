let fallingWords = document.getElementById('fallingWords')
let wordInput = document.getElementById('word-input')

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
  'definition'
];

const animClasses = [
  'falling-middle',
  'falling-far-left',
  'falling-far-right'
];

function generateWord () {
  const randomElement = wordsList[Math.floor(Math.random() * wordsList.length)];
  const randomAnimation = animClasses [Math.floor(Math.random() * animClasses.length)];
  fallingWords.innerHTML = `<h2 class="falling-middle">${randomElement}</h2>`
}


function matchWords() {
  if (wordInput.value === fallingWords.querySelector(".falling-middle").textContent) {
    console.log('Correct!!!');
    generateWord()
    wordInput.value = ""
  } 
  
  else {
    wordInput.value = ""
    console.log("Wrong")
  }
}


wordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
 matchWords()
  }
});


generateWord()


// function removeWord () {
//   fallingWords.textContent= ""
//   inputWord.value = ""
// }


 








// function addWordToHtml () {
//   generateWord();
//   console.log(randomElement)
// }

