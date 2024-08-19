import './styles.css';
import { format } from 'date-fns';
import DOM from './dom.js';

DOM.init();

const date = new Date();

const dataEl = document.querySelector('.date');
dataEl.textContent = format(date, 'eeee, dd MMMM yyyy');
