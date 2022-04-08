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

  describe('ToDoList', () => {
    let myTaskList;
    beforeEach(() => {
      myTaskList = new ToDoList();
    });
    describe('addNewItem method', () => {
      it('return {id: "1", title: "do the task", isDone: false} when "do the task" is passed', () => {
        myTaskList.addNewItem('do the task');
        expect(myTaskList.showTaskList()).toEqual([
          {
            id: '1',
            title: 'do the task',
            isDone: false,
          },
        ]);
      });
      it('return {statusCode: 500, msg: "give me a name of the task"} when empty string passed', () => {
        expect(myTaskList.addNewItem('')).toEqual({
          statusCode: 500,
          msg: 'give me a name of the task',
        });
      });
    });
    describe('showTask method', () => {
      it('show list of tasks', () => {
        expect(myTaskList.showTaskList()).toEqual([
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
        myTaskList.changeDoneStatus('1');
        expect(myTaskList.showTaskList()).toEqual([
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
        myTaskList.addNewItem('do the task');
        myTaskList.removeTask('1');
        expect(myTaskList.showTaskList()).toEqual([]);
      });
    });
    describe('showDone method', () => {
      it('returns undone tasks', () => {
        myTaskList.addNewItem('second task');
        myTaskList.addNewItem('third task');
        expect(myTaskList.showDone(false)).toEqual([
          {
            id: '1',
            title: 'second task',
            isDone: false,
          },
          {
            id: '2',
            title: 'third task',
            isDone: false,
          },
        ]);
      });
      it('returns done tasks', () => {
        myTaskList.changeDoneStatus('1');
        expect(myTaskList.showDone(true)).toEqual([
          {
            id: '1',
            title: 'second task',
            isDone: true,
          },
        ]);
      });
    });
  });
});
