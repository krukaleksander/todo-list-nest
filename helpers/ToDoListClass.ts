import { IToDoList } from 'interfaces/ToDoList';
import uniqid from 'uniqid';

const db = [];

export class ToDoList {
  addNewItem(title: string): IToDoList {
    return {
      id: '1',
      title,
      isDone: false,
    };
  }
}
