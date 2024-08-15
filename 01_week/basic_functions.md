# Basic functions

```js
function sum(x, y) {
  return x + y;
}
```

This piece of code defines a function called **sum**.
This means that you can now call **sum(1, 3)** which returns **4**.
You can run it again with different values, such as sum(2, 5) and it will return the result of 2 + 5 which is 7.

## Returning the result

In JavaScript, you have to return from inside functions. If you forget to write `return`, your function will return `undefined`.
The `return` keyword will also quit/exit the function.

```js
function sum(x, y) {
  return x + y;
  console.log('Hello World'); // this will NEVER run
}
```

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
