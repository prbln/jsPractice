const generateRandomValue = () => Math.floor(Math.random() * 20) + 1;
let randowmGuess = generateRandomValue();
const setMessageContent = value => {
  userScore.textContent = value;
};

const setDisplayMessage = text => {
  displayMessage.textContent = text;
};

const newHighScore = userPoints => {
  let highScore = document.querySelector('.highscore');
  if (userPoints > Number(highScore.textContent)) {
    highScore.textContent = userPoints;
  }
};
const onClickCheck = () => {
  userPoints = Number(userScore.textContent);
  if (randowmGuess > userGuess.value) {
    setDisplayMessage('Too Low');
    setMessageContent(userPoints - 1);
  } else if (randowmGuess < userGuess.value) {
    setDisplayMessage('Too High');
    setMessageContent(userPoints - 1);
  } else {
    setDisplayMessage(`That's right!`);
    newHighScore(userPoints);
    document.querySelector('.btn.check').disabled = true;
  }
};
const onClickAgain = () => {
  randowmGuess = generateRandomValue();
  console.log(randowmGuess);
  userScore.textContent = 20;
  setDisplayMessage('Start Guessing');
  userGuess.value = '';
  document.querySelector('.btn.check').disabled = false;
};

//Varibles
const userScore = document.querySelector('.score');
const userGuess = document.querySelector('.guess');
const displayMessage = document.querySelector('.message');

//buttons with event listneers
const checkButton = document.querySelector('.btn.check');
checkButton.addEventListener('click', onClickCheck);

const playAgainBtn = document.querySelector('.btn.again');
playAgainBtn.addEventListener('click', onClickAgain);
