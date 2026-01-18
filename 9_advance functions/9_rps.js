// retrieve score from local storage
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// display initial score
displayScoreElement();

// function for resetting score
function resetScore(){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  // deleting data from local storage
  localStorage.removeItem('score');

  // display score after reset
  displayScoreElement();
}

function playGame(userMove){

  // computer randomly picks a move
  const computerMove = pickComputerMove();
  let result = '';

  // calculate result
  if(userMove === computerMove){
    result = 'Tie';
    score.ties++;
  }
  else if(
    (userMove === 'Rock' && computerMove === 'Scissor') ||
    (userMove === 'Paper' && computerMove === 'Rock') ||
    (userMove === 'Scissor' && computerMove === 'Paper')
  ){
    result = 'You Win';
    score.wins++;
  }
  else{
    result = 'You Lose';
    score.losses++;
  }

  // store updated score in local storage
  localStorage.setItem('score', JSON.stringify(score));

  // display result text
  displayResultElement(result);

  // display user and computer choices with animations
  displayChoiceElement(userMove, computerMove);

  // display updated score
  displayScoreElement();
}

// computer picks move
function pickComputerMove(){
  let randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }
  else{
    computerMove = 'Scissor';
  }

  return computerMove;
}

// function to display score
function displayScoreElement(){
  document.querySelector('.js-score-display').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// function to display result
function displayResultElement(result){
  document.querySelector('.js-result-display').innerHTML = result;
}

// function to display user and computer choices
function displayChoiceElement(userMove, computerMove){

  // check if user wins
  const userWins =
    (userMove === 'Rock' && computerMove === 'Scissor') ||
    (userMove === 'Paper' && computerMove === 'Rock') ||
    (userMove === 'Scissor' && computerMove === 'Paper');

  // check for tie
  const tie = userMove === computerMove;

  // insert images dynamically
  // winner gets a special class to trigger scale + shake animation
  document.querySelector('.js-choice-display').innerHTML = `
    You
    <img src="../projects/rps images/${userMove}.png"
         class="choice-image ${userWins ? 'user-winner' : 'user-choice'}">

    <img src="../projects/rps images/${computerMove}.png"
         class="choice-image ${(!userWins && !tie) ? 'computer-winner' : 'computer-choice'}">
    Computer
  `;
}

// auto play variables
let isAutoPlaying = false;
let intervalId;

// function to toggle auto play
function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      // play game automatically every 2 seconds
      playGame(pickComputerMove());
    }, 2000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
