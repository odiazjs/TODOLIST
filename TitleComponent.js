var TitleComponent = {
  name: 'TitleComponent',
  title: 'To Do List',
};

var init = function () {
  console.log('Initializing component: ', TitleComponent.name);
};

var bindData = function () {
  console.log('Binding Data');
  var parentTitleC = document.querySelector('#title-component');
  var title = parentTitleC.querySelector(':scope > #tc-title');
  title.innerHTML = TitleComponent.title;
};

export var titleComponent = {
  ...TitleComponent,
  init: init,
  bindData: bindData,
};
