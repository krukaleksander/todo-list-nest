import { ToDoList } from '../helpers/ToDoListClass';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe.skip('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('ToDoList', () => {
    describe('addNewItem method', () => {
      it('return {id: "1", title: "do the task", isDone: false} when "do the task" is passed', () => {
        const MyTaskList = new ToDoList();
        expect(MyTaskList.addNewItem('do the task')).toEqual({
          id: '1',
          title: 'do the task',
          isDone: false,
        });
      });
      it('return {statusCode: 500, msg: "give me a name of the task"} when empty string passed', () => {
        const MyTaskList = new ToDoList();
        expect(MyTaskList.addNewItem('')).toEqual({
          statusCode: 500,
          msg: 'give me a name of the task',
        });
      });
    });
    describe('showTask msethod', () => {
      it('show list of tasks', () => {
        const MyTaskList = new ToDoList();
        MyTaskList.addNewItem('do the task');
        expect(MyTaskList.showTaskList()).toEqual([
          {
            id: '1',
            title: 'do the task',
            isDone: false,
          },
        ]);
      });
    });
    describe('itemWasDone method', () => {
      it('returns appropriate list of object with isDone set to true', () => {
        const MyTaskList = new ToDoList();
        MyTaskList.addNewItem('do the task');
        MyTaskList.itemWasDone('1');
        expect(MyTaskList.showTaskList()).toEqual([
          {
            id: '1',
            title: 'do the task',
            isDone: true,
          },
        ]);
      });
    });
  });
});
