/**
 * 2C = Two of Clubs
 * 2D = Two of Diamints
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    // deck.push(i + "C");
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let sp of specials) {
      deck.push(sp + type);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);

  return deck;
};

createDeck();

const orderCard = () => {
  if (deck.length === 0) {
    throw "no cards in the deck";
  }
  return deck.pop();
};

console.log(orderCard());
