let todoList = [];

displayTodo();

function addTodo(){
  //take name input
  const nameElem = document.querySelector('.js-name-input');
  const todoName = nameElem.value;

  //take date input
  const dueDateElem = document.querySelector('.js-date-input');
  const dueDate = dueDateElem.value;

  //create an object of name and duedate
  const todoObject = {
    //todoName:todoName,
    //dueDate:dueDate
    //shorthand syntax property
    todoName,
    dueDate
  };

  //push the object into the todoList array
  todoList.push(todoObject);

  //make text box empty after entering todo 
  nameElem.value = '';

  //display the todoList after adding
  displayTodo();
}



function displayTodo(){

  //reset the html inside div
  let todoListHtml = '';

  todoList.forEach((todoObject,i) => {
    const html = `
    <div>${todoObject.todoName}</div>

    <div>${todoObject.dueDate}</div>

    <button onclick="
    todoList.splice(${i},1);
    displayTodo();
    " class = "done-button">Done
    </button>
    `;
    todoListHtml += html;
  })

  /*
  //iterate through objects in the the todoList array
  for(let i=0;i<todoList.length;i++){

    //storing each todoObject from array 
    const todoObject = todoList[i];

    //creating a paragraph element for each todo
    //this is called generating html throigh javascript
    //displaying name and duedate from object
    const html = `
    <div>${todoObject.todoName}</div>

    <div>${todoObject.dueDate}</div>

    <button onclick="
    todoList.splice(${i},1);
    displayTodo();
    " class = "done-button">Done
    </button>

    `;
    //updating the todoListHtml which will contain all html content defined above
    todoListHtml += html;
  }*/

  const displayElem = document.querySelector('.js-display');

  displayElem.innerHTML = todoListHtml;
}