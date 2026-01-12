//retrieve score from local storage
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties:0
      };

    //display initial score  
    displayScoreElement();

    //function for resetting score
    function resetScore(){
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;

      //deleting data from local storage
      localStorage.removeItem('score');

      //display score after reset
      displayScoreElement();
    }

    
    function playGame(userMove){

      //computer picks move
      function pickComputerMove(){

        let randomNumber=Math.random();
        let computerMove='';

        if(randomNumber>=0 && randomNumber<1/3){
          computerMove='Rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3)
        {
          computerMove='Paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
          computerMove='Scissor'
        }

        //display user and computermove
        displayChoiceElement(userMove,computerMove);

        return computerMove;
      }

      //calculate result based on usermove
      const computerMove = pickComputerMove();
      let result='';
      if(userMove === 'Rock'){
        if(computerMove === 'Rock' ){
        result='Tie';
        }
        else if(computerMove === 'Paper'){
          result='You Lose';
        }
        else if (computerMove === 'Scissor'){
          result='You Win';
        }
      }

      if(userMove === 'Paper'){
        if(computerMove === 'Rock' ){
          result='You Win';
        }
        else if(computerMove === 'Paper'){
          result='Tie';
        }
        else if (computerMove === 'Scissor'){
          result='You Lose';
        }
      }
      if(userMove === 'Scissor'){
        if(computerMove === 'Rock'){
        result='You Lose';
        }
        else if(computerMove === 'Paper'){
          result='You Win';
        }
        else if (computerMove === 'Scissor'){
          result='Tie';
        }
      }

      //display result
      displayResultElement(result);

      //update score
      if(result === 'You Win'){
        score.wins += 1;
      }
      else if(result === 'You Lose'){
        score.losses += 1 ;
      }
      else if (result === 'Tie'){
        score.ties += 1;
      }

      //storing updated score in local storage
      localStorage.setItem('score',JSON.stringify(score));

      //display the updated score
      displayScoreElement();
        }

    //function to display score
    function displayScoreElement(){
      document.querySelector('.js-score-display').
        innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    }

    //function to display result
    function displayResultElement(result){
      document.querySelector('.js-result-display').innerHTML = result;
    }

    //function to display userchoice
    function displayChoiceElement(userMove, computerMove){
      document.querySelector('.js-choice-display')
        .innerHTML = `You <img src="rps images/${userMove}.png" class="choice-image"> <img src="rps images/${computerMove}.png" class="choice-image"> Computer`;
    }