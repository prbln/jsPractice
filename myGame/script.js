'use strict';
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const resetBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

let totalScorePlayer1 = document.getElementById('current--0');
let totalScorePlayer2 = document.getElementById('current--1');
let activePlayer = player1.classList.contains('player--active')
  ? player1
  : player2;

// starting condition :-
// scores set to 0
const setStartingCondition = () => {
  score1.textContent = 0;
  score2.textContent = 0;
  dice.classList.add('hidden');
  totalScorePlayer1.textContent = 0;
  totalScorePlayer2.textContent = 0;
  player2.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  activePlayer = player1;
  rollDiceBtn.disabled = false;
};

const switchPlayer = () => {
  console.log('hold', activePlayer == player1);
  if (activePlayer === player1) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    activePlayer = player2;
    score1.textContent = 0;
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer = player1;
    score2.textContent = 0;
  }
};
const closemodal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

function gameOver() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  rollDiceBtn.disabled = true;
  document.addEventListener('keydown', closemodal);
}
const onRoll = () => {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${diceRoll}.png`;
  dice.classList.remove('hidden');
  diceRoll === 1
    ? switchPlayer(activePlayer)
    : addScore(activePlayer, diceRoll);
};

function addScore(currPlayer, value) {
  console.log(currPlayer === player1);
  if (currPlayer === player1) {
    score1.textContent = Number(score1.textContent) + value;
    totalScorePlayer1.textContent =
      Number(totalScorePlayer1.textContent) + Number(score1.textContent);
    if (Number(totalScorePlayer1.textContent) >= 100) {
      modal.textContent = '🥳   Player 1 wins!   🥳';
      gameOver();
    }
  } else {
    score2.textContent = Number(score1.textContent) + value;
    totalScorePlayer2.textContent =
      Number(totalScorePlayer2.textContent) + Number(score2.textContent);
    if (Number(totalScorePlayer2.textContent) >= 100) {
      modal.textContent = '🥳   Player 2 wins!   🥳';
      gameOver();
    }
  }
}

setStartingCondition();
rollDiceBtn.addEventListener('click', onRoll);
holdBtn.addEventListener('click', switchPlayer);
resetBtn.addEventListener('click', setStartingCondition);
