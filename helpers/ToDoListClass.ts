import { IErrorMsg } from 'interfaces/ErrorMsg';
import { IToDoList } from 'interfaces/ToDoList';
import uniqid from 'uniqid';

const db = [];

export class ToDoList {
  addNewItem(title: string): IToDoList | IErrorMsg {
    if (title.length < 1)
      return { statusCode: 500, msg: 'give me a name of the task' };
    return {
      id: '1',
      title,
      isDone: false,
    };
  }
}
