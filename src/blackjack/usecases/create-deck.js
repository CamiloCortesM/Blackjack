import { shuffle } from "underscore";

export const createDeck = (types, specials) => {
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
