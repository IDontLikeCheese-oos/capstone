const colors = ["Red", "Blue", "Green", "Yellow"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let deck = [];
let playerHand = [];
let cpuHand = [];

function createDeck() {
  deck = [];

  for (let color of colors) {
    for (let value of values)
