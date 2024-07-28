
function add(a:number, b:string):string{
    return a + b;
}
var sum:string = add(10, "hello");


// var userName:string | null = prompt('Enter your name'); 


type StudentType = {
    name: string,
    age: number,
    isStudent: boolean,
    subjects: string[]
}
type StudentExtend = StudentType & {
    isGraduated: boolean
}

// interface
interface UserInterface {
    name: string;
    age: number;
    isStudent: boolean;
    subjects: string[];
}

class Student implements UserInterface{
    name: string;
    age: number;
    isStudent: boolean;
    subjects: string[];

    constructor(name:string, age:number, isStudent:boolean, subjects:string[]){
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.subjects = subjects;
    }
}

var user:UserInterface = {
    name: 'John',
    age: 22,
    isStudent: true,
    subjects: ['Math', 'Science']
};



// data structure variable
// union
type MessageType = string | number ;

var message:MessageType | boolean = 'Hello World';
let userNum:number = 22;
const userBool:boolean = true;
var userNull:null = null;
var userUndefined:undefined = undefined;
var userAny:any = 'Hello';

// data structure array
var listofNumbsFixedLength:number[] = new Array(5);
var listOfnums: number[] = [10, 20, 30,40,50];
var listOfStrings: string[] = ['Hello', 'World'];
var listOfBools: boolean[] = [true, false, true, false];
var listOfAny: any[] = ['Hello', 22, true];

// data structure tuple
var userTuple:[string, number,boolean, boolean] = ['Hello', 22,false,true];
userTuple[0] = 'World';

type UserObjectTypes = {
    name: string,
    age: number,
    isStudent: boolean,
    subjects: string[]
}

// data structure object
var userObject:UserObjectTypes = {
    name: 'John',
    age: 22,
    isStudent: true,
    subjects: ['Math', 'Science']
};

var listUserOnjects:UserObjectTypes[] = [userObject,{
    name: 'Ali',
    age: 12,
    isStudent: false,
    subjects: ['Math', 'Science']
}]

var userObject2:object = {
    name: 'John',
    age: 22,
    isStudent: true
};



// data structure enum
enum Color {Red, Green, Blue};


// var returnNothing:undefined = void;
// var userNever:never = (() => ());






userNum = 33;
// userBool = false;
// message = 22;
console.log(message);

// Two types in typescript
// implicit type
// explicit type


// how to run typescript file

// once time when you setup new pc
// 1- npm install -g typescript

// every new project you have to run the command
// 2- tsc --init

// every time you make a change in the file you have to run the command again
// 3- tsc
// 4- node script.js