import Fetch from './fetch';

export default class DOM {
  static createElement(type, content = null, classes = null) {
    const element = document.createElement(type);
    element.textContent = content;
    element.classList.add(classes);
    return element;
  }

  static init() {
    this.loadSidebar();
    this.loadProject(Fetch.projects[0]['id']);
  }

  static loadProject(id) {
    const project = Fetch.getProject(id);
    const todos = Fetch.getProjectTodos(id);

    console.log(todos);

    const title = document.querySelector('.project-title');
    const todoList = document.querySelector('.todolist');

    title.textContent = project?.title || '';
    todoList.textContent = '';

    todos?.forEach(({ title }) => {
      const element = DOM.createElement('h3', title);
      todoList.appendChild(element);
    });
  }

  static loadSidebar() {
    const projects = Fetch.projects;
    projects?.forEach(({ id, title }) => {
      this.addSidebarItem({ id: id, title: title });
    });
  }

  static addSidebarItem({ id, title }) {
    const sidebarNav = document.querySelector('.sidebar-nav');
    const button = DOM.createElement('button', title, 'btn');
    button.dataset.id = id;
    button.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      this.loadProject(parseInt(id));
    });
    sidebarNav.appendChild(button);
  }
}
