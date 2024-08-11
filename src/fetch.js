export default class Fetch {
  getAllProjects() {
    return [
      {
        id: 1,
        title: 'Project1',
      },
      {
        id: 2,
        title: 'Project2',
      },
      {
        id: 3,
        title: 'Project3',
      },
    ];
  }
  getAllTodos() {
    return [
      {
        id: 1,
        projectId: 1,
        title: 'Todo1',
      },
      {
        id: 2,
        projectId: 1,
        title: 'Todo2',
      },
      {
        id: 3,
        projectId: 3,
        title: 'Todo3',
      },
    ];
  }

  getProjectTodos(id) {
    return this.getAllTodos().filter((todo) => {
      return todo.projectId === id;
    });
  }

  getProject(id) {
    return this.getAllProjects().filter((project) => {
      return project.id === id;
    })[0];
  }
  getTodo(id) {
    return this.getAllTodos().filter((todo) => {
      return todo.id === id;
    })[0];
  }
}
