const { TaskManager } = require('./index.ts');

describe('to do logic', () => {
  it('addNewTask should add a new task.', () => {
    const taskmanager = new TaskManager();

    taskmanager.addNewTask('Tarea de prueba');

    expect(taskmanager.tasks.length).toBe(1);
    expect(taskmanager.tasks[0].title).toBe('Tarea de prueba');
    expect(taskmanager.tasks[0].id).toBe(1);
  });

  it('moveToCompleted should move tasks to completed tasks array', () => {
    const taskmanager = new TaskManager();

    taskmanager.addNewTask('Tarea de prueba');
    taskmanager.moveToCompleted(1);

    expect(taskmanager.tasks.length).toBe(0);
    expect(taskmanager.completedTasks.length).toBe(1);
    expect(taskmanager.completedTasks[0].title).toBe('Tarea de prueba');
    expect(taskmanager.completedTasks[0].id).toBe(1);
  });

  it('eraseCompletedTask should eliminate a task which is completed from the array of completedTasks', () => {
    const taskmanager = new TaskManager();

    const taskF = { id: 1, title: 'Task First' };
    const taskT = { id: 2, title: 'Task Second' };
    const taskS = { id: 3, title: 'Task Third' };
    taskmanager.completedTasks.push(taskF, taskS, taskT);
    taskmanager.eraseCompletedTask(1);
    expect(taskmanager.completedTasks.length).toBe(2);
  });
});