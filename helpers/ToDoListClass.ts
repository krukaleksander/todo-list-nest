import { IErrorMsg } from 'interfaces/ErrorMsg';
import { IToDoItem } from 'interfaces/ToDoList';

let db: IToDoItem[] = [];
export class ToDoList {
  itemWasDone(id: string) {
    db = db.map((task) => {
      const { id, title } = task;
      if (task.id === id) return { id, title, isDone: true };
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
      id: '1',
      title,
      isDone: false,
    };
    db.push(newTask);
    return this;
  }
}
