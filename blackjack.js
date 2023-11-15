const prompt = require('prompt-sync')();

let cash = 100;

while (cash>0) {
    let playerCount = 0;
    let dealerCount = 0;

    console.log("You have", cash, "dollars")
    let validBet = false
    let bet = 0
    while(validBet !== true) {
        bet = prompt('How much will you be betting ');
        if (cash < bet || bet < 10){
            console.log("Thats not a valid bet. Must be at least 10, and not greater than your cash.")
        } else{
            validBet = true
        }
    }
    cash -= Number(bet)

    let cards = ["ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2,
    "ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2,
    "ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2,
    "ace", "king", "queen", "jack", 10,9,8,7,6,5,4,3,2]

    let playerHand = []
    let dealerHand = []

    let isDoneOrBust = false
    getRandomCard(true)
    getRandomCard(true)
    getRandomCard(false)
    getRandomCard(false)



    while (isDoneOrBust !== true) {
        playerCount = getTotalValue(playerHand)
        console.log("The dealer has one card turned up, which is a", dealerHand[0]);
        console.log("Your hand contains", playerHand);
        console.log("For a total of:", playerCount);
        if (playerCount === 21){
            if (playerHand.length === 2) {
                // 1.5x bet wins
                cash += bet*1.5
                break;
            }
            playDealerRound()
            break;
        } else if (playerCount > 21){
            winOrLose()
            break
        }

        let standOrHit = prompt('Are you standing or hitting: ');
        if (standOrHit === 'stand'){
            isDoneOrBust = true;
            playDealerRound()
        } else {
            getRandomCard(true);
        }
    }

    function playDealerRound() {
        let dealerDraws=false
        while (dealerDraws !== true){
            dealerCount = getTotalValue(dealerHand)
            if (dealerCount>=17){
                winOrLose()
                break;
            }
            getRandomCard(false);
        }
        console.log("dealer's hand", dealerHand)
    }

    function winOrLose() {
        if (playerCount > 21) {
            console.log("You overdrafted, dealer wins!")
        } else if (dealerCount > 21) {
            cash+=(bet*2)
            console.log("Dealer overdrafted, player wins!", cash)
        } else if (playerCount === dealerCount) {
            cash+=bet
            console.log("You and the dealer have tied!", cash)
        } else if ((21-playerCount) < (21-dealerCount)) {
            cash+=(bet*2)
            console.log("You are closer to 21 than the dealer is! You win!", cash)
        } else if ((21-dealerCount) < (21-playerCount)) {
            console.log("You are not closer to 21 than the dealer is, you lose!")
        }
    }

    function getTotalValue (hand) {
        let numOfAces = 0
        let total = 0
        for (let card of hand){
            if (card === 'king' || card === 'queen' || card === 'jack') {
                total += 10
            }
            else if (card === 'ace'){
                numOfAces += 1 
            }
            else {
                total += card
            }
        }
        if (numOfAces > 0){
            //this part takes any excess aces and ads them as 1s to the total
            total += numOfAces-1
            if (total + 11 > 21){
                total += 1;
            } else {
                total+=11
            }
        }
        return total
    }


    function getRandomCard(isPlayer){
        if (isPlayer) {
            let random = Math.floor(Math.random() * cards.length)
            let playercard = cards.splice(random, 1)[0]
            playerHand.push(playercard)
        }
        else{
            let random = Math.floor(Math.random() * cards.length)
            let dealercard = cards.splice(random, 1)[0]
            dealerHand.push(dealercard)
        }
    }
}

console.log("Better luck next time");


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