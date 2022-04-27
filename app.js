//we are going to be picking elements by their ids
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelector('button');
let userC;

possibleChoices.array.forEach( possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userC = e.target.id;
    userChoice.innerHTML= userC;
})
    
);