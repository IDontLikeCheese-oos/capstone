const colors = ["Red", "Blue", "Green", "Yellow"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let deck = []; // Forms the main deck of card
let playerHand = []; //cards in player hand
let cpuHand = []; //cards in cpu hand

let currentCard = null; //checks current card
let isPlayerTurn = true; //checks if players turn
let gameOver = false; //checks if game is over

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

//shows cards
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

     showCards():

     if (winCheck()) return;

     isPlayerTurn = false;
     setTimeout(cpuTurn, 15);

  } else {
    alert("that card isn't playable");
  }
}


//cpu turn
function cpuTurn() {
  
  if (gameOver) return;

  let played = false;

  for (let i = 0; i <cpuHand.length; i++) {

    let card = cpuHand[i];

    if (
      card.color === currentCard.color
      card.value === currentCard.value
      card.color === "wild"
    ) {

      cpuHand.splice(i, 1);
      currentCard = card;

      document.getElementById("discardPile").innerHTML =
      currentCard.color + " " + currentCard.value;

      played = true;
      break;
    }
  }

  if (!played) {
    cpuHand.push(deck.pop());
  }

  showCards();

  if (winCheck());

  isPlayerTurn = true;
}