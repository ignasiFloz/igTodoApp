type Task = {
    id: number;
    title: string;
};

export class TaskManager {
    tasks: (Task|undefined)[] = [] 
    completedTasks: Task[] = []
    count = 1;

    addNewTask(title: string){
        const task: Task = {
            id: this.count,
            title
        }
        this.tasks.push(task)
        this.count++;
    }
    moveToCompleted(id: number){
        let task = this.tasks.find(t => t?.id == id)
        if(task){
            this.completedTasks.push({ id: id, title: task?.title})
        }
        const filteredTaskList = []
        
        for( let t of this.tasks){
            if(t?.id != id){
                filteredTaskList.push(t)
            }
        }
        this.tasks = filteredTaskList
    }
    eraseCompletedTask(id: number){
        this.completedTasks = this.completedTasks.filter(t => t?.id != id)
    }

    
}
