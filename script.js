let todoList = ['first','second','third'];
displayItems();



// add functionality 

function addtodo() {
  let inputElement = document.querySelector('#todo-input');  //selecting the input element 
  let todoItem = inputElement.value;  //targetting the value inside the input element and storing 
  todoList.push(todoItem);  //pusing the todo ask from input into the todoList 
  inputElement.value = ''; //clearing the input field after the input 

  displayItems();   //calling the display function for displaying 
}



function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = ''; // An empty string is created to hold the HTML that will be dynamically generated.

  for (let i = 0; i < todoList.length; i++) {


    newHtml += ` 
    <div class = "del-container">
     <span>${todoList[i]}</span>
     <button id="del-btn"onclick = " todoList.splice(${i},1);
     displayItems();">Delete</button>
    </div>
     `;
  }
  containerElement.innerHTML = newHtml;
  
}