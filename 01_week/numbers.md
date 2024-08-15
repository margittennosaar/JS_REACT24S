# Numbers

- 1
- 2
- -5
- 3.5
- 2000
- 2021
- -23.51

In JavaScript, these are all considered as **Numbers**. Whether they are negative or positive, or even if they include decimal points, they fall under the category of numbers.

## Converting numbers to strings

While it's not a common practice, transforming a number into a string is quite straightforward in JavaScript. This can be achieved using the `.toString()` method. Consider an example where we declare a variable named `answer`, assigned with the numerical value of `42`. Here's how you can convert this number to a string:

```js
let answer = 42;
let stringAnswer = answer.toString(); // Converts to "42"
```

In this case, stringAnswer will be a string representation of the number 42.

## NaN

Occasionally, you might come across `NaN` in your JavaScript code. This stands for **Not a Number** and typically indicates an issue within your code, often related to inappropriate data types being used in calculations. For instance, attempting to multiply a string with a number, which is generally not advisable, results in `NaN`:

```js
// Example of what not to do:
'abc' * 4; // This will yield NaN
```

Encountering `NaN` usually suggests a data type error, such as forgetting to convert a string into a number. A common scenario involves an object property that unintentionally holds `undefined` due to a typo, and then being used in calculations as if it were a valid number. This topic will be explored in greater detail in upcoming chapters, particularly when discussing objects and their properties.

## Convert strings to numbers

In JavaScript, converting strings into numbers is a fundamental and frequently encountered operation. This is typically achieved using the Number.parseInt() function. To illustrate, consider a scenario where we have a string str with the value "42" and we need to convert it into a numerical value.

```js
let str = '42';
let numericValue = Number.parseInt(str, 10); // Converts to 42
```

The Number.parseInt() function is part of the global Number object and is used to convert a string into an integer. It takes two arguments:

```js
Number.parseInt(string, radix);
```

The first parameter is the string that you'd like to convert into a number. The second argument is the `radix` that will be used in the conversion.
The `radix` is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is **10** which represents the decimal system.

Another example of radix is **2** which represents binary (a numerical system used by computers).

### Legacy notes

`Number.parseInt()` and `parseInt()` are exactly the same thing. Prefer `Number.parseInt()` over `parseInt()`

A while ago, parseInt(string, radix) was the only way to convert numbers, however, a while later, this function has been cloned under the Number object and became Number.parseInt(string, radix) in an effort to group similar functions together under their relevant object. They both work exactly the same.

## Use cases for converting to a number

Converting a string to a number is particularly useful in situations where user input or data retrieved from the Document Object Model (DOM) is in string format but needs to be processed numerically. For instance:

```js
let a = 10;
let b = '20'; // Initially a string
b = Number.parseInt(b, 10); // Now converted to a number
let sum = a + b; // Correctly adds up to 30
```

The `Number.parseInt()` method will try to convert the string it receives into a number. As you can see below, it
most often works when the string starts with a number and ends with non-numeric values:

```js
Number.parseInt('123abc', 10); // 123
Number.parseInt('5 meters', 10); // 5
```

## Number methods

While there are some other methods you could call on numbers, they are not very commonly used. What is commonly used, however,
is the `Math` object which contains methods such as `min()`, `max()` , `round()`, etc.

## ParseInt() and parseFloat()

`parseInt()` and `parseFloat()` are both JavaScript functions used to convert strings to numbers, but they handle the conversion differently:

**parseInt():**

- Converts a string to an integer.
- Parses up to the first non-integer character. If the string starts with a non-integer character, it returns NaN (Not a Number).
- Only reads whole numbers; decimal points and the numbers following them are ignored.
- Can take a second argument for the radix (base) of the number to be parsed (e.g., base 10 for decimal, base 16 for hexadecimal).

```js
parseInt('123.456'); // Returns 123
parseInt('abc123'); // Returns NaN
```

**parseFloat()**

- Converts a string to a floating-point number (decimal number).
- Parses up to the first non-numeric character. Like parseInt(), it returns NaN if the string doesn't start with a numeric character.
- Reads and includes decimal points and the numbers after them.

```js
parseFloat('123.456'); // Returns 123.456
parseFloat('abc123'); // Returns NaN
```

## Limiting Decimal Places in JavaScript

To limit the number of decimal places in JavaScript, you can use the toFixed() method, which converts a number to a string with a specified number of decimals.

```js
let number = 2.34567;
let limitedNumber = number.toFixed(2); // "2.35" as a string

// Convert back to a number if needed
limitedNumber = parseFloat(limitedNumber); // 2.35 as a number
```

This method is easy to use and very useful for formatting numbers for display. Remember that toFixed() returns a string, so you might need to convert it back to a number.

## JavaScript Math Object

The JavaScript Math object provides a collection of properties and methods for mathematical constants and functions. Unlike other global objects, Math is not a constructor, and all properties and methods of Math are static. This means they can be called without creating an instance of Math.

Common Math Methods:

- **Math.round(x):** Returns the value of x rounded to its nearest integer.
- **Math.ceil(x):** Returns the smallest integer greater than or equal to x.
- **Math.floor(x):** Returns the largest integer less than or equal to x.
- **Math.abs(x):** Returns the absolute value of x.
- **Math.sqrt(x):** Returns the square root of x.
- **Math.pow(x, y):** Returns the value of x to the power of y.
- **Math.min(…values):** Returns the lowest-valued number passed into it.
- **Math.max(…values):** Returns the highest-valued number passed into it.
- **Math.random():** Returns a pseudo-random number between 0 and 1.

```js
let num = -5.67;
let absolute = Math.abs(num); // 5.67
let rounded = Math.round(num); // -6
let ceiling = Math.ceil(num); // -5
let floor = Math.floor(num); // -6
```
