import { Injectable } from '@nestjs/common';
import { IToDoItem } from '../../interfaces/ToDoList';
import { ToDoList } from '../../helpers/ToDoListClass';

@Injectable()
export class AddService {
  addToDb(): IToDoItem {
    const myList = new ToDoList();
    myList.addNewItem('do the task');
    const response = myList.showTaskList();
  }
}
