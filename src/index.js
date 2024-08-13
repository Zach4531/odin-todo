import './styles.css';
import Todo from './todo.js';
import Project from './project.js';

import { format } from 'date-fns';

import DOM from './dom.js';
import Fetch from './fetch.js';
import Parser from './parser.js';
import Storage from './storage.js';

DOM.loadProject(4);
DOM.loadSidebar();

const date = new Date();

const dataEl = document.querySelector('.date');
dataEl.textContent = format(date, 'eeee, dd MMMM yyyy');
