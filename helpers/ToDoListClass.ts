import { IErrorMsg } from 'interfaces/ErrorMsg';
import { IToDoItem } from 'interfaces/ToDoList';

let db: IToDoItem[] = [];
export class ToDoList {
  index: number;
  constructor() {
    this.index = 0;
  }
  updateIndex() {
    this.index++;
    return this.index.toString();
  }
  removeTask(id: string) {
    db = db.filter((task) => task.id !== id);
  }
  editItem(id: string, newTitle: string) {
    if (newTitle.length < 1) {
      return { statusCode: 500, msg: 'give me a new name for a task' };
    }
    db = db.map((task) => {
      const { id, isDone } = task;
      if (task.id === id) return { id, title: newTitle, isDone };
      return task;
    });
    return this;
  }
  changeDoneStatus(id: string) {
    db = db.map((task) => {
      const { id, title, isDone } = task;
      if (task.id === id) return { id, title, isDone: !isDone };
      return task;
    });
    return this;
  }
  showTaskList(): IToDoItem[] {
    return db;
  }
  addNewItem(title: string) {
    if (title.length < 1)
      return { statusCode: 500, msg: 'give me a name of the task' };
    const newTask = {
      id: this.updateIndex(),
      title,
      isDone: false,
    };
    db.push(newTask);
    return this;
  }
}
