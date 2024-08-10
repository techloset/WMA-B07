"use strict";
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
class Todos {
    constructor(items) {
        this.todosList = [];
        this.todosList = items;
    }
    getTodos() {
        return this.todosList;
    }
    createTodo(todo) {
        this.todosList.push(todo);
    }
    updateTodo(id, todo) {
        const updatedList = this.todosList.map((item) => {
            if (item.id === id) {
                return Object.assign(Object.assign({}, todo), { id: item.id });
            }
            return item;
        });
        this.todosList = updatedList;
        // this.todosList[index] = todo;
    }
    deleteTodo(id) {
        const updatedList = this.todosList.filter((todo) => todo.id !== id);
        this.todosList = updatedList;
    }
    reset() {
        this.todosList = [];
    }
    todoStatusUpdate(index, status) {
        this.todosList[index].status = status;
    }
}
const saveTodosInTextFile = (todos) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listOfTodos = todos.map(todo => `${todo.id},${todo.title},${todo.description},${todo.status} \n`);
        yield fs_1.promises.writeFile('todos.txt', listOfTodos);
    }
    catch (error) {
        console.error(error);
    }
});
const myTodos = new Todos([{
        id: 0,
        title: 'Learn Typescript',
        description: 'Learn typescript for better understanding',
        status: 'inProgress'
    },
    {
        id: 1,
        title: 'Learn React',
        description: 'Learn React for front-end development',
        status: 'completed'
    }]);
const result = myTodos.getTodos();
console.log(result);
myTodos.createTodo({
    id: 2,
    title: 'Learn Nextjs',
    description: 'Learn Nextjs for server side rendering',
    status: 'inProgress'
});
myTodos.updateTodo(0, {
    id: 1,
    title: 'Learn React',
    description: 'Learn React for front-end development',
    status: 'inProgress'
});
myTodos.todoStatusUpdate(0, 'completed');
saveTodosInTextFile(myTodos.getTodos());
// myTodos.deleteTodo(0)
console.log("myTodos.getTodos();", myTodos.getTodos());
