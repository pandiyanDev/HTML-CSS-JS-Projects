// DOM elements

document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('taskInput')
  const buttonElement = document.getElementById('addTask');
  const ulElement = document.getElementById('listItems');

  function addTask(taskInput) {
    if (!taskInput.trim()) return;

    const li = document.createElement('li');
    li.classList.add('task');

    const span = document.createElement('span')
    span.textContent = taskInput.trim();

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      li.remove();
    })

    li.appendChild(span);
    li.appendChild(deleteBtn);

    li.addEventListener('click', () => {
      li.classList.toggle('completed')
    });

    ulElement.appendChild(li);
  }

  buttonElement.addEventListener('click', () => {
    addTask(inputElement.value)
    inputElement.value = '';
  })

  inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTask(inputElement.value)
      inputElement.value = '';
    }
  })
})


// function addTask() {
//   const value = inputElement.value.trim();
//   const liElement = document.createElement('li');
//   const spanElement = document.createElement('span');
//   const deleteElement = document.createElement('button');
//   spanElement.textContent = value;
//   deleteElement.textContent = 'Delete';
//   deleteElement.classList.add('delete');
//   liElement.classList.add("task");

//   liElement.appendChild(spanElement)
//   liElement.appendChild(deleteElement)
//   ulElement.appendChild(liElement)
//   inputElement.textContent = "x";
// }




