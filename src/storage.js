export default class Storage {
  getLocalStorage(localStorageName) {
    const localStorage = window.localStorage;
    if (!localStorage.getItem(localStorageName)) {
      localStorage.setItem(localStorageName, 'test');
    }
    return localStorage.getItem(localStorageName);
  }
  storeProject() {
    return;
  }
  storeTodo() {
    return;
  }
}
