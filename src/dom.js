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

  static createTodo({ title, id }) {
    const container = DOM.createElement('div');
    container.classList.add('todo-item');

    const deleteBtn = DOM.createElement('button', 'Delete');
    deleteBtn.addEventListener('click', () => {
      Storage.deleteTodo(id);
    });
    const editBtn = DOM.createElement('button', 'Edit');
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
    const editTitleBtn = DOM.createElement('i', '', ['fas', 'fa-edit']);
    const addTask = DOM.createElement('button', 'Add Task', ['btn']);

    title.appendChild(titleHeading);
    title.appendChild(editTitleBtn);
    title.appendChild(addTask);

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
    const button = DOM.createElement('button', title, ['btn']);
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
