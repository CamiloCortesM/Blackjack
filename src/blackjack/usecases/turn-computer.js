import { accumulatePoints } from "./acumulate-points";
import { createCard } from "./create-card";
import { orderCard } from "./order-card";

const winner = document.querySelector(".winner--text"),
  descripWinner = document.querySelector(".description__winner");

const determineWinner = (pointsPlayers) => {
  const [minimumPoints, pointsComputer] = pointsPlayers;
  setTimeout(() => {
    (pointsComputer > minimumPoints && pointsComputer <= 21) ||
    minimumPoints > 21
      ? ((winner.innerText = "Computer"),
        descripWinner.classList.add("lose"),
        (descripWinner.innerText = "You Lose"))
      : (minimumPoints > pointsComputer && minimumPoints <= 21) ||
        pointsComputer > 21
      ? (winner.innerText = "Player",
      descripWinner.classList.add("win"),
      (descripWinner.innerText = "You Win"))
      : (winner.innerText = "Draw",
      descripWinner.classList.add("draw"),
      (descripWinner.innerText = "no body won"));
  }, 100);
};
//turn of machine

/**
 *
 * @param {Number} minimumPoints
 * @param {Array<Number>} pointsPlayers
 * @param {Object} score
 * @param {Object} divCardPlayers
 * @param {Array<String>} deck
 */
export const turnComputer = (pointsPlayers, score, divCardPlayers, deck) => {
  const minimumPoints = pointsPlayers[0];
  if (!minimumPoints) throw new Error("minimunPoints is neccesary");
  if (!deck) throw new Error("deck is neccesary");
  do {
    const card = orderCard(deck);
    accumulatePoints(card, pointsPlayers.length - 1, pointsPlayers, score);
    createCard(card, pointsPlayers.length - 1, divCardPlayers);
  } while (
    pointsPlayers[pointsPlayers.length - 1] < minimumPoints &&
    minimumPoints <= 21
  );
  determineWinner(pointsPlayers);
};
