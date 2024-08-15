# Operators

In JavaScript, operators are used to perform operations on variables and values. The language includes several types of operators, each serving a different purpose. Here, we'll focus on some of the basic arithmetic operators.

- Basic Arithmetic Operators
- Addition (+): Adds two numbers.
- Subtraction (-): Subtracts one number from another.
- Multiplication (\*): Multiplies two numbers.
- Division (/): Divides one number by another.

```js
let sum = 5 + 3; // equals 8
let difference = 5 - 3; // equals 2
let product = 5 * 3; // equals 15
let quotient = 5 / 3; // approximately equals 1.67
```

## The Modulus Operator

One particularly useful operator in JavaScript is the modulus operator (%). It returns the remainder of a division operation. This operator is often used to determine whether a number is even or odd, among other uses.

```js
let remainder1 = 8 % 2; // Results in 0 (8 is even)
let remainder2 = 7 % 2; // Results in 1 (7 is odd)
```

Here's how the division remainder of 8 % 2 is calculated:

8 / 2 = 4
4 / 2 = 2
=> division remainder is 0 because **8 = 4 \* 2 + 0**

Where as for 7 % 2:
7 / 2 = 3 (rounded)
=> division remainder is 1 because **7 = 3 \* 2 + 1**
The division remainder can be used to check whether a number is **even** or **odd**.
