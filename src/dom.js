import Fetch from './fetch';
import Storage from './storage';

export default class DOM {
  static createElement(type, content = null, classes = null) {
    const element = document.createElement(type);
    element.textContent = content;
    if (classes) {
      element.classList.add(...classes);
    }
    return element;
  }

  static createButton(text, icon = null) {
    const button = DOM.createElement('button', text, ['btn']);
    if (icon) {
      const iconEl = DOM.createElement('i', '', ['fas', `fa-${icon}`]);
      button.appendChild(iconEl);
    }

    return button;
  }

  static createTodo({ title, id }) {
    const container = DOM.createElement('div', '', ['todo-item']);

    const deleteBtn = DOM.createButton('Delete', 'trash');
    deleteBtn.addEventListener('click', () => {
      Storage.deleteTodo(id);
    });
    const editBtn = DOM.createButton('Edit', 'edit');
    editBtn.addEventListener('click', () => {
      alert('editied');
    });

    container.appendChild(deleteBtn);
    container.appendChild(editBtn);

    return container;
  }

  static init() {
    this.loadSidebar();
    this.loadProject(Fetch.projects[0]['id']);
  }

  static loadProject(id) {
    const project = Fetch.getProject(parseInt(id));
    const todos = Fetch.getProjectTodos(id);

    const title = document.querySelector('.project-title');
    title.textContent = '';
    const titleHeading = DOM.createElement('h3', project?.title || '');
    const editTitleBtn = DOM.createButton('Add Task', 'plus');

    title.appendChild(titleHeading);
    title.appendChild(editTitleBtn);

    const todoList = document.querySelector('.todolist');

    todoList.textContent = '';

    todos?.forEach((todo) => {
      const element = this.createTodo(todo);
      todoList.appendChild(element);
    });
  }

  static loadSidebar() {
    const sidebar = document.querySelector('.sidebar-nav');
    const projects = Fetch.projects;

    sidebar.textContent = '';

    projects?.forEach(({ id, title }) => {
      this.addSidebarItem({ id: id, title: title });
    });
  }

  static addSidebarItem({ id, title }) {
    const sidebarNav = document.querySelector('.sidebar-nav');
    const button = DOM.createButton(title);
    const icon = DOM.createElement('i', '', ['fa', 'fa-trash']);

    button.addEventListener('click', (e) => {
      this.loadProject(parseInt(id));
    });

    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      Storage.deleteProject(id);
    });

    button.appendChild(icon);
    sidebarNav.appendChild(button);
  }
}
