import { cardValue } from "./card-value";

/**
 *
 * @param {String} card
 * @param {Number} turn
 * @param {Array<Number>} pointsPlayers
 * @param {NodeList} score
 * @returns {Number}
 */
export const accumulatePoints = (card, turn, pointsPlayers, score) => {
  pointsPlayers[turn] = pointsPlayers[turn] + cardValue(card);
  score[turn].innerText = pointsPlayers[turn];
  return pointsPlayers[turn];
};
