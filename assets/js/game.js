(() => {
  "use strict";

  let deck = [];
  const types = ["C", "D", "H", "S"];
  const specials = ["A", "J", "Q", "K"];

  let pointsPlayer = 0,
    pointsComputer = 0;

  //references of HTML

  const btnOrder = document.querySelector("#btnOrder");
  const btnStop = document.querySelector("#btnStop");
  const btnNew = document.querySelector("#btnNew");
  const score = document.querySelectorAll("small");
  const divCardsPlayer = document.querySelector("#player-cards");
  const divCardsComputer = document.querySelector("#computer-cards");

  const createDeck = () => {
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
    deck = _.shuffle(deck);

    return deck;
  };

  createDeck();

  const orderCard = () => {
    if (deck.length === 0) {
      throw "no cards in the deck";
    }
    return deck.pop();
  };

  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
  };

  //turn of machine
  const turnComputer = (minimumPoints) => {
    do {
      const card = orderCard();
      pointsComputer = pointsComputer + cardValue(card);
      score[1].innerText = pointsComputer;
      const imgCard = document.createElement("img");
      imgCard.src = `assets/cards/${card}.png`;
      imgCard.alt = "card";
      imgCard.classList.add("item_card");
      divCardsComputer.append(imgCard);
    } while (pointsComputer < minimumPoints && minimumPoints < 21);

    setTimeout(() => {
      alert(
        (pointsComputer > pointsPlayer && pointsComputer < 21) ||
          pointsPlayer > 21
          ? "You Lose"
          : (pointsPlayer > pointsComputer && pointsPlayer <= 21) ||
            pointsComputer > 21
          ? "You win"
          : "Nobody won"
      );
    }, 100);
  };

  //Events

  btnOrder.addEventListener("click", () => {
    const card = orderCard();
    pointsPlayer = pointsPlayer + cardValue(card);
    score[0].innerText = pointsPlayer;
    /* <img class="item_card" src="assets/cards/10D.png" alt="card" /> */

    const imgCard = document.createElement("img");
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.alt = "card";
    imgCard.classList.add("item_card");
    divCardsPlayer.append(imgCard);

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
    turnComputer(pointsPlayer);
  });

  btnNew.addEventListener("click", () => {
    pointsPlayer = 0;
    pointsComputer = 0;
    score[0].innerText = "0";
    score[1].innerText = "0";
    deck = [];
    createDeck();
    divCardsPlayer.innerHTML = "";
    divCardsComputer.innerHTML = "";
    btnStop.disabled = false;
    btnOrder.disabled = false;
  });
})();
