import { ToDoList } from '../helpers/ToDoListClass';
describe('ToDoList', () => {
  it('return {id: "1", title: "do the task", isDone: false} when "do the task" is passed', () => {
    const MyTaskList = new ToDoList();
    expect(MyTaskList.addNewItem('do the task')).toEqual({
      id: '1',
      title: 'do the task',
      isDone: false,
    });
  });
});
