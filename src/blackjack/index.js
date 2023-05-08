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
  btnNew = document.querySelector("#btnNew"),
  btnOrderImage = document.querySelector("#btnOrderImage"),
  btnStopImage = document.querySelector("#btnStopImage");

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
  btnOrderImage.src = "/public/assets/img/plus-circle-svgrepo-com.svg";
  btnStopImage.src = "/public/assets/img/hand-svgrepo-com.svg";
  btnOrderImage.classList.remove("btn-disabled");
  btnStopImage.classList.remove("btn-disabled");
};

//Events

btnOrder.addEventListener("click", () => {
  const card = orderCard(deck);
  const pointsPlayer = accumulatePoints(card, 0, pointsPlayers, score);
  createCard(card, 0, divCardPlayers);

  if (pointsPlayer > 21) {
    turnPlayerEnd({ pointsPlayers, score, divCardPlayers, deck });
  } else if (pointsPlayer === 21) {
    console.warn("21, amazing!");
    turnPlayerEnd({ pointsPlayers, score, divCardPlayers, deck });
  }
});

btnStop.addEventListener("click", () => {
  turnPlayerEnd({ pointsPlayers, score, divCardPlayers, deck });
});

btnNew.addEventListener("click", () => {
  initGame();
});

const turnPlayerEnd = ({ pointsPlayers, score, divCardPlayers, deck }) => {
  console.log("hello");
  btnStop.disabled = true;
  btnOrder.disabled = true;
  btnOrderImage.src = "/public/assets/img/plus-disabled-circle-svgrepo-com.svg";
  btnStopImage.src = "/public/assets/img/hand-disabled-svgrepo-com.svg";
  btnOrderImage.classList.add("btn-disabled");
  btnStopImage.classList.add("btn-disabled");
  turnComputer(pointsPlayers, score, divCardPlayers, deck);
};
