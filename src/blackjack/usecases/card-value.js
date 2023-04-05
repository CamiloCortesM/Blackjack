/**
 *this function calculates the value of the card
 * @param {String} card
 * @returns {number}
 */

export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};
