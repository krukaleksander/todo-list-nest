import { IToDoItem } from 'interfaces/ToDoList';

export class ToDoList {
  index: number;
  private db: IToDoItem[];
  constructor() {
    this.index = 0;
    this.db = [];
  }
  updateIndex() {
    this.index++;
  }
  removeTask(id: string) {
    this.db = this.db.filter((task) => task.id !== id);
  }
  editItem(id: string, newTitle: string) {
    if (newTitle.length < 1) {
      return { statusCode: 500, msg: 'give me a new name for a task' };
    }
    this.db = this.db.map((task) => {
      const { id, isDone } = task;
      if (task.id === id) return { id, title: newTitle, isDone };
      return task;
    });
    return this;
  }
  changeDoneStatus(idOfElement: string) {
    this.db = this.db.map((task) => {
      const { id, title, isDone } = task;
      if (task.id === idOfElement) {
        return { id, title, isDone: !isDone };
      } else {
        return task;
      }
    });
  }
  showTaskList(): IToDoItem[] {
    return this.db;
  }
  addNewItem(title: string) {
    if (title.length < 1)
      return { statusCode: 500, msg: 'give me a name of the task' };
    this.updateIndex();
    const newTask = {
      id: this.index.toString(),
      title,
      isDone: false,
    };
    this.db.push(newTask);
    return this;
  }
  showDone(filter: boolean) {
    return this.db.filter((task) => task.isDone === filter);
  }
}
