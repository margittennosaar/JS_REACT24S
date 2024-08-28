# Loops

Loops are a fundamental programming concept in JavaScript that allows you to repeat a block of code multiple times. They are particularly useful for iterating over collections, repeating tasks, and automating repetitive processes.

## Types of loops in JS

- `for` Loop
- `while` Loop
- `do...while` Loop
- `for...in` Loop
- `for...of` Loop


## The `for` Loop

The `for` loop is one of the most common loops in JavaScript. It is used when you know in advance how many times you want to execute a block of code.

```js
for (initialization; condition; increment) {
  // Code to be executed on each iteration
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```
This loop starts with `i = 0` and runs until `i` is less than 5. After each iteration, `i` is incremented by 1. 

## The while Loop

The `while` loop continues to execute a block of code as long as the specified condition is true. It is useful when the number of iterations is not known beforehand.

```js
while (condition) {
  // Code to be executed as long as the condition is true
}
```

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
This loop will continue to execute as long as `i` is less than 5. After each iteration, `i` is incremented by 1.

## The do-while Loop

The `do-while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once before checking the condition.

```js
do {
  // Code to be executed
} while (condition);
```

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

This loop will run the code block once before checking if `i` is less than 5. If the condition is true, it will repeat the loop. 

## The for...in Loop

The `for...in` loop is used to iterate over the properties of an object. It loops through all enumerable properties of an object.

```js
for (key in object) {
  // Code to be executed for each property
}

```

```js
const person = { name: 'Alice', age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

```
This loop iterates over each property in the `person` object and prints the key-value pairs. 

## The for...of Loop

The `for...of` loop creates a loop iterating over iterable objects (like arrays, strings, or NodeLists). It provides a simpler way to loop through array elements.


```js
for (variable of iterable) {
  // Code to be executed for each element
}
```

```js
let fruits = ['apple', 'banana', 'pear'];
for (let fruit of fruits) {
  console.log(fruit);
}

```

This loop iterates over each element in the `fruits` array and prints it. 

## Loop Control Statements

Control statements are used to manage the behavior of loops.

1) `**break**`: Terminates the loop entirely.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

2) `**continue**`: Skips the current iteration and continues with the next one.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

```

## Common mistakes to avoid

1) Infinite Loops: Ensure that your loop has a valid exit condition to avoid infinite loops that can crash your program.
2) Off-by-One Errors: Be mindful of your loop conditions (< vs. <=) to avoid iterating one too many or too few times.
3) Misusing for...in with Arrays: Avoid using for...in for arrays; instead, use for...of to iterate over array elements.
4) Not Initializing Variables: Ensure loop variables are properly initialized to avoid unexpected behavior.