# Conditions in JavaScript

Conditional statements are a vital part of JavaScript programming, enabling your code to make decisions based on certain conditions. They allow you to execute different code blocks depending on whether a condition is true or false.

## `if` Statement

The `if` statement checks if something is true. If it is, the code inside the `if` block runs.

**Syntax:**
```javascript
if (condition) {
  // Code to execute if condition is true
}
```

**Example:**
```javascript
if (age >= 18) {
  console.log("You are an adult");
}
```
This code will output "You are an adult" if the age is 18 or more.

## `if...else` Statement

The `if...else` statement gives two options: one for when the condition is true, and another for when it’s false.

**Syntax:**
```javascript
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

**Example:**
```javascript
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```
If the age is 18 or older, it says "You are an adult." If not, it says "You are a minor."

## `if...else if...else` Statement

This allows you to check more than one condition, giving you more options to choose from.

**Syntax:**
```javascript
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the above conditions are true
}
```

**Example:**
```javascript
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}
```
This checks the score and gives a grade based on how high it is.

## Logical Operators

Logical operators allow you to combine multiple conditions into a single `if` statement.

### `&&` (AND) Operator

The `&&` operator checks if all conditions are true. The entire condition is true only if every individual condition is true.

**Example:**
```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You are allowed to enter.");
}
```
In this example, both conditions must be true for the message "You are allowed to enter." to be displayed.

### `||` (OR) Operator

The `||` operator checks if at least one condition is true. The entire condition is true if any of the individual conditions are true.

**Example:**
```javascript
let age = 16;
let hasPermission = true;

if (age >= 18 || hasPermission) {
  console.log("You can proceed.");
} else {
  console.log("You cannot proceed.");
}
```
In this example, if either the age is 18 or older, or the person has permission, they can proceed.

### `!` (NOT) Operator

The `!` operator inverts the value of a condition. If a condition is true, `!` makes it false, and if it’s false, `!` makes it true.

**Example:**
```javascript
let isRaining = false;

if (!isRaining) {
  console.log("You can go outside.");
}
```
In this example, because `isRaining` is false, `!isRaining` is true, so the message "You can go outside." is displayed.

## Ternary Operator

The ternary operator is a shorthand way to write an `if...else` statement. It’s useful for simple conditions that you want to evaluate in a single line.

**Syntax:**
```javascript
condition ? expressionIfTrue : expressionIfFalse
```

**Example:**
```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";

console.log(message); // Outputs: "Adult"
```
In this example, if `age` is 18 or older, `message` is set to "Adult"; otherwise, it is set to "Minor".

## Identifying Even and Odd Numbers

To determine if a number is even or odd, use the modulus operator (`%`). This operator returns the remainder of a division.

**Example:**
```javascript
// Checking for even numbers
8 % 2; // 0, hence even
10 % 2; // 0, hence even

// Checking for odd numbers
7 % 2; // 1, hence odd
9 % 2; // 1, hence odd
```
A remainder of 0 indicates an even number, while 1 indicates an odd number.

## The `switch` Statement

The `switch` statement is an alternative to `if...else` statements when you need to compare a single expression against multiple values. It's especially useful for handling a variable with several possible constant values.

**Syntax:**
```javascript
switch (expression) {
  case value1:
    // Code to execute when expression equals value1
    break;
  case value2:
    // Code to execute when expression equals value2
    break;
  // Additional cases as needed
  default:
    // Code to execute if no case is matched
}
```

**Example:**
```javascript
let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
}
```
This code will print the name of the day based on the value of the `day` variable.

## Simplifying Conditions

### Using Return Statements

Functions can be simplified by using `return` statements to exit the function early, eliminating the need for `else` blocks.

**Example:**
```javascript
function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
```
||

This function will immediately exit with `true` if the age is 18 or more; otherwise, it returns `false`.

### Returning Booleans Directly

When returning a boolean value, you can simplify the function further by returning the condition directly.

**Example:**
```javascript
function isEligibleForVote(age) {
  return age >= 18;
}
```
This returns `true` or `false` based on whether the age meets the condition.

## When to Use `switch` vs `if`

- **Use `switch`:** When comparing the same variable or expression to many constant values.
- **Use `if` statements:** When evaluating different conditions or ranges of values.

## Understanding Ligatures

Ligatures are visual enhancements in some code editors where certain character combinations are displayed as a single glyph. For example:
- `>=` (greater than or equal to)
- `<=` (less than or equal to)
- `===` (strict equality)
- `!==` (strict inequality)