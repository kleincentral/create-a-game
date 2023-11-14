const prompt = require('prompt-sync')();

let cash = 100;
let playerCount = 0;
let dealerCount = 0;

const bet = prompt('How much will you be betting');

let cards = ["ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2,
"ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2,
"ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2,
"ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2]

// let altnateDeck = {
//     ace: 4,
//     king: 4,
//     queen: 4,
//     jack: 4,
//     ten: 4,

// }

let playerHand = []

let isDoneOrBust = false
getRandomCard()

// while (isDoneOrBust !== true) {

// }


function getRandomCard(){
    let random = Math.floor(Math.random() * cards.length)
    let playercard = cards.splice(random, 1)[0]
    if (playercard === 'king' || playercard === 'queen' || playercard === 'jack') {
        playerCount += 10
    }
    else if (playercard === 'ace'){
        playerCount += 11
    }
    else {
        playerCount += playercard
    }
    playerHand.push(playercard)
}
console.log(playerCount)
console.log(playerHand)


// // like saying "hasGuessedCorrectly DOES NOT equal true"
// while (hasGuessedCorrectly !== true) {
//   clearScreen();
  
//   console.log(`You've made ${numberOfGuesses} guesses!`)

//   if (numberOfGuesses > 3) {
//     console.log('\tHint time! 🐬!')
//   }
  
//   const guess = prompt('What word do you think it is? ');
//   numberOfGuesses++;  

//   if (guess === 'dolphin') {
//     hasGuessedCorrectly = true;
//   }
// }

// clearScreen();
// console.log('Nice work! It was totally dolphin!');
// console.log(`And! It only took you ${numberOfGuesses} guesses!`);


// function clearScreen() {
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
// }