class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 18) {
    throw new InvalidAgeError("Age must be at least 18.");
  }
  return "Age verification successful.";
}


try {
  console.log(checkAge(16));
} catch (error) {
  if (error instanceof InvalidAgeError) {
    console.log(`Error Caught: [${error.name}] ${error.message}`);
  } else {
    console.log(`Unexpected Error: ${error.message}`);
  }
}

try {
  console.log(checkAge(20));
} catch (error) {
  console.log(`Error Caught: ${error.message}`);
}


// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node Q7.js 
// Error Caught: [InvalidAgeError] Age must be at least 18.
// Age verification successful.
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 