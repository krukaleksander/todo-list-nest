import { IToDoList } from 'interfaces/ToDoList';
import uniqid from 'uniqid';

const db = [];

class ToDoList {
  addNewItem(title: string): IToDoList {
    return {
      id: uniqid(),
      title,
      isDone: false,
    };
  }
}
