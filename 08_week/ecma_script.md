# EcmaScript

`JavaScript` is an implementation of `EcmaScript`, the most popular one, in fact. EcmaScript is a specification for creating scripting languages, managed by Ecma International, based in Geneva, Switzerland. While EcmaScript lays down the specifications, JavaScript is the actual programming language that implements these specifications.

## Vanilla JavaScript

The term Vanilla JavaScript refers to plain JavaScript without any libraries or frameworks like jQuery or React. It signifies using JavaScript in its purest form.

## EcmaScript Versions

Developers used to work with EcmaScript 5 (ES5), released in 2009, before the significant update in 2015, known as EcmaScript 6 (ES6) or ES2015, marking the start of annual version updates.

### ES5 (2009)

Known as the "old JavaScript", it's widely supported but lacks many features introduced in later versions.

### ES6/ES2015

- Arrow functions for concise function syntax.

```js
const add = (x, y) => x + y;
console.log(add(10, 5)); // 15
```

- Template literals for easier string interpolation.

```js
const greeting = `Hello, my name is ${name}!`;
console.log(greeting); // Hello, my name is John!
```

- Promises for managing asynchronous operations.

```js
// Creating a new Promise
let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
  // Simulating cleaning the room
  let isClean = true; // Change this to false to see the other path (reject)

  if (isClean) {
    resolve('The room is clean.');
  } else {
    reject('The room is still dirty.');
  }
});

// Consuming the Promise
promiseToCleanTheRoom
  .then(function (fromResolve) {
    console.log('The room status: ' + fromResolve);
  })
  .catch(function (fromReject) {
    console.log('The room status: ' + fromReject);
  });
```

- Classes for object-oriented programming.

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayCarInfo() {
    console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
  }
}

const myCar = new Car('Toyota', 'Corolla', 2021);
myCar.displayCarInfo(); // Output: Car: Toyota Corolla, Year: 2021

class ElectricCar extends Car {
  constructor(make, model, year, batteryRange) {
    super(make, model, year); // Call the parent class constructor
    this.batteryRange = batteryRange;
  }

  displayBatteryRange() {
    console.log(`This car has a battery range of ${this.batteryRange} miles.`);
  }
}

const myElectricCar = new ElectricCar('Tesla', 'Model S', 2020, 379);
myElectricCar.displayCarInfo(); // Output: Car: Tesla Model S, Year: 2020
myElectricCar.displayBatteryRange(); // Output: This car has a battery range of 379 miles.
```

- Let and const keywords for block-scoped variable declarations.

```js
let name = 'John'; // Block scoped variable
const age = 30; // Block scoped constant

name = 'Jane'; // Allowed
// age = 35; // TypeError: Assignment to constant variable.
```

- Destructuring Assignment

```js
const { name, age } = person;
console.log(name); // John
console.log(age); // 30
```

### Yearly Updates (ES2016 onwards)

Since the introduction of ECMAScript 2015 (ES6), there have been several key updates to the ECMAScript standard. Each year brings new features and improvements. Here's a list of key changes in ECMAScript since the 2015 version:

#### ECMAScript 2016 (ES7)

- **Array.prototype.includes:** Check if an array includes a certain element.
- **Exponentiation Operator:** Shorthand syntax for exponentiation (`**`).

#### ECMAScript 2017 (ES8)

- **Async/Await:** Write asynchronous code in a synchronous-like manner.
- **Object.values/Object.entries:** Return values or key-value pairs from an object.
- **String padding:** `padStart` and `padEnd` methods.
- **Object.getOwnPropertyDescriptors:** Returns all own property descriptors of an object.

#### ECMAScript 2018 (ES9)

- **Asynchronous Iteration:** Async iterators and `for-await-of` loop.
- **Rest/Spread Properties:** Spread properties for object literals.
- **Promise.prototype.finally:** A callback that is executed after a promise is settled.
- **RegExp improvements:** Named capture groups, Unicode property escapes, Lookbehind assertions, and s (dotAll) flag.

#### ECMAScript 2019 (ES10)

- **Array.prototype.{flat, flatMap}:** Methods to flatten arrays.
- **Object.fromEntries():** Transform a list of key-value pairs into an object.
- **String.prototype.{trimStart, trimEnd}:** Trim whitespaces from the beginning or end of a string.
- **Optional catch binding:** `catch` blocks can be used without a parameter.

#### ECMAScript 2020 (ES11)

- **BigInt:** An arbitrary precision integer type.
- **Dynamic Import:** Import modules dynamically using the `import()` function.
- **Nullish coalescing Operator (`??`):** Returns the right-hand operand when the left-hand operand is `null` or `undefined`.
- **Optional Chaining (`?.`):** Access deeply nested object properties without having to check for nullability.
- **Promise.allSettled():** Returns a promise that resolves after all of the given promises have either resolved or rejected.

#### ECMAScript 2021 (ES12)

- **String.prototype.replaceAll:** Replace all occurrences of a substring in a string.
- **Logical Assignment Operators:** Combining logical operators with assignment (`&&=`, `||=`, `??=`).
- **Numeric Separators:** Make numerical literals more readable by creating a visual separation between groups of digits.
- **WeakRefs and Finalizers:** Managing memory and cleanup with WeakRef and FinalizationRegistry objects.

#### ECMAScript 2022 (ES13)

- **Class Fields (Public and Private):** Class instance fields and private methods.
- **Top-Level `await`:** Use the `await` keyword outside of async functions.
- **Ergonomic brand checks for Private Fields:** More concise and direct syntax for checking the existence of private fields.
- **RegExp Match Indices:** Provide start and end indices for the captured string.

These updates reflect the evolving nature of JavaScript, providing developers with more robust, concise, and powerful tools to write modern web applications. Each version builds on the last, ensuring that JavaScript remains a competitive and capable language for web development.
