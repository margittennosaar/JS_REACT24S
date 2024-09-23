# Error handling

Handling errors and debugging are key parts of JavaScript development, especially for beginners. Understanding error types and using appropriate tools can make the debugging process easier and more efficient.

```javascript
function getOddYears(years) {
  return yeas.filter((year) => year % 2 !== 0); // Misspelled variable name
}
```

In this code, a typo in the variable name (`yeas` instead of `years`) causes an error. Recognizing such errors is the first step in debugging.

## Debugging Techniques

### Console Logging for debugging

`console.log()` is one of the most straightforward yet powerful tools for debugging. It allows you to inspect variables and track how data flows through your code.

```javascript
function getOddYears(years) {
  console.log(years); // Check the input
  const oddYears = years.filter((year) => year % 2 !== 0);
  console.log(oddYears); // Check the output
  return oddYears;
}
```

### Using `debugger` Statement

The `debugger` statement pauses execution and opens debugging tools in your browser. You can inspect variables, step through code, and track how data changes during execution.

```javascript
function getOddYears(years) {
  debugger; // Execution will pause here in the browser
  return years.filter((year) => year % 2 !== 0);
}
```

### Handling Runtime Errors with try-catch

`try-catch` blocks handle errors gracefully during runtime. Instead of letting the script fail, you can catch and handle errors when they occur.

```javascript
function getOddYears(years) {
  try {
    return years.filter((year) => year % 2 !== 0);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

```

```javascript
try {
  let result = riskyOperation(); // Attempt risky operation
  console.log('Operation successful:', result);
} catch (error) {
  console.error('An error occurred during the operation:', error); // Handle the error
} finally {
  console.log('Operation attempt finished.'); // Runs regardless of success or failure
}

```

## Understanding error types in JavaScript

JavaScript has several built-in error types that help identify the nature of the issue. Recognizing these errors helps in quicker diagnosis and resolution.

including `ReferenceError`, `TypeError`, `SyntaxError`, and more. Recognizing these can help you quickly diagnose problems.

### SyntaxError

Occurs when there is a syntax issue, such as missing brackets or incorrect code structure.

```javascript
function myFunction() {
  console.log("Hello World"; // Missing closing parenthesis causes SyntaxError
}
```

### ReferenceError

Occurs when referencing a variable that hasn't been declared.

```javascript
function showName() {
  console.log(name); // Throws ReferenceError if 'name' is not defined
}

```

### TypeError

Occurs when trying to perform an operation on an incorrect data type, like invoking a non-function or accessing a property on undefined.

```javascript
let someText = 'Hello, World!';
someText.split(); // Works fine

someText = null;
someText.split(); // Throws TypeError: null does not have a split method

```

### RangeError

Occurs when a value is outside its valid range, such as creating an array with a negative length.

```javascript
let numbers = new Array(-5); // Throws RangeError: Array length cannot be negative
```

### URIError

Occurs when there is improper use of global URI handling functions, like `encodeURI()` or `decodeURI()`.
#### Example:

```javascript
decodeURI('%'); // Throws URIError: Malformed URI component

```

### Debugging Tips

- **Use `console.log` strategically** to inspect the flow and state of your code.
- **Utilize breakpoints and the debugging tools** in your browser's developer console to step through code execution.
- **Read error messages carefully;** they often provide valuable hints on where and why the error occurred.

## Throwing custom errors


You can also `throw` custom errors using the throw statement, allowing you to create and raise errors intentionally when specific conditions are not met.

```js
function checkNumber(num) {
  if (isNaN(num)) {
    throw new Error('Input must be a number');
  }
  console.log('The number is', num);
}

try {
  checkNumber('test'); // Throws an error because 'test' is not a number
} catch (error) {
  console.error(error.message); // Logs "Input must be a number"
}
```
The `throw` keyword creates custom errors, stopping function execution and passing control to the catch block if an error is thrown.

```js
throw new Error('Custom error message');
```

