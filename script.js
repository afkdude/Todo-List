// let todoList = ['first','second','third'];

// updating the string array into a array of object


let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '04/10/2023',
  },
  {
    item: 'Do homework',
    dueDate: '04/10/2023',
  },
  {
    item: 'Go to Gym',
    dueDate: '04/10/2023',
  }
];
displayItems();



// add functionality 

function addtodo() {
  let inputElement = document.querySelector('#todo-input');  //selecting the input element

  let dateElement = document.querySelector('#todo-date');  //date element

  let todoItem = inputElement.value;  //targetting the value inside the input element and storing 
  let todoDate = dateElement.value;

  // todoList.push(todoItem);  pusing the todo ask from input into the todoList

  todoList.push(
    {
      item: todoItem,
      dueDate: todoDate,
    }); //updated push statement according to object

  inputElement.value = ''; //clearing the input field after the input 
  dateElement.value = '';

  displayItems();   //calling the display function for displaying 
}



function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = ''; // An empty string is created to hold the HTML that will be dynamically generated.

  for (let i = 0; i < todoList.length; i++) {

    let { item, dueDate } = todoList[i]; //destructing 

    newHtml += ` 
    <div class = "del-container">
      
         <span>${item}</span>
         <span>${dueDate}</span>
         <button id="del-btn"onclick = " todoList.splice(${i},1);
           displayItems();">Delete</button>
      
    </div>
     `;
  }
  containerElement.innerHTML = newHtml;

}