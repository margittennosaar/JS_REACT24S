# Arrow Functions

Arrow functions provide a concise syntax for writing functions in JavaScript. Here’s an example to illustrate this:

```js
function sum(a, b) {
  return a + b;
}
```

This function can be rewritten using the function expression syntax:

```js
const sum = function (a, b) {
  return a + b;
};
```

In this approach, a variable named `sum` is created, and a function taking two parameters, `a` and `b`, is assigned to it.

To transform this function into an arrow function, follow these two steps:

1. Remove the `function` keyword.
2. Insert an arrow (`=>`) between the parameters `(a, b)` and the opening curly brace `{`.

The resulting arrow function looks like this:

```js
const sum = (a, b) => {
  return a + b;
};
```

In arrow functions, the syntax begins with the parameters, followed by the arrow `=>`, and then the function body.

## Understanding Parameters

Consider the following function:

```js
function addOne(number) {
  return number + 1;
}
addOne(2); // Returns 3
addOne(5); // Returns 6
addOne(); // What does this return?
```

Invoking `addOne()` without any arguments in some programming languages could lead to an error. However, JavaScript handles this gracefully, continuing execution without failure.

When no argument is provided, `number` becomes `undefined`, and the function returns `undefined + 1`, which is `NaN`. To avoid this, you can use default parameters instead of adding an `if` condition.

### Parameter vs. Argument

- **Parameters** are the variables listed in a function's definition.
- **Arguments** are the actual values passed to the function when it is called.

Example demonstrating parameters and arguments:

```js
function argCheck(parameter1, parameter2, parameter3) {
  console.log(parameter1 + parameter2 + parameter3); // Using parameters
}
argCheck(1, 2, 3, 4); // Passing arguments
```

### Default Parameters

Default parameters allow assigning a default value to one or more parameters when they are not provided at the function call. This can prevent unintended results, such as `NaN`:

```js
function addOne(number = 0) {
  return number + 1;
}
addOne(2); // Returns 3
addOne(5); // Returns 6
addOne(); // Returns 1
```

With `addOne()`, calling it without any arguments defaults `number` to `0`, thus avoiding `NaN` and simplifying the function’s behavior.

Similarly, consider this welcoming function:

```js
function welcomeUser(name = 'user') {
  return `Hello ${name}`;
}

welcomeUser('Sam'); // Outputs "Hello Sam"
welcomeUser(); // Outputs "Hello user"
```

This demonstrates how default parameters can provide fallback values, enhancing function flexibility and reliability.
