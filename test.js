// const numbers = [10,20,30,40,50,60];
// const [a1, a2,a3 ,a4 ,...others ] = numbers
// console.log(a1);
// console.log(a2);
// console.log(a4);
// console.log(...others);

// let student = {
//  name: "Rahul",
//  age: 21,
//  city: "Mumbai"
// };
// const {name, age , city : studentcity, course = "UNKOWN"} =student
// console.log(name);
// console.log(age);
// console.log(studentcity);
// console.log(course);


// let numbers = [2, 5, 8, 10, 15, 20];

// const square = numbers.map(
//     num => num ** 2
// )

// function max(numbers) {
//    console.log( Math.max(...numbers)
//     );
    
    
// }

// const sum = numbers.reduce(
//     Math.sum(...numbers)
// )

// console.log(square);
// max();
//console.log(sum);


// let numbers = [2, 5, 8, 10, 15, 20];
// const squaredNumbers = numbers.map(num => num ** 2);

// const filteredNumbers = numbers.filter(num => num > 10);

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

// console.log("Squares:", squaredNumbers);     
// console.log("Filtered:", filteredNumbers);   
// console.log("Sum:", sum);                 


// let students = [
//  { name: "Amit", marks: 75 },
//  { name: "Priya", marks: 90 },
//  { name: "Rahul", marks: 45 },
//  { name: "Sneha", marks: 80 }
// ];

// const topStudentsNames = students
//   .filter(student => student.marks > 60)
//   .map(student => student.name);

// const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// const averageMarks = totalMarks / students.length;

// console.log("Students scoring > 60:", topStudentsNames); 
// console.log("Average Marks:", averageMarks);               



// class BankAccount{
//     accountNumber;
//      accountHolder;
//     balance;

//     constructor (accountNumber,accountHolder,balance){
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     displayinfo(){
//         console.log("name"+":"+this.accountHolder+"  "+"no"+":"+this.accountNumber+"  "+"balance"+":"+this.balance);
        
//     }
//     deposit(amount){
//         this.balance +=amount;
//     }
//     withdraw(amount){
//         this.balance -=amount;
//     }

//     displayBalance(){
//         console.log(this.balance);
        
//     }

// }


// const tom = new BankAccount(1001,"tom",10000);

// tom.displayinfo();
// tom.displayBalance();
// tom.deposit(1000);
// tom.displayBalance();
// tom.withdraw(500);
// tom.displayBalance();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, employeeId, salary) {
//     super(name, age); // Calls the parent class constructor
//     this.employeeId = employeeId;
//     this.salary = salary;
//   }

//   displayDetails() {
//     console.log(`Employee ID: ${this.employeeId}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Salary: $${this.salary}`);
//   }
// }

// let emp = new Employee("Amit Sharma", 28, "EMP1023", 65000);
// emp.displayDetails();


// class InvalidAgeError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InvalidAgeError";
//   }
// }

// function checkAge(age) {
//   if (age < 18) {
//     throw new InvalidAgeError("Age must be at least 18.");
//   }
//   return "Age is valid. Access granted.";
// }

// try {
//   console.log(checkAge(16));
// } catch (error) {
//   console.error(`${error.name}: ${error.message}`);
// }



// class InvalidAmountError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InvalidAmountError";
//   }
// }

// class InsufficientBalanceError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InsufficientBalanceError";
//   }
// }

// function withdraw(balance, amount) {
//   if (amount <= 0 || isNaN(amount)) {
//     throw new InvalidAmountError("The withdrawal amount must be greater than zero.");
//   }
//   if (amount > balance) {
//     throw new InsufficientBalanceError("Withdrawal amount exceeds available balance.");
//   }
//   return balance - amount;
// }

// let currentBalance = 1000;

// try {
//   withdraw(currentBalance, -50);
// } catch (error) {
//   if (error instanceof InvalidAmountError) {
//     console.error(`Caught InvalidAmountError: ${error.message}`);
//   } else if (error instanceof InsufficientBalanceError) {
//     console.error(`Caught InsufficientBalanceError: ${error.message}`);
//   }
// }

// try {
//   withdraw(currentBalance, 1500);
// } catch (error) {
//   if (error instanceof InvalidAmountError) {
//     console.error(`Caught InvalidAmountError: ${error.message}`);
//   } else if (error instanceof InsufficientBalanceError) {
//     console.error(`Caught InsufficientBalanceError: ${error.message}`);
//   }
// }


// const taskPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task completed successfully");
//   }, 2000);
// });

// taskPromise
//   then((message) => {
//     console.log(message);
//   })
//   catch((error) => {
//     console.error("An error occurred:", error);
//   });



// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number > 0) {
//         resolve("Positive number");
//       } else {
//         reject("Invalid number");
//       }
//     }, 2000);
//   });
// }

// checkNumber(15)
//   .then((message) => {
//     console.log(message); 
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// checkNumber(-3)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error); 
//   });



// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })
//   .then((result) => {
//     console.log(`Initial number: ${result}`);
//     return result * 2; 
//   })
//   .then((result) => {
//     console.log(`After multiplying by 2: ${result}`);
//     return result + 5; // Add 5
//   })
//   .then((finalResult) => {
//     console.log(`Final result: ${finalResult}`); 
//   })
//   .catch((error) => {
//     console.error("An error occurred during chaining:", error);
//   });

// import { add, multiply } from './math.js';

// let sumResult = add(5, 3);
// let productResult = multiply(4, 5);

// console.log(`Addition result: ${sumResult}`);      
// console.log(`Multiplication result: ${productResult}`); 




// function greetings(name="aandy"){
//     console.log("greeting"+"  "+name);
    
// }

// greetings("tom");
// greetings();


// function add(a1,a2=10) {
//     console.log(a1+a2);
    
// }

// add(10);
// add(18,12);



import { add, subtract, multiply, divide } from './calculator.js';

console.log("Addition (10 + 5):", add(10, 5));         

console.log("Subtraction (10 - 5):", subtract(10, 5));   
console.log("Multiplication (10 * 5):", multiply(10, 5)); 

console.log("Division (10 / 5):", divide(10, 5));         




