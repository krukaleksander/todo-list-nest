import { Body, Controller, Get } from '@nestjs/common';
import { AddService } from './add.service';
import { IToDoItem } from '../../interfaces/ToDoList';
import { IRequest } from '../../interfaces/IRequest';

@Controller('/add')
export class AddController {
  constructor(private readonly addService: AddService) {}

  @Get('/')
  addToDb(@Body() body: IRequest): IToDoItem[] {
    return this.addService.addToDb(body);
  }
}
