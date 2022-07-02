
// add array (cards)
let player = {
    name: "Hoss",
    chips: 1000
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    // change the text of the cardEl to the array value
    cardEl.textContent = "card: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if ( sum === 21) {
        message = "You've got a Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard() {
    // console.log("Drawing a new card from the deck!");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        startGame();
    }
}

// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " ";
// }


//* let cardss = [7, 3, 9];
//* for (let i = 0; i < cardss.length; i++) {
//*     console.log(cardss[i]);
//* }

// if (sum <= 20) {
//     message = "Do you want to draw a new card?";
// } else if ( sum === 21) {
//     message = "Woohoo! You've got a Blackjack!";
//     hasBlackjack = true;
// } else {
//     message = "You're out of the game!";
//     isAlive = false;
// }
// console.log(message);

// if (sum < 21) {
//     console.log("Do you want to drew a new card?");
// } else if (sum === 21) {
//     console.log("You win!");
// } else {
//     console.log("You lose!");
// }

// let age = 21;

// if (age <= 20) {
//     console.log("You are too young!");
// } else {
//     console.log("Welcome, You are old enough!");
// }

// let agee = 100;

// if (agee < 100) {
//     console.log("You're not eligible")
// } else if (agee === 100) {
//     console.log("Here's your birthday card from the king!");
// } else {
//     console.log("Not eligible you've already gotten one!");
// }

//? array 
// let devSkills = ["html", "CSS", "JavaScript", "Python"]

// let myBio = ["Hossam", 28, true];
// console.log(myBio);

//? for loop
// for ( let i = 10; i < 101; i += 10) {
//     console.log(i);
// }
//? Logical AND operator &&
