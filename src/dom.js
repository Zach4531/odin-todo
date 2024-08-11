import Fetch from './fetch';

export default class DOM {
  static createElement(type, content = null, classes = null) {
    const element = document.createElement(type);
    element.textContent = content;
    element.classList.add(classes);
    return element;
  }

  static loadProject(id) {
    const project = Fetch.getProject(id);
    const todos = Fetch.getProjectTodos(id);

    const title = document.querySelector('.project-title');
    const todoList = document.querySelector('.todolist');

    title.textContent = project.title;
    todoList.textContent = '';

    todos.forEach(({ title }) => {
      const element = DOM.createElement('h3', title);
      todoList.appendChild(element);
    });
  }

  static loadSidebar() {
    const projects = Fetch.getAllProjects();
    const sidebarNav = document.querySelector('.sidebar-nav');

    projects.forEach(({ id, title }) => {
      const button = DOM.createElement('button', title, 'btn');
      button.dataset.id = id;
      button.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.loadProject(parseInt(id));
      });
      sidebarNav.appendChild(button);
    });
  }
}
