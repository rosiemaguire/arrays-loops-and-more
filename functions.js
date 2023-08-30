// The Function Keyword
// This is a function declaration
function sayHello() {
  console.log("Hello!");
};

// This is a function call
sayHello(); // "Hello!"

// This is a function declaration with a parameter
function sayHelloToName(name) {
  console.log(`Hello ${name}!`)
};

// This is a function call with an argument
sayHelloToName("Rosie"); // "Hello Rosie!"

function addTwoNumbers (num1, num2) {
  return num1 + num2;
};

const result = addTwoNumbers(1,2);
console.log(result); // 3

// Function Expressions
// This is a function expression
const sayGoodbye = function() {
  console.log("Bye");
};

// This is a function call
sayGoodbye(); //  Bye

// Arrow Functions
// This is an arrow function
const sayGreeting = () => {
  console.log("Welcome to She Codes");
};

// This is a function call
sayGreeting(); // "Welcome to She Codes"

// This is an arrow function with parameters
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

// This is a function call
const result2 = addNumbers(1,2);
console.log(result2); //3

// Functions Are First Class Citizens
const add = (num1, num2) => {
  return num1 + num2;
};

const doSomeMath = (num1, num2, mathFunction) => {
  return mathFunction(num1, num2);
};

const result3 = doSomeMath(1, 2, add);
console.log(result); // 3