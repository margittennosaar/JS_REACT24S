# Basic functions

JavaScript functions are reusable blocks of code designed to perform specific tasks.
They help in organizing your code, making it more modular, readable, and maintainable.

```js
function sum(x, y) {
  return x + y;
}
```

- The `sum` function is declared using the `function` keyword followed by the function name sum, and it takes two parameters `x` and `y`.
- The function adds `x` and `y` together and returns the result using the `return` keyword.

## Calling (invoking) a function

```js
sum(1, 3);  // Returns 4
sum(2, 5);  // Returns 7
```
Each time you call `sum` with different arguments, the function will execute the code inside it and return the corresponding result.


## Returning the result

In JavaScript, you have to return from inside functions. If you forget to write `return`, your function will return `undefined`.
The `return` keyword will also quit/exit the function.

```js
function sum(x, y) {
  return x + y;
  console.log('Hello World'); // this will NEVER run
}
```
In the example above, the `console.log` statement will not execute because the function exits as soon as the `return` statement is executed.

## Implicit return

When you forget to write `return` in a function in JavaScript, you get an implicit `return undefined`. The word implicit here means that it is inferred but not specifically expressed. Meaning that there was **no return undefined** but we end up getting `undefined` as a result.

```js
const isLegal = (age) => {
  return age >= 18;
};
```

Implicit return:

1. remove the curly braces
2. remove the return keyword

```js
const isLegal = (age) => age >= 18;
```

Only use implicit return when the function body is one line and short. Never sacrifice code readability and clarity in order to use a certain feature.
