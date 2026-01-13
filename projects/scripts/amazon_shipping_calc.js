    function calculate(){
      const inputElement = document.querySelector('.js-input');

      //if input is < 0
      if(Number(inputElement.value) < 0){
        displayResultElement('error')
        return;
      }

      //converting to cents , to avoid float errors
      let inputCost = Math.round(Number(inputElement.value) * 100);
      
      //comparing as cents
      if(inputCost < 4000){
        inputCost += 1000
        //passing to display as dollars
        displayResultElement(inputCost / 100);
        
      }
      else{
        //passing to display as dollars
        displayResultElement(inputCost / 100);
    }
    }

    function displayResultElement(result){
      //display if cost < 0
      if(result === 'error'){
        document.querySelector('.js-result-display').classList.add('error-display');
        document.querySelector('.js-result-display').innerHTML = 'Error: cost cannot be less than $0';
      }
      //display if cost is normal
      else{
        document.querySelector('.js-result-display').classList.remove('error-display');
        document.querySelector('.js-result-display').innerHTML = `$ ${result}`;
      }
    }

    function handleKeydown(event){
      //output when 'Enter' is pressed
      if(event.key === 'Enter')
      calculate();
    }