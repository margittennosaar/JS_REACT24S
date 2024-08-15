# Data types

JavaScript is a dynamically typed language, meaning variables can hold values of any data type and the same variable can hold different types of values over its lifetime. Understanding the basic data types in JavaScript is crucial for effective programming. Here’s an overview of the primary data types:

Primitive Data Types

- **Number**: Represents both integer and floating-point numbers. For example, 42 and 3.14.
- **String**: Used for textual data. It must be enclosed in quotes, e.g., "Hello, world!".
- **Boolean**: Represents a logical entity and can have only two values: true or false.
- **Undefined**: When a variable is declared but not assigned, it has the value undefined.
- **Null**: Denotes a null value, indicating the absence of any object value.
- **Symbol** (introduced in ES6): Used to create anonymous and unique values.

```js
let number = 5; // Number
let text = 'Hello'; // String
let isActive = true; // Boolean
let user = { name: 'Alice', age: 25 }; // Object

let notDefined; // Undefined
let emptyValue = null; // Null
```

Complex Data Type

- Object: Collections of key-value pairs, where the values can be of any data type. Objects are used to store various keyed collections and more complex entities.

## typeof

The typeof operator in JavaScript is used to determine the type of a given value or variable. It is a unary operator that returns a string indicating the data type of its operand. This operator is particularly useful for debugging or when you need to check the type of a value before performing certain operations on it.

```js
let name = 'Alice';
let age = 30;
let isStudent = false;
let hobbies = ['reading', 'cycling'];

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof hobbies); // "object" (arrays are type 'object' in JavaScript)
```
