import { createInterface } from 'readline';
import { TaskManager } from '../src/index.js';

const taskManager = new TaskManager();

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function showAllTasks() {
    for (var _i = 0, _a = taskManager.tasks; _i < _a.length; _i++) {
        var t = _a[_i];
        console.log("Title: ".concat(t === null || t === void 0 ? void 0 : t.title, ", ID: ").concat(t === null || t === void 0 ? void 0 : t.id));
    }
}
function showCompletedTasks() {
    for (var _i = 0, _a = taskManager.completedTasks; _i < _a.length; _i++) {
        var t = _a[_i];
        console.log("Title: ".concat(t === null || t === void 0 ? void 0 : t.title, ", ID: ").concat(t === null || t === void 0 ? void 0 : t.id));
    }
}
function mostrarMenu() {
    console.log('Opciones:');
    console.log('1. Add Title: ');
    console.log('2. Complete a Task');
    console.log('3. Show Tasks list');
    console.log('4. Show Tasks complete as a list');
    console.log('5. Eliminate a Task');
    console.log('6. Show Options');
    console.log('7. Exit CLI');
}
function addTask() {
    rl.question('Enter the task title: ', function (title) {
        taskManager.addNewTask(title);
        console.log('Tarea añadida correctamente.');
        console.log('in case you need to see again the options menu press 6, otherwise enter your command: ');
        rl.prompt();
    });
}
function completeTask() {
    showAllTasks();
    rl.question('Enter the id of the Task: ', function (idString) {
        taskManager.moveToCompleted(parseInt(idString));
        console.log('Task marked as complete!.');
        console.log('in case you need to see again the options menu press 6, otherwise enter your command: ');
        rl.prompt();
    });
}
function showTaskList() {
    console.log('This is the list of Tasks');
    showAllTasks();
    console.log('in case you need to see again the options menu press 6, otherwise enter your command: ');
    rl.prompt();
}
function showCompleteList() {
    showCompletedTasks();
}
function eliminateTask() {
    showCompletedTasks();
    rl.question('Enter the id of the Task you want to eliminate: ', function (idString) {
        if (taskManager.completedTasks.find(function (t) { return t.id == parseInt(idString); })) {
            taskManager.eraseCompletedTask(parseInt(idString));
            console.log('Task eliminated.');
            console.log('in case you need to see again the options menu press 6, otherwise enter your command: ');
        }
        else {
            console.log('This ID does not exist.');
        }
        rl.prompt();
    });
}
rl.question('Bienvenido a la CLI. Presiona Enter para continuar.', function () {
    mostrarMenu();
    rl.prompt();
    rl.on('line', function (input) {
        switch (input) {
            case '1':
                addTask();
                break;
            case '2':
                completeTask();
                break;
            case '3':
                showTaskList();
                break;
            case '4':
                showCompleteList();
                break;
            case '5':
                eliminateTask();
                break;
            case '6':
                mostrarMenu();
                break;
            case '7':
                console.log('Saliendo de la CLI.');
                rl.close();
                break;
            default:
                console.log('Opción no válida. Por favor, selecciona una opción válida.');
        }
        rl.prompt();
    });
    rl.on('close', function () {
        process.exit(0);
    });
});
