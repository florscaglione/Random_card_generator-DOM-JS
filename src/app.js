import "bootstrap";

import "./style.css";

let suits = ["spade", "diamond", "heart", "club"];
window.getCard = function getCard() {
  let card = document.querySelector(".card");
  for (let i = 0; i < suits.length; i++) {
    if (card.classList.contains(suits[i])) {
      card.classList.remove(suits[i]);
    }
  }
  card.classList.add(generateRandomSuit(suits));
  card.innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = suits => {
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
