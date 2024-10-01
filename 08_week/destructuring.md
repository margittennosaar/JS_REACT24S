# Destructuring

Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies the process of accessing values and can make your code more readable and concise. Destructuring is widely used for its readability and the concise syntax it offers, making it easier to work with data structures in JavaScript.

## Array destructuring

```js
const [first, second] = ['apple', 'banana', 'orange'];
console.log(first); // 'apple'
console.log(second); // 'banana'
```

In this example, we extract the first and second elements from an array and assign them to the variables first and second, respectively. The sequence inside the square brackets [ ] is crucial in array destructuring, as it determines how the values from the array are assigned: the first variable gets the first item, the second variable receives the second item, and so forth. The presence of square brackets [ ] on the assignment's left side signifies the use of destructuring.

## Object destructuring

Object destructuring allows you to extract properties from objects using a syntax similar to array destructuring but with curly braces {}. You match the property names on the left side of the assignment operator = to the corresponding keys in the object on the right side.

Let's take a look at some examples. Assuming the following object:

```js
const { name, age } = { name: 'John', age: 30, occupation: 'developer' };
console.log(name); // 'John'
console.log(age); // 30
```

### Nested Destructuring

```js
const user = {
  id: 101,
  info: { name: 'Alice', email: 'alice@example.com' },
};

const {
  info: { name, email },
} = user;
console.log(name, email); // Outputs: 'Alice', 'alice@example.com'
```

## Default Values

Assign default values to variables when the property is absent or undefined.

```js
const { name, role = 'user' } = { name: 'Jane' };
console.log(name); // Outputs: Jane
console.log(role); // Outputs: user
```

### Renaming variables

Rename variables during destructuring for clarity or to avoid naming conflicts.

```js
const { name: userName, age: userAge } = { name: 'Tom', age: 25 };
console.log(userName); // Outputs: Tom
console.log(userAge); // Outputs: 25
```

## Destructuring function parameters

Enhance function readability by destructuring objects directly in parameters.

```js
function createUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
createUser({ name: 'Emily', age: 30 }); // Outputs: Name: Emily, Age: 30
```

## Skipping items in arrays

Efficiently skip over elements in an array that you don't need.

```js
const [, , thirdItem] = ['one', 'two', 'three'];
console.log(thirdItem); // Outputs: three
```
