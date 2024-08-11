import './styles.css';
import Todo from './todo.js';
import Project from './project.js';

import Fetch from './fetch.js';
import Storage from './storage.js';
import Parser from './parser.js';

const mainContainer = document.querySelector('#content');

const fetcher = new Fetch();
const store = new Storage();
const parser = new Parser();
// console.log(fetcher.getProject(1).title);
console.log(fetcher.getAllProjects());
console.log(fetcher.getAllTodos());
console.log(fetcher.getProjectTodos(1));
console.log(store.getLocalStorage('Project'));
console.log(parser.encodeJSON(fetcher.getAllProjects()));
console.log(parser.decodeJSON(parser.encodeJSON(fetcher.getAllProjects()))[0].id);
