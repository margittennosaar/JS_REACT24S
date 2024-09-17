# Arrays

Arrays in JavaScript are powerful and flexible structures for storing ordered collections of data. They allow you to group multiple values together in a single variable and perform various operations on them.

## Creating Arrays

```javascript
const emptyArray = [];
const numberArray = [1, 2, 3, 4];
const stringArray = ["a", "b", "c"];
const mixedArray = [1, "a", true, null];
```

## Method Categories

### Adding/Removing Elements

#### .push() / .pop()

- `.push()` adds one or more elements to the end of an array.
- `.pop()` removes the last element from an array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange"); // ['apple', 'banana', 'orange']
fruits.pop(); // ['apple', 'banana']
```

#### .unshift() / .shift()

- `.unshift()` adds one or more elements to the beginning of an array.
- `.shift()` removes the first element from an array.

```javascript
fruits.unshift("strawberry"); // ['strawberry', 'apple', 'banana']
fruits.shift(); // ['apple', 'banana']
```

#### .splice()

- `.splice()` adds, removes, or replaces elements at a specified index.

```javascript
fruits.splice(1, 0, "mango"); // Inserts 'mango' at index 1
```

### Searching Elements

#### .indexOf() / .lastIndexOf()

- `.indexOf()` returns the first index of a specified element.
- `.lastIndexOf()` returns the last index of a specified element.

```javascript
const numbers = [1, 2, 3, 2, 1];
numbers.indexOf(2); // 1
numbers.lastIndexOf(2); // 3
```

#### .find()

`.find()` returns the first element that matches a condition specified in a callback function.

```javascript
const found = numbers.find((element) => element > 2);
console.log(found); // 3
```

#### .filter()

`.filter()` returns a new array containing all elements that match a condition specified in a callback function.

```javascript
const filtered = numbers.filter((element) => element > 1);
console.log(filtered); // [2, 3, 2]
```

### Transforming Arrays

#### .map()

`.map()` creates a new array by applying a function to every element in the array.

```javascript
const doubled = numbers.map((element) => element * 2);
console.log(doubled); // [2, 4, 6, 4, 2]
```

#### .reduce()

`.reduce()` reduces all elements in an array to a single output value using a reducer function.

```javascript
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 9
```

### Iterating Over Arrays

#### .forEach()

`.forEach()` executes a provided function once for each element in the array.

```javascript
numbers.forEach((element) => console.log(element)); // Logs each number
```

#### For Loop

A `for` loop gives you more control over the iteration process. You can use it to iterate through an array by index.

```javascript
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]); // Logs each color to the console
}
```

#### for...of Loop

The `for...of` loop is a simpler syntax for iterating over array elements directly.

```javascript
for (const color of colors) {
  console.log(color); // Logs 'red', 'green', 'blue'
}
```

### Checking conditions

#### .some() / .every():

`.some()` checks if at least one element passes a test implemented by a provided function.
`.every()` checks if all elements pass a test implemented by a provided function.

```js
const array = [1, 2, 3, 4, 5];

// Check if the array contains any elements greater than 3
const hasElementsGreaterThanThree = array.some((element) => element > 3);

console.log(hasElementsGreaterThanThree); // Output: true
```

```js
const array = [1, 2, 3, 4, 5];

// Check if all elements in the array are less than 6
const allElementsLessThanSix = array.every((element) => element < 6);

console.log(allElementsLessThanSix); // Output: true
```

### Common mistakes and best practices

#### Forgetting Return in .map() and .filter()

- Always include a return statement inside the callback function for `.map()` and `.filter()` to return the desired value.

#### Using .splice() Incorrectly

- Be cautious with `.splice()` as it modifies the original array. Always check the index and the number of elements you intend to remove or add.

#### Mutating vs. Non-Mutating Methods

- Mutating methods (`push`, `pop`, `splice`, `shift`, `unshift`) change the original array.
- Non-mutating methods (`map`, `filter`, `reduce`) return a new array or value and do not change the original array.

**Best Practice:** Prefer non-mutating methods to avoid unexpected side effects unless you specifically need to change the original array.
