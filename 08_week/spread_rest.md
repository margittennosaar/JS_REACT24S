# Spread and Rest Operators in JavaScript

The spread and rest operators, introduced in ES6 (ECMAScript 2015), are represented by three dots (`...`). While they have similar syntax, their functionality differs based on the context in which they are used.

## Spread Operator (`...`)

The **spread operator** expands elements of an iterable (such as arrays, strings, or objects) into individual elements. It's particularly useful in situations where elements need to be passed individually.

### 1. Expanding arrays or strings
The spread operator can expand elements of an array or string into individual arguments in function calls.

```js
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Outputs: 3
```

### 2. Cloning arrays
You can easily create a shallow copy of an array using the spread operator.

```js
const original = ['a', 'b', 'c'];
const copy = [...original]; // ['a', 'b', 'c']
```

### 3. Concatenating arrays
The spread operator allows you to merge multiple arrays into one.

```js
const first = [1, 2];
const second = [3, 4];
const combined = [...first, ...second]; // [1, 2, 3, 4]
```

### 4. Merging objects (Object Literals)
With objects, the spread operator merges properties from one or more objects into another.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

> **Note:** When spreading objects, if two objects have properties with the same name, the last one overwrites the previous ones.

---

## Rest Operator (`...`)

The **rest operator** collects multiple elements into a single array or object. It’s useful when you need to handle an indefinite number of arguments in a function or when destructuring arrays and objects.

### 1. Collecting function arguments
The rest operator gathers all remaining arguments passed to a function into an array.

```js
function concatenate(separator, ...args) {
  return args.join(separator);
}
console.log(concatenate('.', 'a', 'b', 'c')); // "a.b.c"
```

### 2. Handling multiple arguments
Using the rest operator in function parameters allows you to gather an unknown number of arguments into an array.

```js
function sumAll(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumAll(1, 2, 3)); // Outputs: 6
console.log(sumAll(10, 20, 30, 40, 50)); // Outputs: 150
```

### 3. Destructuring arrays
The rest operator can be used to collect the remaining elements in array destructuring.

```js
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

### 4. Destructuring objects
When destructuring objects, the rest operator collects the remaining properties into a new object.

```js
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x);    // 1
console.log(rest); // { y: 2, z: 3 }
```

> **Note:** In both arrays and objects, the rest operator must be the last element in the destructuring assignment.

---

## Summary:

- **Spread Operator (`...`)**: Used to expand elements of iterables (arrays, objects, strings) into individual components. It’s handy for function calls, array/object cloning, concatenation, and merging.
  
- **Rest Operator (`...`)**: Collects multiple elements into an array or object. It’s useful in functions that accept an indefinite number of arguments and in destructuring assignments.


