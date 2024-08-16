import Storage from './storage';

const Fetch = (function () {
  return {
    get projects() {
      console.log(Storage.projects);
      return Storage.projects;
    },
    get todos() {
      return Storage.todos;
    },
    getProjectTodos: function (id) {
      console.log(todos);
      // return todos.filter((todo) => {
      //   return todo.projectId == id;
      // });
    },
    getProject: function (id) {
      // return this.projects.filter((project) => {
      //   return project.id == id;
      // })[0];
    },
    getTodo: function (id) {
      // return todos.filter((todo) => {
      //   return todo.id == id;
      // })[0];
    },
  };
})();

export default Fetch;
