const numbers = [2, 5, 8, 10, 15, 20];

let squaredNumbers = numbers.map(num => num ** 2);
console.log("Squared:", squaredNumbers); 

let filteredNumbers = numbers.filter(num => num > 20);
console.log("Greater than 20:", filteredNumbers); 

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum); 
