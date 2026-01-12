let calculation=localStorage.getItem('calculation') || ''; //global

    //initial display after page first loads
    displayCalculation()

    function stringGeneration(val){
      calculation += val;
      //update localstorage
      localStorage.setItem('calculation',calculation);
      displayCalculation()
    }
    function calculate(){
      calculation = eval(calculation);
      //update localstorage
      localStorage.setItem('calculation',calculation);
      displayCalculation()
    }
    function clearString(){
      calculation='';
      //empty the local storage
      localStorage.removeItem('calculation');
      displayCalculation()
    }
    function displayCalculation(){
      document.querySelector('.js-calculation').innerHTML = `${calculation}`;
    }

    //key functionality
    function handleKey(event){
      if(event.key === 'Enter'){
        calculate();
      }
      else if(event.key === 'Delete'){
        clearString();
      }
      else if(event.key === 'Backspace'){
        calculation = calculation.slice(0,-1);
        displayCalculation();
      }
      else if((event.key >= '0' && event.key <= '9') ||
              event.key === '.' ||
              event.key === '+' ||
              event.key === '-' ||
              event.key === '*' ||
              event.key === '/'){
        stringGeneration(event.key);
      }
    }