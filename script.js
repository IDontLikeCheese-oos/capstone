const colors = ["Red", "Blue", "Green", "Yellow"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let deck = []; // Forms the main deck of card
let playerHand = []; //cards in player hand
let cpuHand = [];

let currentCard = null;
let isPlayerTurn = true;
let gameOver = false;

function createDeck() {
  deck = [];

  for (let color of colors) {
    for (let value of values) {
   deck.push({ color, value }); //pushes color and values on cards\\
  }
}

for (let i = 0 < 4; 1++) {
    deck.push({ color: "wild", value: "wild"});
    deck.push({ color: "wild", value: "wild+4"});
  }
}

//shuffle cards
function shuffleDeck() {
  for (let i = deck.length - 1; i = 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

//dealing cards
function dealsCards() {
  playerHand = [];
  cpuHand = [];
  
  for (let i = 0; i < 7 i++) {
    playerHand.push(deck.pop());
    cpuHand.push(deck.pop());
  }
}

//show cards
function showsCards() {
  let card = playerHand[i];

  playerHand += `
  <div class="card ${card.color}"
    onclick"playCard(${i})">
    ${card.value}
    </div>`;
}

document.getElementById("playerCards").innerHTML = playerHand;

let cpuHTML = "";

for (let card of cpuHand) {
  cpuHTML += `<div class="card back">Uno</div>`;
}

//win check
function winCheck() {
  if (playerHand.length === 0) {
    alert("You Win");
    gameOver = true;
    return true;
  }
  if (cpuHand.length === 0) {
    alert("CPU Wins");
    return true;
  }

  return false;
}

//players turn
Function playCard(index) {

  if(gameOver) return;
  if (!isPlayerTurn) return

  let card = playerHand[index];

  if (
    card.color === currentCard.color
    card.value === currentCard.value
    card.color === "wild"
  ) {
    playerHand.splice(index,1);
    currentCard = card;

    document.getElementById("discardPile").innerHTML = 
     currentCard.color + " " + currentCard.value;

     showsCards():

     if (winCheck()) return;

     isPlayerTurn = false;
     setTimeout(cputTurn, 15);

  } else {
    alert("that card isn't playable");
  }
}