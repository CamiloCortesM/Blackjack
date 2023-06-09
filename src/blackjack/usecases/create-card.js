/**
 *
 * @param {String} card
 * @param {Number} turn
 * @param {NodeList} divCardPlayers
 */

export const createCard = (card, turn, divCardPlayers) => {
  const imgCard = document.createElement("img");
  imgCard.src = `./assets/cards/${card}.png`;
  imgCard.alt = "card";
  imgCard.classList.add("item_card","animate__animated","animate__fadeInDownBig");
  divCardPlayers[turn].append(imgCard);
};
