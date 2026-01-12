    function test(){
    console.log(document.querySelector('.js-button').classList.contains('js-button'))
    }

    function changeGamingButton(){
      const gamingButtonElem = document.querySelector('.js-gaming-button');

      if(gamingButtonElem.classList.contains('change-button-toggled')){
        gamingButtonElem.classList.remove('change-button-toggled')
      }
      else{
        gamingButtonElem.classList.add('change-button-toggled');
      }
    }

    function changeMusicButton(){
      const musicButtonElem = document.querySelector('.js-music-button');

      if(musicButtonElem.classList.contains('change-button-toggled')){
        musicButtonElem.classList.remove('change-button-toggled')
      }
      else{
        musicButtonElem.classList.add('change-button-toggled');
      }
    }

    function changeTechButton(){
      const techButtonElem = document.querySelector('.js-tech-button');

      if(techButtonElem.classList.contains('change-button-toggled')){
        techButtonElem.classList.remove('change-button-toggled')
      }
      else{
        techButtonElem.classList.add('change-button-toggled');
      }
    }
      
    