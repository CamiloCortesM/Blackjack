/**
 * 2C = Two of Clubs
 * 2D = Two of Diamints
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let pointsPlayer = 0,
  pointsComputer;

//references of HTML

const btnOrder = document.querySelector("#btnOrder");
const score = document.querySelectorAll("small");

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

  return deck;
};

createDeck();

const orderCard = () => {
  if (deck.length === 0) {
    throw "no cards in the deck";
  }
  return deck.pop();
};

const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};

//Events

btnOrder.addEventListener("click", () => {
  const card = orderCard();
  pointsPlayer = pointsPlayer + cardValue(card);
  score[0].innerText = pointsPlayer;
});
