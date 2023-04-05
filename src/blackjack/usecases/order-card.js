/**
 * remove one card from the deck and return this card
 * @param {Array<String>} deck is array of deck
 * @returns {String} return a card from deck
 */
export const orderCard = (deck) => {
  if (deck.length === 0) {
    throw "no cards in the deck";
  }
  return deck.pop();
};
