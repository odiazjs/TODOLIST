var PendingTaskComponent = {
  name: 'PendingTaskComponent',
  title: 'Pending Tasks',
  tasks: [],
};

var init = function () {
  console.log('Initializing component: ', PendingTaskComponent.name);
};

var bindData = function () {
  console.log('Binding Data');
  var parentPendingTaskTitleC = document.querySelector(
    '#pending-task-component'
  );
  var title = parentPendingTaskTitleC.querySelector(':scope > #ptc-title');
  title.innerHTML = PendingTaskComponent.title;
};

var getCheckboxes = function () {
  var pendingTasks = document.querySelectorAll('.pending-task');
  console.log(pendingTasks);
  pendingTasks.forEach((p) => {
    var checkBox = p.querySelector(':scope > span .ptc-change-state');
    var deleteBtn = p.querySelector(':scope > span .ptc-delete-task');

    checkBox.addEventListener('change', changeTaskState);
    deleteBtn.addEventListener('click', deleteTask);
  });
};

var deleteTask = function (event) {
  PendingTaskComponent.tasks = PendingTaskComponent.tasks.filter((t) => {
    var trimmedId = this.id.replace('ptc-delete-task-', '');
    return t.id != trimmedId;
  });

  renderTasks();
  getCheckboxes();
  console.log('deleteTask: ', PendingTaskComponent.tasks);
};

var changeTaskState = function (event) {
  PendingTaskComponent.tasks = PendingTaskComponent.tasks.map((t) => {
    var trimmedId = this.id.replace('ptc-change-state-', '');
    if (t.id == trimmedId) {
      t.state = this.checked ? 'Completed' : 'Pending';
    }
    return t;
  });
  console.log('changeTaskState: ', PendingTaskComponent.tasks);
};

var addTask = function (task) {
  PendingTaskComponent.tasks.push(task);
  console.log('Adding Task: ', PendingTaskComponent.tasks);

  renderTasks();
  getCheckboxes();
};

var renderTasks = function () {
  var pendingTaskClist = document.querySelector('#pending-task-component-list');
  pendingTaskClist.innerHTML = '';
  PendingTaskComponent.tasks.forEach((t) => {
    var pendingTask = `<div class="pending-task">
    ${t.name}
    <span>
      <input id="ptc-change-state-${t.id}" class="ptc-change-state" type="checkbox" />
      <button id="ptc-delete-task-${t.id}" class="ptc-delete-task" type="submit">Delete</button>
    </span>
  </div>`;
    pendingTaskClist.innerHTML += pendingTask;
  });
};
export var pendingTaskComponent = {
  ...PendingTaskComponent,
  init: init,
  bindData: bindData,
  addTask: addTask,
};
