import { shuffle } from "underscore";

/**
 *this function create a new deck
 * @param {Array<String>} types Example: ["C", "D", "H", "S"]
 * @param {Array<String>} specials Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} return a new cards deck
 */
export const createDeck = (types, specials) => {
  if (!types || types.length===0) throw new Error("Types is required");
  if (!specials) throw new Error("specials is required");
  let deck = [];
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
  return shuffle(deck);
};
