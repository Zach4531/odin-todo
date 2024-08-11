export default class Project {
  constructor(title) {
    this.title = title;
    this.items = [];
  }
  updateTitle(title) {
    this.title = title;
  }
  addTodo(todo) {
    this.items.push(todo);
  }
}
