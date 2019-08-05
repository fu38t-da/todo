let data;

document.getElementById('add').addEventListener('click', function() {
  let value = document.getElementById('task').value;
  addTask(value);
  console.log(data.task);
});

function addTask (value) {
  addTaskToDOM(value);
  document.getElementById('task').value = '';

  data.task.push(value);
  dataObjectUpdated();
}

function addTaskToDOM(text, isDone) {
  let list;
  if (isDone) {
    list = document.getElementById('done');
  } else {
    list = document.getElementById('not-yet');
  }

  let task = document.createElement('li');
  task.textContent = text;

  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

function doneTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  if (id !== 'not-yet') {
    return;
  }

  let value = task.textContent;

  let target = document.getElementById('done');
  target.insertBefore(task, target.childNodes[0]);
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
