import DOM from './dom';
import Parser from './parser';

const Storage = (function () {
  let storage = {
    projects: getLocalStorage('projects'),
    todos: getLocalStorage('todos'),
  };

  function getLocalStorage(key) {
    const local = localStorage.getItem(key);

    !local && localStorage.setItem(key, '');
    return !local ? [] : Parser.decodeJSON(local);
  }

  function store(key, value) {
    const data = storage[key];
    data.push(value);
    localStorage.setItem(key, Parser.encodeJSON(data));
  }

  function deleteTodo(id) {
    const data = storage['todos'];
    storage['todos'] = data.filter((item) => {
      return item.id != id;
    });
    // localStorage.setItem(key, Parser.encodeJSON(newData));
  }

  function deleteProject(id) {
    const projects = storage['projects'];
    const todos = storage['todos'];

    storage['projects'] = projects.filter((project) => {
      return project.id != id;
    });

    storage['todos'] = todos.filter((todo) => {
      return todo.projectId != id;
    });

    DOM.loadSidebar();
    if (storage['projects'].length > 0) {
      DOM.loadProject(storage['projects'][0]['id']);
    }
  }

  return {
    get projects() {
      return storage['projects'];
    },
    get todos() {
      return storage['todos'];
    },
    set addProject(project) {
      store('projects', project);
    },
    set addTodos(todo) {
      store('todos', todo);
    },
    deleteProject,
    deleteTodo,
  };
})();

export default Storage;

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
