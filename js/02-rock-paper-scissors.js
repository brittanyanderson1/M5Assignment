const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) //or you can use Math.random() * 3 + 1 and Math.floor enables rounding down
console.log(randomNumber)

if (randomNumber === 0) {
    computerChoice = 'Rock'
}
if (randomNumber === 1) {
    computerChoice = 'Scissors'
}
if (randomNumber === 2) {
    computerChoice = 'Paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
if (computerChoice === userChoice) {
    result = "it's a tie!"
}
if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = "Your the Winner!"
}
if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = "Sorry, you lose!"
}
if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = "Sorry, you lose!"
}
if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = "Your the Winner!"
}
if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = "Your the Winner!"
}
if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = "Sorry, you lose!"
}
resultDisplay.innerHTML = result
} 