let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

displayScoreElement();

function resetScore(){
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  displayScoreElement();
}

function playGame(userMove){
  const computerMove = pickComputerMove();
  let result = '';

  if(userMove === computerMove){
    result = 'Tie';
    score.ties++;
  } else if(
    (userMove === 'Rock' && computerMove === 'Scissor') ||
    (userMove === 'Paper' && computerMove === 'Rock') ||
    (userMove === 'Scissor' && computerMove === 'Paper')
  ){
    result = 'You Win';
    score.wins++;
  } else {
    result = 'You Lose';
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  displayResultElement(result);
  displayChoiceElement(userMove, computerMove);
  displayScoreElement();
}

function pickComputerMove(){
  const r = Math.random();
  if(r < 1/3) return 'Rock';
  if(r < 2/3) return 'Paper';
  return 'Scissor';
}

function displayScoreElement(){
  document.querySelector('.js-score-display').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function displayResultElement(result){
  document.querySelector('.js-result-display').innerHTML = result;
}

function displayChoiceElement(userMove, computerMove){
  const userWins =
    (userMove === 'Rock' && computerMove === 'Scissor') ||
    (userMove === 'Paper' && computerMove === 'Rock') ||
    (userMove === 'Scissor' && computerMove === 'Paper');

  const tie = userMove === computerMove;

  document.querySelector('.js-choice-display').innerHTML = `
    You
    <img src="../projects/rps images/${userMove}.png"
         class="choice-image ${userWins ? 'user-winner' : 'user-choice'}">

    <img src="../projects/rps images/${computerMove}.png"
         class="choice-image ${(!userWins && !tie) ? 'computer-winner' : 'computer-choice'}">
    Computer
  `;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      playGame(pickComputerMove());
    }, 2000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
