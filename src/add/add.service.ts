import { Injectable } from '@nestjs/common';
import { IToDoItem } from '../../interfaces/ToDoList';
import { ToDoList } from '../../helpers/ToDoListClass';

@Injectable()
export class AddService {
  addToDb({ title }): IToDoItem[] {
    const myList = new ToDoList();
    myList.addNewItem(title);
    return myList.showTaskList();
  }
}
