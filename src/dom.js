import Fetch from './fetch';

export default class DOM {
  static createElement(type, content) {
    const element = document.createElement(type);
    element.textContent = content;
    return element;
  }

  static loadProject(id) {}
}
