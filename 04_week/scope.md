# Scope

Scope in JavaScript refers to the part of the program where a variable or function is accessible. It determines where variables and functions can be used in your code.

## Types of Scope

- **`Global Scope:`** Variables defined outside of any function or block are in the global scope. They can be accessed from anywhere in your code.

- **`Local (Function) Scope`**: Variables declared inside a function are in the local scope. They can only be accessed within that function.

- **`Block Scope (ES6)`**: Variables declared with `let` and `const` are block-scoped. This means they are only accessible within the block (like an `if` statement or loop) where they are defined.

### Examples of scope

Global Scope:

```js
let globalVar = 'I am a global variable';

function exampleFunction() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Also accessible here

```

### Local Scope:

```js
function exampleFunction() {
  let localVar = 'I am a local variable';
  console.log(localVar); // Accessible here
}

console.log(localVar); // Uncaught ReferenceError: localVar is not defined

```

### Block Scope (ES6):

```js
if (true) {
  let blockVar = 'I am a block-scoped variable';
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
```


## Hoisting in JavaScript

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. This means you can use variables and functions before you declare them in the code.

```js
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';

function hoistedFunction() {
  console.log('I am hoisted');
}
hoistedFunction(); // Works fine
```


### Hoisting with let and const
With let and const, hoisting still happens, but these variables are not initialized until the interpreter reaches the line of code where they are declared. This creates what is known as a Temporal Dead Zone (TDZ).

By using `let` and `const`, developers are encouraged to declare all variables at the top of their scope or at the point of their intended usage, making the code more readable and maintainable.

```js
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 5;

console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 10;

```

### Temporal Dead Zone (TDZ):
The TDZ is the time between the entering of the scope (e.g., the start of a function or block) and the actual declaration of the variable. Within this zone, accessing the variable will throw a ReferenceError.

### Best Practices

- Prefer let and const over var to avoid unintended consequences of hoisting.
- Declare variables at the top of their scope for clarity.
- Keep global variables to a minimum to avoid cluttering the global namespace.

### Common Pitfalls

- Not understanding the difference between var, let, and const.
- Accidentally overwriting global variables due to scope misunderstandings.
- Assuming that block-scoped variables (with let and const) will behave like function-scoped (var) variables.
