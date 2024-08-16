import './styles.css';
import { format } from 'date-fns';
import DOM from './dom.js';
import Fetch from './fetch.js';
import Storage from './storage.js';

// DOM.loadSidebar();
// DOM.loadProject(1);
const data = new Storage();
console.log(data);

const date = new Date();

const dataEl = document.querySelector('.date');
dataEl.textContent = format(date, 'eeee, dd MMMM yyyy');
