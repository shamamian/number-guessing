const guessButton = document.querySelector('.wrapper-form__button')
const guessInput = document.querySelector('.wrapper-form__input')
const numberOfGuessed = document.querySelector('.numberOfGuessed')
const guessedNumbersList = document.querySelector('.guessedNumbersList')
const hint = document.querySelector('.hint')
let num = parseInt(Math.random()*100)
let guessedNumbers = []

guessButton.onclick = function(){
    if(guessInput.value < 0 || guessInput.value > 100){
        alert('please enter a number between 1-100')
    } else {
        guessedNumbers.push(+guessInput.value)
        if(guessInput.value != num){
            if (guessInput.value < num){
              hint.innerHTML = 'Your guess is to low'
            } else {
              hint.innerHTML = 'Your guess is to high'
            }
            numberOfGuessed.innerHTML = `No. Of Guesses: ${guessedNumbers.length}`
            guessedNumbersList.innerHTML = `Guessed Numbers are: ${guessedNumbers.join(',')}`
          } else {
            hint.innerHTML = 'Yipple You Win !!'
            numberOfGuessed.innerHTML = `The Number Was ${num}`
            guessedNumbersList.innerHTML = `You Guessed It in ${guessedNumbers.length} guesses`
          }
    }
    guessInput.value = ''
}