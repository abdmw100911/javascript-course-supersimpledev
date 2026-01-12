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