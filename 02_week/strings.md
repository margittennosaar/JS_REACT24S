# Strings

JavaScript strings are a fundamental data type used for storing and manipulating text. You can declare strings using either single quotes (' '), double quotes (" "), or backticks (``).

```js
'This is a string';
'This is another string!';
`This is also a string!`;
```

## Template Literals

Beyond single and double quotes, JavaScript offers template literals, which are enclosed by backticks ``. Template literals provide advanced features like string interpolation and multi-line strings.

```js
`This is a template string`;
```

### String Interpolation

String interpolation allows you to embed expressions, like variables, within a string. This is achieved using `${expression}` syntax:

```js
let language = 'JavaScript';
`I am learning ${language}`; // Output: "I am learning JavaScript";
```

Remember that string interpolation only works with **backticks**. If you ever try it and it doesn't work, double-check that you're using backticks rather than single or double-quotes.

### Multiline strings

Template literals support multi-line strings, which wasn't possible with single or double quotes:

```js
let multiLineString = `This is a multiline
string in JavaScript
using template literals.`;
```

## String Properties and Methods

JavaScript strings come with a set of properties and methods that allow you to manipulate and query them.

### .length

Use `.length` to find the number of characters in a string:

```js
let text = 'Hello World';
console.log(text.length); // Output: 11
```

### Converting to Upper and Lower case

- **`.toUpperCase()`:** Converts all characters to upper case.
- **`.toLowerCase()`:** Converts all characters to lower case.

```js
let shout = 'quiet'.toUpperCase(); // "QUIET"
let whisper = 'LOUD'.toLowerCase(); // "loud"
```

### Extracting Substrings

The `substring()` method is used to extract a portion of a string:

```js
let phrase = 'JavaScript';
let sub = phrase.substring(1, 4); // "ava"
```

The method takes two arguments, `startIndex` and `endIndex`, where `endIndex` is optional.

### Character Access

Access individual characters in a string using `bracket notation []` :

```js
let language = 'JavaScript';
console.log(language[0]); // "J"
```

### Concatenation with the Plus Operator

Use the `+` operator to concatenate strings:

```js
let fullName = 'John' + ' ' + 'Doe'; // "John Doe"
```

#### The += Operator

The `+=` operator appends a string to an existing one:

```js
let message = 'Hello';
message += ' World'; // "Hello World"
```

### Trimming Whitespace

The `trim()` method removes whitespace from both ends of a string:

```js
let name = ' Sam Blue ';
console.log(name.trim()); // "Sam Blue"
```

### Searching and Checking Strings

- **`.startsWith()`:** Checks if a string starts with specified characters.
- **`.endsWith()`:** Checks if a string ends with specified characters.
- **`.includes()`:** Checks if a string contains a specified substring.

```js
let sentence = 'Learning JavaScript is fun!';
console.log(sentence.startsWith('Learning')); // true
console.log(sentence.endsWith('fun!')); // true
console.log(sentence.includes('JavaScript')); // true
```

### Splitting Strings

The `split()` method divides a string into an array of substrings:

```js
let data = 'apple,orange,banana';
let fruits = data.split(','); // ["apple", "orange", "banana"]
```

### Replacing Substrings

- **`.replace()`:** Replaces the first occurrence of a specified value.
- **`.replaceAll()`:** Replaces all occurrences of a specified value.

```js
let text = 'Apples are round, and apples are juicy.';
let newText = text.replace('Apples', 'Oranges'); // "Oranges are round, and apples are juicy."
```

### Extracting Substrings with slice()

The `slice()` method returns a portion of a string:

```js
let str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(10, 19)); // "brown fox"
```
