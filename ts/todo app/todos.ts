import {promises as fs} from 'fs';

type Todo = {
    id: number;
    title: string;
    description: string;
    status: 'completed' | 'inProgress';
}

interface ITodos {
    todosList: Todo[];
    getTodos: () => Todo[];
    createTodo: (todo: Todo) => void;
    updateTodo: (index: number, todo: Todo) => void;
    deleteTodo: (index: number) => void;
    reset: () => void;
    todoStatusUpdate: (index: number, status: 'completed' | 'inProgress') => void;
}
class Todos implements ITodos {
    public todosList: Todo[] = []
    constructor(items: Todo[]) {
        this.todosList = items;
    }

    getTodos() {
        return this.todosList
    }
    createTodo(todo: Todo): void {
        this.todosList.push(todo);
    }
    updateTodo(id: number, todo: Todo): void {
        const updatedList: Todo[] = this.todosList.map((item) => {
            if (item.id === id) {
                return {
                    ...todo,
                    id: item.id
                };
            }
            return item;
        })
        this.todosList = updatedList;
        // this.todosList[index] = todo;
    }
    deleteTodo(id: number): void {
       const updatedList:Todo[] =  this.todosList.filter((todo) => todo.id !== id); 
       this.todosList = updatedList;
    }
    reset() {
        this.todosList = [];
    }

    todoStatusUpdate(index: number, status: 'completed' | 'inProgress') {
        this.todosList[index].status = status;
    }
}

const saveTodosInTextFile = async (todos: Todo[]): Promise<void> => {
    try {
        const listOfTodos = todos.map(todo => `${todo.id},${todo.title},${todo.description},${todo.status} \n`);
       await fs.writeFile('todos.txt', listOfTodos)
    }
    catch (error) {
        console.error(error);
    }
}

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
const result: Todo[] = myTodos.getTodos();
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
})
myTodos.todoStatusUpdate(0, 'completed')
saveTodosInTextFile(myTodos.getTodos());
// myTodos.deleteTodo(0)
console.log("myTodos.getTodos();", myTodos.getTodos());


