import Storage from './storage';

const Fetch = (function () {
  return {
    get projects() {
      return Storage.projects;
    },
    get todos() {
      return Storage.todos;
    },
    getProjectTodos: function (id) {
      return Storage.todos.filter((todo) => {
        return todo.projectId == id;
      });
    },
    getProject: function (id) {
      return Storage.projects.filter((project) => {
        return project.id == id;
      })[0];
    },
    getTodo: function (id) {
      return Storage.todos.filter((todo) => {
        return todo.id == id;
      })[0];
    },
  };
})();

export default Fetch;
