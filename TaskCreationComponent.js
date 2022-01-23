import { pendingTaskComponent } from './PendingTaskComponent.js';

var TaskCreationComponent = {
  name: 'TaskCreationComponent',
  taskName: '',
  taskTitleInput: null,
};

var Task = function (id, name, state) {
  this.id = id;
  this.name = name;
  this.state = state;
};

var init = function () {
  console.log('Initializing component: ', TaskCreationComponent.name);
};

var bindData = function () {
  console.log('Binding Data');
  var clearBtn = document.querySelector('#tcc-clear');
  var saveBtn = document.querySelector('#tcc-save');
  TaskCreationComponent.taskTitleInput =
    document.querySelector('#tcc-task-title');

  clearBtn.addEventListener('click', onClear);
  saveBtn.addEventListener('click', onSave);
};

var onClear = function (event) {
  console.log('Clear Data: ', event);
  TaskCreationComponent.taskTitleInput.value = '';
};

var onSave = function (event) {
  console.log('Save Data: ', event);

  var id = new Date().getTime();
  var state = 'PENDING';
  var name = TaskCreationComponent.taskTitleInput.value;
  var task = new Task(id, name, state);
  console.log('Task: ', task);
  pendingTaskComponent.addTask(task);
  onClear(event);
};

export var taskCreationComponent = {
  ...TaskCreationComponent,
  init: init,
  bindData: bindData,
};
