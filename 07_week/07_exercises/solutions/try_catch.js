'use strict';

// Task 1: Basic Try-Catch Usage
/*
Task: Wrap the code inside a try-catch block to catch potential errors. 
      The function `task1` simulates an error by throwing an exception.
      In the catch block, log the message 'An error occurred' along with the error message.

Expected behavior:
- When the function runs, it should log an error message to the console.
- You should wrap the `throw` statement in a try block.

Hint: You will need to use `console.error()` to log the error details.

*/

function task1() {
  try {
    throw new Error('Oops, something went wrong!');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

task1();

// Task 2: Catching ReferenceError
/*
Task: Inside the `task2` function, attempt to access a variable that is not defined. 
      Use a try-catch block to handle the error. 
      Log a message in the catch block that says 'ReferenceError caught' followed by the error message.

Expected behavior:
- The catch block should specifically handle a `ReferenceError` when trying to access an undefined variable.
- Log the exact error message to the console using `error.message`.

*/

function task2() {
  try {
    console.log(notDefinedvariable)
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Reference error:', error.message);
    } else {
      console.log('an unexpected error occured:', error.message);
    }
  }
}

task2()

// Task 3: Using Finally
/*
Task: Write a function that uses a try-catch-finally block. In the try block, simulate an error. 
      The catch block should log the error message. 
      The finally block should always log 'Execution completed', whether or not an error occurs.

Expected behavior:
- The catch block should handle the error.
- The finally block should always run, regardless of whether an error occurred or not.

*/

function task3() {
  try {
    throw new Error('Something is wrong with the unicorns!');
  } catch (error) {
    console.error('Caught an error:', error.message);
  } finally {
    console.log('try...catch completed');
  }
}

task3()

// Task 4: Nested Try-Catch
/*
Task: Inside the `task4` function, write a try-catch block.
      Inside the try block, nest another try-catch block.
      Simulate an error in the inner try block and catch it in the inner catch block.
      Log messages from both the inner and outer catch blocks to show where the errors were caught.

Expected behavior:
- The inner catch block should handle the error generated in the nested try block.
- The outer catch block should log a message if any error happens in the outer try block.

Hint: Nest the second try-catch block inside the first try block.

*/

function task4() {
  try {
    console.log('Outer try block');
    try {
      throw new Error('Error in inside nested try block')
    } catch (innerError) {
      console.error('Caught inner try:', innerError.message)
    }
    throw new Error('Error in outside try block')
  } catch (outerError) {
    console.error('Caught in try:', outerError.message)
  } finally {
    console.log('Completed')
  }
}

task4()



// Task 5: Function with Try-Catch
/*
Task: Write a function `task5` that takes an array and an index as input.
      Use a try-catch block to handle the situation where the index is out of bounds (greater than the array length).
      If the index is valid, return the element at that index.
      If the index is invalid, throw a RangeError with the message "Index out of bounds" and catch it.

Expected behavior:
- If the index is out of bounds, the catch block should handle the RangeError and log the error message.
- If the index is valid, return the element from the array.

*/

function task5(array, index) {
  try {
    if (index < 0 || index >= array.length) {
      throw new RangeError('Index out of bounds');
    }
    return array[index];
  } catch (error) {
    console.error('Caught an error:', error.message)
  } finally {
    console.log('task 5 completed');
  }
}

console.log(task5([1, 2, 3], 1))
console.log(task5([1, 2, 3], 5))


// Task 6: Catching TypeError
/*
Task: Create a function `task6` that accepts an object and a key as input.
      Inside the function, try to access the property corresponding to the key.
      Handle the case where the object is null or undefined by logging 'TypeError caught' in the catch block.

Expected behavior:
- Handle cases where the input object is `null` or `undefined`, which will trigger a TypeError.
- Log a message when a TypeError occurs.

*/

function task6(obj, key) {
  try {
    console.log(obj[key]);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('TypeError caught:', error.message)
    } else {
      console.error('An unexpected error occured:', error.message)
    }
  }
}

task6({ firstName: 'Margit' }, 'firstName')
task6(null, 'firstName')

// Task 7: Handling JSON Parsing Error
/*
Task: Write a function `task7` that accepts a JSON string as input.
      Use a try-catch block to attempt to parse the string into a JavaScript object.
      If the string is not valid JSON, catch the error and log 'Invalid JSON format' in the catch block.

Expected behavior:
- If the JSON is valid, return the parsed object.
- If the JSON is invalid, the catch block should handle the error and log the error message.

Hint: Use `JSON.parse()` to attempt to parse the input string.

*/

function task7(jsonString) {
  try {
    const parsedObj = JSON.parse(jsonString);
    console.log(parsedObj);
  } catch (error) {
    console.error('Invalid JSON format:', error.message)
  }
}

task7('{"name": "Alice"}');  // Valid JSON
task7('{name: Alice}');  // Invalid JSON

// Task 8: Throwing Custom Error
/*
Task: Create a function `task8` that takes a number as input.
      If the number is less than 0, throw a custom error with the message 'Number must be positive'.
      Use try-catch to handle the error and log the custom error message in the catch block.

Expected behavior:
- The function should throw a custom error if the input is negative.
- The catch block should handle the error and log the custom message.

*/

function task8(number) {
  // Code here
}


// Task 9: RangeError Example
/*
Task: Write a function `task9` that takes a number and attempts to create an array with that number as the length.
      If the number is negative, throw a RangeError with the message 'Array length must be non-negative'.
      Catch the RangeError and log the message in the catch block.

Expected behavior:
- The function should throw a RangeError for invalid array lengths.
- The catch block should handle the RangeError and log the message.

*/

function task9(number) {
  // Code here
}


// Task 10: URIError Handling
/*
Task: Use the built-in `decodeURI()` function to decode a malformed URI string.
      Catch any URIError and log the error message to the console.

Expected behavior:
- The function should attempt to decode a malformed URI string.
- Catch any URIError that is thrown and log the message in the catch block.

*/

function task10(malformedURI) {
  // Code here
}

