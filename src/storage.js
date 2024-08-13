import Parser from './parser';
import DOM from './dom';

export default class Storage {
  static getLocalStorage(key) {
    const local = localStorage.getItem(key);

    !local && localStorage.setItem(key, '');
    return !local ? [] : Parser.decodeJSON(local);
  }

  static store(key, value) {
    let items = this.getLocalStorage(key);
    items.push(value);
    localStorage.setItem(key, Parser.encodeJSON(items));
  }

  static storeProject(value) {
    this.store('Projects', value);
    DOM.addSidebarItem(value);
  }

  static storeTodo(value) {
    this.store('Todos', value);
  }

  // static storeProject(value) {

  //   this.getLocalStorage('Projects').push(value);

  //   return localStorage.setItem('Projects', Parser.encodeJSON(projects));
  // }

  // static storeTodo(id, value) {}
}
