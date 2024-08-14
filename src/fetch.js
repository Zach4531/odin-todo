import Storage from './storage';

const Fetch = (function () {
  const data = Storage.getLocalStorage('Projects');
  return {
    getData: function () {
      return data;
    },
    addItem: function () {
      data.push({id: 6, title: 'Project6'});
    },
  };
})();

export default Fetch;

// export default class Fetch {
//   constructor() {
//     this.projects = Storage.getLocalStorage('Projects');
//     this.todos = Storage.getLocalStorage('Todos');
//   }

//   static get projects() {
//     return this.projectss;
//   }
//   static getAllProjects() {
//     return Storage.getLocalStorage('Projects');
//   }
//   static getAllTodos() {
//     return Storage.getLocalStorage('Todos');
//   }

//   static getProjectTodos(id) {
//     return this.getAllTodos().filter((todo) => {
//       return todo.projectId === id;
//     });
//   }

//   static getProject(id) {
//     return this.getAllProjects().filter((project) => {
//       return project.id === id;
//     })[0];
//   }
//   static getTodo(id) {
//     return this.getAllTodos().filter((todo) => {
//       return todo.id === id;
//     })[0];
//   }
// }
