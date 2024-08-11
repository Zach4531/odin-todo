import './styles.css';
import Todo from './todo.js';
import Project from './project.js';

import Fetch from './fetch.js';
import DOM from './dom.js';

const mainContainer = document.querySelector('#content');

const project = Fetch.getProject(1);
const todos = Fetch.getProjectTodos(project.id);
const title = DOM.createElement('h2', project.title);
mainContainer.appendChild(title);

todos.forEach((todo) => {
  const element = DOM.createElement('p', todo.title);
  mainContainer.appendChild(element);
});
