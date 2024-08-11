import Parser from './parser';

export default class Storage {
  static getLocalStorage(key) {
    return !localStorage.getItem(key)
      ? []
      : Parser.decodeJSON(localStorage.getItem(key));
  }

  static store(key, value) {
    return localStorage.setItem(key, Parser.encodeJSON(value));
  }
}
