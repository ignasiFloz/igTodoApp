export class TaskManager {
    constructor() {
        this.tasks = [];
        this.completedTasks = [];
        this.count = 1;
    }

    addNewTask(title) {
        const task = {
            id: this.count,
            title: title
        };
        this.tasks.push(task);
        this.count++;
    }

    moveToCompleted(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            this.completedTasks.push({ id, title: task.title });
        }
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    eraseCompletedTask(id) {
        this.completedTasks = this.completedTasks.filter(t => t.id !== id);
    }
}
