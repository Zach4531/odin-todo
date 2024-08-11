import './styles.css';
import Todo from './todo.js';
import Project from './project.js';

import Fetch from './fetch.js';
import DOM from './dom.js';

const mainContainer = document.querySelector('#content');

const projects = Fetch.getProject(1);

const title = DOM.createElement('h2', projects.title);
mainContainer.appendChild(title);
