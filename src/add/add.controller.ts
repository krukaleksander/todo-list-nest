import { Controller, Get } from '@nestjs/common';
import { AddService } from './add.service';
import { IToDoItem } from '../../interfaces/ToDoList';

@Controller('/add')
export class AppController {
  constructor(private readonly addService: AddService) {}

  @Get('/')
  addToDb(): IToDoItem {
    return this.addService.addToDb();
  }
}
