// Problem Solving?
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

var inputSalary = prompt("Enter your salary");
var grossSalary = 0;

if(inputSalary <= 10000){
   var da = inputSalary
}