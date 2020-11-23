let words = document.getElementById('falling')
let inputWord = document.getElementById('word-input')

console.log(words.textContent)
console.log(inputWord.value)


function matchWords() {
    if (inputWord.value === words.textContent) {
      console.log('Correct!!!');
      words.remove()
      inputWord.value = ""
      
    } else {
      console.log("Wrong")
    }
  }

  inputWord.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
   matchWords()
    }
});



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


function generateWord (array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement
}

console.log(generateWord(wordsList))

  