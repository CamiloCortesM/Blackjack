import {
  accumulatePoints,
  createCard,
  createDeck,
  orderCard,
  turnComputer,
} from "./usecases";

let deck = [];
const types = ["C", "D", "H", "S"],
  specials = ["A", "J", "Q", "K"];

let pointsPlayers = [];

//references of HTML

const btnOrder = document.querySelector("#btnOrder"),
  btnStop = document.querySelector("#btnStop"),
  btnNew = document.querySelector("#btnNew");

const divCardPlayers = document.querySelectorAll(".divCards"),
  score = document.querySelectorAll("small");

const initGame = (numPlayers = 2) => {
  deck = createDeck(types, specials);

  pointsPlayers = [];
  for (let i = 0; i < numPlayers; i++) {
    pointsPlayers.push(0);
  }

  score.forEach((elem) => (elem.innerText = 0));
  divCardPlayers.forEach((elem) => (elem.innerHTML = ""));
  btnStop.disabled = false;
  btnOrder.disabled = false;
};

//Events

btnOrder.addEventListener("click", () => {
  const card = orderCard(deck);
  const pointsPlayer = accumulatePoints(card, 0, pointsPlayers, score);
  createCard(card, 0, divCardPlayers);

  if (pointsPlayer > 21) {
    btnStop.disabled = true;
    btnOrder.disabled = true;
    turnComputer(pointsPlayers, score, divCardPlayers, deck);
  } else if (pointsPlayer === 21) {
    console.warn("21, amazing!");
    btnStop.disabled = true;
    btnOrder.disabled = true;
    turnComputer(pointsPlayers, score, divCardPlayers, deck);
  }
});

btnStop.addEventListener("click", () => {
  btnStop.disabled = true;
  btnOrder.disabled = true;
  turnComputer(pointsPlayers, score, divCardPlayers, deck);
});

btnNew.addEventListener("click", () => {
  initGame();
});
