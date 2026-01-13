let todoList = [];

displayTodo();

function addTodo(){
  const inputElem = document.querySelector('.js-input');
  const todo = inputElem.value
  todoList.push(todo);

  //make text box empty after entering todo 
  inputElem.value = '';

  displayTodo();
}


function displayTodo(){
  let todoListHtml = '';
  for(let i=0;i<todoList.length;i++){
    //storing each todo from list 
    const todo = todoList[i];
    //creating a paragraph element for each todo
    //this is called generating html throigh javascript
    const html = `<p>${todo}</p>`;
    //updating the todoListHtml which will contain all todo with p element
    todoListHtml += html;
  }

  const displayElem = document.querySelector('.js-display');

  displayElem.innerHTML = todoListHtml;
}