// toDo.ts

import { promises as fs } from 'fs';

// Advanced TypeScript and JavaScript Concepts in a To-Do List Project

// Step 1: Create `ToDo` Class (TypeScript)
class ToDo {
    private tasks: string[] = [];

    constructor(initialTasks: string[] = []) {
        this.tasks = initialTasks;
    }

    addTask(task: string): void {
        this.tasks.push(task);
    }

    removeTask(index: number): void {
        this.tasks.splice(index, 1);
    }

    markComplete(index: number): void {
        if (this.tasks[index]) {
            this.tasks[index] = `[Done] ${this.tasks[index]}`;
        }
    }

    getTasks(): string[] {
        return this.tasks;
    }
}

// Step 2: Using Generics
function logTasks<T>(tasks: T[]): void {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}

// Step 3: Async Functionality (Advanced JS)
async function saveTasksToFile(tasks: string[]): Promise<void> {
    try {
        await fs.writeFile('tasks.txt', tasks.join('\n'));
        console.log('Tasks saved to tasks.txt');
    } catch (error) {
        console.error('Error saving tasks:', error);
    }
}

// Step 4: Prototypes and Inheritance
class TimedToDo extends ToDo {
    private timestamps: Date[] = [];

    addTask(task: string): void {
        super.addTask(task);
        this.timestamps.push(new Date());
    }

    getTasksWithTime(): [string, Date][] {
        return this.getTasks().map((task, index) => [task, this.timestamps[index]]);
    }
}

// Example Usage

const myToDo = new ToDo(['Learn TypeScript', 'Write Code']);
myToDo.addTask('Submit Assignment');
myToDo.markComplete(0);
logTasks<string>(myToDo.getTasks());

const timedToDo = new TimedToDo(['Review code']);
timedToDo.addTask('Prepare meeting notes');
logTasks<[string, Date]>(timedToDo.getTasksWithTime());

saveTasksToFile(timedToDo.getTasks().concat(myToDo.getTasks()));
