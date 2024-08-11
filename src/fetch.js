import Storage from './storage';

export default class Fetch {
  static getAllProjects() {
    return Storage.getLocalStorage('Projects');
  }
  static getAllTodos() {
    return Storage.getLocalStorage('Todos');
  }

  static getProjectTodos(id) {
    return this.getAllTodos().filter((todo) => {
      return todo.projectId === id;
    });
  }

  static getProject(id) {
    return this.getAllProjects().filter((project) => {
      return project.id === id;
    })[0];
  }
  static getTodo(id) {
    return this.getAllTodos().filter((todo) => {
      return todo.id === id;
    })[0];
  }
}
