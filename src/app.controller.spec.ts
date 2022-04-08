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
    console.log();
    describe('addNewItem method', () => {
      it('return {id: "1", title: "do the task", isDone: false} when "do the task" is passed', () => {
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
      it('return {statusCode: 500, msg: "give me a name of the task"} when empty string passed', () => {
        const MyTaskList = new ToDoList();
        expect(MyTaskList.addNewItem('')).toEqual({
          statusCode: 500,
          msg: 'give me a name of the task',
        });
      });
    });
    describe('showTask method', () => {
      it('show list of tasks', () => {
        const MyTaskList = new ToDoList();
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
        MyTaskList.changeDoneStatus('1');
        expect(MyTaskList.showTaskList()).toEqual([
          {
            id: '1',
            title: 'do the task',
            isDone: true,
          },
        ]);
      });
    });
    describe('doneIsNotDone method', () => {
      it('returns appropriate list of object with isDone set to false', () => {
        const myTaskList = new ToDoList();
        myTaskList.changeDoneStatus('1');

        expect(myTaskList.showTaskList()).toEqual([
          {
            id: '1',
            title: 'do the task',
            isDone: false,
          },
        ]);
      });
    });
    describe('editTask method', () => {
      it('returns appropriate list of object with editted task name', () => {
        const myTaskList = new ToDoList();
        myTaskList.editItem('1', 'do not do the task');
        expect(myTaskList.showTaskList()).toEqual([
          {
            id: '1',
            title: 'do not do the task',
            isDone: false,
          },
        ]);
      });
      it('returns error message where empty string is passed', () => {
        const myTaskList = new ToDoList();
        myTaskList.addNewItem('do the task');
        myTaskList.editItem('1', '');
        expect(myTaskList.editItem('1', '')).toEqual({
          statusCode: 500,
          msg: 'give me a new name for a task',
        });
      });
    });
    describe('removeTask method', () => {
      it('returns appropriate list of object without removed object', () => {
        const myTaskList = new ToDoList();
        myTaskList.addNewItem('do the task');
        myTaskList.removeTask('1');
        expect(myTaskList.showTaskList()).toEqual([]);
      });
    });
    describe('showDone method', () => {
      it('returns undone tasks', () => {
        const myTaskList = new ToDoList();
        myTaskList.addNewItem('second task');
        myTaskList.addNewItem('third task');
        myTaskList.changeDoneStatus('1');
        myTaskList.showDone(false);
        expect(myTaskList.showTaskList()).toEqual([
          {
            id: '2',
            title: 'second task',
            isDone: false,
          },
          {
            id: '3',
            title: 'third task',
            isDone: false,
          },
        ]);
      });
    });
  });
});
