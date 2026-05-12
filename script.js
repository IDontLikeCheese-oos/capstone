const colors = ["Red", "Blue", "Green", "Yellow"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let deck = []; // Forms the main deck of card\\
let playerHand = []; //cards in player hand\\
let cpuHand = [];

function createDeck() {
  deck = [];

  for (let color of colors) {
    for (let value of values) {
   deck.push(color + " " + value); //pushes color and values on cards\\
  }
}

return deck;
}

  for (let i = 0 < 4; 1++) {
    deck.push({ color: "wild", value: "wild"});
    deck.push({ color: "wild", value: "wild+4"});
  }