import './styles.css';

const mainContainer = document.querySelector('#content');

const element = document.createElement('h1');
element.textContent = 'Hello';

mainContainer.appendChild(element);
