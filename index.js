// Import stylesheets
import './style.css';
import { titleComponent } from './TitleComponent.js';
import { taskCreationComponent } from './TaskCreationComponent.js';
import { pendingTaskComponent } from './PendingTaskComponent.js';

titleComponent.init();
titleComponent.bindData();

taskCreationComponent.init();
taskCreationComponent.bindData();

pendingTaskComponent.init();
pendingTaskComponent.bindData();
