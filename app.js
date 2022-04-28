
const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
// variable containing all the buttons
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {

    userChoice=e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice(){
     //La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x
     //La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ 
     //la variable randomNumber peut contenir soit 1,2 ou 3
    const randomNumber = Math.floor(Math.random()*3) + 1 
    if(randomNumber ===1){
        computerChoice='rock'
    }
    if(randomNumber ===2){
        computerChoice='paper'
    }
    if(randomNumber ===3){
        computerChoice='scissors'
    }
   computerChoiceDisplay.innerHTML=computerChoice
}
function generateResult(){
    if (computerChoice===userChoice){
        result='its a draw'
    }
    if (computerChoice==='rock' && userChoice==='paper'){
        result='you win '
    }
    if (computerChoice==='rock' && userChoice==='scissors'){
        result='you lost'
    }
    if (computerChoice==='paper' && userChoice==='scissors'){
        result='you win '
    }
    if (computerChoice==='paper' && userChoice==='rock'){
        result='you lost'
    }
    if (computerChoice==='scissors' && userChoice==='rock'){
        result='you win '
    }
    if (computerChoice==='scissors' && userChoice==='paper'){
        result='you win '
    }
    resultDisplay.innerHTML=result
    }