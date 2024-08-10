import {promises as fs} from 'fs'
class Todos {
    private tasks: string [] = []
    constructor(tasks:string[]){
        this.tasks = tasks
    }
    getTasks():string[]{
        return this.tasks
    }
    createTask(task:string):void{
       this.tasks.push(task)
    }
    updateTask(task:string, index:number){
        this.tasks.splice(index,1,task)
    }
    deleteTask(index:number){
        this.tasks.splice(index,1)
    }
 }
  const saveTodoInTextFile = async (todos:string[]) : Promise<void> => {
          try {
            await fs.writeFile('todos.txt', todos.join('\n'))
          } catch (error) {
            console.log('Error saving todos:', error);
            
          }
  }

 let myTodos = new Todos(['Learn Angular','Learn React','Learn Vue'])
    console.log(myTodos.getTasks())
    myTodos.createTask('Learn Node')
    console.log(myTodos.getTasks())
    myTodos.updateTask('Learn Angular 8',0)
    console.log(myTodos.getTasks())
    myTodos.deleteTask(2)
    saveTodoInTextFile(myTodos.getTasks())
    console.log(myTodos.getTasks())


