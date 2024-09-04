# Functions

Functions are one of the fundamental building blocks in JavaScript. A function is a set of statements that performs a task or calculates a value, making your code more modular and reusable.

## Defining Functions

A function is defined using the `function` keyword, followed by a name, a list of parameters enclosed in parentheses `()`, and a block of code enclosed in curly braces `{}`.

```js
function greet() {
  console.log('Hello, World!');
}
greet(); // Calls the function
```

## Function Expressions

Function expressions allow you to create anonymous functions (functions without a name) and assign them to variables.

```js
const square = function (number) {
  return number * number;
};
console.log(square(4)); // 16
```

## Arrow Functions (ES6)

ES6 introduced arrow functions, offering a more concise syntax for writing functions.

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### When to Use Arrow Functions
- For shorter syntax, especially for single-line functions.
- Useful for callbacks or when preserving this context is necessary.

## Parameters and Arguments

Functions can take parameters, which act as placeholders for values passed to the function when it is called.

```js
// a and b are parameters
function sum(a, b) {
  return a + b;
}

// 5 and 7 are arguments
console.log(sum(5, 7)); // 12
```

## Default parameters

Default parameters allow named parameters to be initialized with default values if no value or `undefined` is passed. This feature is useful for providing default values in your functions to avoid errors or unwanted `undefined` values.

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));    // Output: 5
console.log(multiply(5, 2)); // Output: 10

```

## The `return` Statement

The `return` statement is used to return a value from a function.

```js
function getMax(a, b) {
  return a > b ? a : b;
}
console.log(getMax(10, 20)); // 20
```

## Scope in Functions

Variables defined inside a function are not accessible from outside the function. These variables are said to be in the function's scope. Understanding scope is essential for avoiding unintended behavior and bugs in your code.

```js
function myFunc() {
  let myVar = 'local';
  console.log(myVar); // Accessible here
}
myFunc();
console.log(myVar); // Uncaught ReferenceError: myVar is not defined
```

## Higher-Order Functions

A higher-order function is a function that takes another function as an argument, returns a function, or both.

```js
function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}`);
  };
}
const greetJohn = greet('John');
greetJohn('Hello'); // "Hello, John"
```

One common use of higher-order functions is to take one or more functions as arguments. This approach is frequently seen in array methods like `.map()`, `.filter()`, and `.reduce()`. For example, `.map()` takes a function and applies it to every element in an array, returning a new array with the transformed elements.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
// doubled is now [2, 4, 6, 8]
```

### Use in Callbacks and Event Handlers

Higher-order functions are also commonly used as callbacks, particularly in asynchronous operations and event handling.

```js
document.getElementById('myButton').addEventListener('click', function () {
  console.log('Button clicked!');
});
```

## Void functions

Functions that do not explicitly return a value, or those that finish execution without encountering a `return` statement, return `undefined` by default.

```js
// A function without a return statement
function printMessage(message) {
  console.log(message);
  // implicitly returns undefined
}

// A function with a return statement but no value is returned
function doSomething() {
  // some code...
  return; // still returns undefined
}

let result1 = printMessage('Hello, world!');
let result2 = doSomething();

console.log(result1); // undefined
console.log(result2); // undefined
```

## Best Practices

- Use clear and descriptive names for functions.
- Functions should be small and focused on a specific task.
- Use default parameters to set default values for function parameters.
- Avoid global parameters
- Use arrow functions for concise one-liners
