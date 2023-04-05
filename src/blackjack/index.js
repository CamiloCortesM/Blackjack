import { cardValue, createDeck, orderCard } from "./usecases";

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

//turn: 0 = firts player and last number is the computer
const accumulatePoints = (card, turn) => {
  pointsPlayers[turn] = pointsPlayers[turn] + cardValue(card);
  score[turn].innerText = pointsPlayers[turn];
  return pointsPlayers[turn];
};

const createCard = (card, turn) => {
  const imgCard = document.createElement("img");
  imgCard.src = `assets/cards/${card}.png`;
  imgCard.alt = "card";
  imgCard.classList.add("item_card");
  divCardPlayers[turn].append(imgCard);
};

const determineWinner = () => {
  const [minimumPoints, pointsComputer] = pointsPlayers;
  setTimeout(() => {
    alert(
      (pointsComputer > minimumPoints && pointsComputer < 21) ||
        minimumPoints > 21
        ? "You Lose"
        : (minimumPoints > pointsComputer && minimumPoints <= 21) ||
          pointsComputer > 21
        ? "You win"
        : "Nobody won"
    );
  }, 100);
};

//turn of machine
const turnComputer = (minimumPoints) => {
  do {
    const card = orderCard(deck);
    accumulatePoints(card, pointsPlayers.length - 1);
    createCard(card, pointsPlayers.length - 1);
  } while (
    pointsPlayers[pointsPlayers.length - 1] < minimumPoints &&
    minimumPoints <= 21
  );
  determineWinner();
};

//Events

btnOrder.addEventListener("click", () => {
  const card = orderCard(deck);
  const pointsPlayer = accumulatePoints(card, 0);
  createCard(card, 0);

  if (pointsPlayer > 21) {
    btnStop.disabled = true;
    btnOrder.disabled = true;
    turnComputer(pointsPlayer);
  } else if (pointsPlayer === 21) {
    console.warn("21, amazing!");
    btnStop.disabled = true;
    btnOrder.disabled = true;
    turnComputer(pointsPlayer);
  }
});

btnStop.addEventListener("click", () => {
  btnStop.disabled = true;
  btnOrder.disabled = true;
  turnComputer(pointsPlayers[0]);
});

btnNew.addEventListener("click", () => {
  initGame();
});
