"use strict";
class A {
    show(a) {
        console.log("A class show method");
    }
}
class B extends A {
    show(a) {
        console.log("B class show method", a);
    }
}
class Dog {
    makeSound() {
        console.log("Dog barks.");
    }
}
class Cat {
    makeSound() {
        console.log("Cat meows.");
    }
}
class Bank {
    constructor(balance) {
        this.balance = 0;
        this.accountNumber = "sfa";
        this.accountHolderName = "John";
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
class User {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
    }
    displayUser() {
        console.log(this.name, this.age);
    }
}
class Student extends User {
    constructor(name, age, isStudent, subjects) {
        super(name, age, isStudent);
        this.subjects = subjects;
    }
}
const student1 = new Student('John', 22, true, ['Math', 'Science']);
const user1 = new User('John', 22, true);
// function concatListOFItems<A,B>(list: A[], List: B[]){
// }
// concatListOFItems<number, string>([10,20,30,40], ['Hello', 'World'])
// concatListOFItems<string, number>(['Hello', 'World'], [10,20,30,40])
// concatListOFItems<string, string>(['Hello', 'World'], ['Hello', 'World'])
// type STUDENTNAMETYPE = number | string;
// interface StudentInterface {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     subjects: string[];
// }
// function add<T>(num1:T | any, num2:T):T{
//     let c:T = num1 + num2;
//     return c;
// }
// var total:number = add<number>(10,20)
// console.log("total",total);
// var result2:string = add<string>("10","20")
// function add2(num1:string, num2:string):string{
//     return num1 + num2;
// }
// var result:string = add2("Hello", " World")
// // var userName:string | null = prompt('Enter your name'); 
// type StudentType = {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     subjects: string[]
// }
// type StudentExtend = StudentType & {
//     isGraduated: boolean
// }
// // interface
// interface UserInterface {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     subjects: string[];
// }
// class Student implements UserInterface{
//     name: string;
//     age: number;
//     isStudent: boolean;
//     subjects: string[];
//     constructor(name:string, age:number, isStudent:boolean, subjects:string[]){
//         this.name = name;
//         this.age = age;
//         this.isStudent = isStudent;
//         this.subjects = subjects;
//     }
// }
// var user:UserInterface = {
//     name: 'John',
//     age: 22,
//     isStudent: true,
//     subjects: ['Math', 'Science']
// };
// // data structure variable
// // union
// type MessageType = string | number ;
// var message:MessageType | boolean = 'Hello World';
// let userNum:number = 22;
// const userBool:boolean = true;
// var userNull:null = null;
// var userUndefined:undefined = undefined;
// var userAny:any = 'Hello';
// // data structure array
// var listofNumbsFixedLength:number[] = new Array(5);
// var listOfnums: number[] = [10, 20, 30,40,50];
// var listOfStrings: string[] = ['Hello', 'World'];
// var listOfBools: boolean[] = [true, false, true, false];
// var listOfAny: any[] = ['Hello', 22, true];
// // data structure tuple
// var userTuple:[string, number,boolean, boolean] = ['Hello', 22,false,true];
// userTuple[0] = 'World';
// type UserObjectTypes = {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     subjects: string[]
// }
// // data structure object
// var userObject:UserObjectTypes = {
//     name: 'John',
//     age: 22,
//     isStudent: true,
//     subjects: ['Math', 'Science']
// };
// var listUserOnjects:UserObjectTypes[] = [userObject,{
//     name: 'Ali',
//     age: 12,
//     isStudent: false,
//     subjects: ['Math', 'Science']
// }]
// var userObject2:object = {
//     name: 'John',
//     age: 22,
//     isStudent: true
// };
// // data structure enum
// enum Color {Red, Green, Blue};
// // var returnNothing:undefined = void;
// // var userNever:never = (() => ());
// userNum = 33;
// // userBool = false;
// // message = 22;
// console.log(message);
// // Two types in typescript
// // implicit type
// // explicit type
// // how to run typescript file
// // once time when you setup new pc
// // 1- npm install -g typescript
// // every new project you have to run the command
// // 2- tsc --init
// // every time you make a change in the file you have to run the command again
// // 3- tsc
// // 4- node script.js
