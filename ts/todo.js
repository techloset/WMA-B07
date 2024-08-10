"use strict";
// toDo.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// Advanced TypeScript and JavaScript Concepts in a To-Do List Project
// Step 1: Create `ToDo` Class (TypeScript)
class ToDo {
    constructor(initialTasks = []) {
        this.tasks = [];
        this.tasks = initialTasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(index) {
        this.tasks.splice(index, 1);
    }
    markComplete(index) {
        if (this.tasks[index]) {
            this.tasks[index] = `[Done] ${this.tasks[index]}`;
        }
    }
    getTasks() {
        return this.tasks;
    }
}
// Step 2: Using Generics
function logTasks(tasks) {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}
// Step 3: Async Functionality (Advanced JS)
function saveTasksToFile(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.promises.writeFile('tasks.txt', tasks.join('\n'));
            console.log('Tasks saved to tasks.txt');
        }
        catch (error) {
            console.error('Error saving tasks:', error);
        }
    });
}
// Step 4: Prototypes and Inheritance
class TimedToDo extends ToDo {
    constructor() {
        super(...arguments);
        this.timestamps = [];
    }
    addTask(task) {
        super.addTask(task);
        this.timestamps.push(new Date());
    }
    getTasksWithTime() {
        return this.getTasks().map((task, index) => [task, this.timestamps[index]]);
    }
}
// Example Usage
const myToDo = new ToDo(['Learn TypeScript', 'Write Code']);
myToDo.addTask('Submit Assignment');
myToDo.markComplete(0);
logTasks(myToDo.getTasks());
const timedToDo = new TimedToDo(['Review code']);
timedToDo.addTask('Prepare meeting notes');
logTasks(timedToDo.getTasksWithTime());
saveTasksToFile(timedToDo.getTasks().concat(myToDo.getTasks()));
