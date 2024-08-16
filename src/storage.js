import Parser from './parser';
import DOM from './dom';

const Storage = function () {
  const projects = []
};

// export default class Storage {
//   constructor() {
//     this.projects = this.getLocalStorage('Projects');
//     this.todos = this.getLocalStorage('Todos');
//   }
//   static getLocalStorage(key) {
//     const local = localStorage.getItem(key);

//     !local && localStorage.setItem(key, '');
//     return !local ? [] : Parser.decodeJSON(local);
//   }

//   static store(key, value) {
//     let items = this.getLocalStorage(key);
//     items.push(value);
//     localStorage.setItem(key, Parser.encodeJSON(items));
//   }

//   static storeProject(value) {
//     this.store('Projects', value);
//     DOM.addSidebarItem(value);
//   }

//   static storeTodo(value) {
//     this.store('Todos', value);
//   }

//   get projects() {
//     return this.projects;
//   }

//   get todos() {
//     return this.todos;
//   }
// }
