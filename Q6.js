class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, employeeId, salary) {
    super(name, age);
    this.employeeId = employeeId;
    this.salary = salary;
  }

  displayDetails() {
    console.log(`Employee ID: ${this.employeeId}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Salary: ₹${this.salary}`);
  }
}


const emp = new Employee("Rahul", 28, "EMP-101", 65000);
emp.displayDetails();

// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node Q6.js 
// Employee ID: EMP-101
// Name: Rahul
// Age: 28
// Salary: ₹65000
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 