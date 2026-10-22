const students = [
  { name: "Amit", marks: 75 },
  { name: "Priya", marks: 90 },
  { name: "Rahul", marks: 45 },
  { name: "Sneha", marks: 80 }
];

let topStudents = students
  .filter(student => student.marks > 60)
  .map(student => student.name);

console.log("Students scoring > 60:", topStudents);

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);

// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node Q4.js 
// Students scoring > 60: [ 'Amit', 'Priya', 'Sneha' ]
// Average Marks: 72.5
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 
