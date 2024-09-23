# Objects

JavaScript objects are a core part of the language, allowing you to store collections of data and model more complex entities. Objects group related data (properties) and functions (methods) together, providing a flexible structure to represent real-world entities.

## Creating objects

An object can be created using object literals, constructor functions, or the `class` syntax introduced in ES6.

### Object literals

The simplest way to create an object is by using object literals. This allows you to define the object's properties inside curly braces `{}`.

```js
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 30,
};
```

### Constructor functions

A constructor function allows you to create multiple objects with the same structure.

```js
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const person1 = new Person('Alice', 'Johnson', 30);
```

### ES6 Class Syntax

In ES6, classes were introduced as a cleaner way to create objects and manage inheritance.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
const person2 = new Person('Bob', 'Smith', 28);
```

## Accessing and modifying properties

You can access properties using the **dot notation** or the **bracket notation**. Properties can be updated or added in a similar manner.

### Dot Notation

Dot notation is straightforward and commonly used when the property name is a valid identifier.

```javascript
console.log(person.firstName); // Accesses 'Jane'
person.age = 31; // Modifies age to 31
```

### Bracket Notation

Bracket notation allows you to use variables or property names with spaces or special characters.

```javascript
const property = 'firstName';
console.log(person[property]); // Accesses 'Jane'

person['age'] = 32; // Modifies age to 32
console.log(person['age']); // Outputs: 32

```

## Adding new properties
You can add new properties to an object dynamically using both notations.

```javascript
person.email = 'jane.doe@example.com';
console.log(person.email); // Outputs: jane.doe@example.com

```

```javascript
person['phoneNumber'] = '123-456-7890';
console.log(person['phoneNumber']); // Outputs: 123-456-7890
```

## Removing properties
The `delete` operator removes properties from an object.

```javascript
delete person.age;
console.log(person.age); // Outputs: undefined
```

## Object methods

A method is a function stored as a property in an object. Methods can access other properties of the object using the `this` keyword.

```javascript
const person = {
  firstName: 'Jane',
  greet: function () {
    console.log(`Hello, my name is ${this.firstName}.`);
  },
};

person.greet(); // Outputs: Hello, my name is Jane.
```
In ES6, you can define methods using shorthand syntax.

```javascript
const person = {
  firstName: 'Jane',
  greet() {
    console.log(`Hello, my name is ${this.firstName}.`);
  },
};

person.greet(); // Outputs: Hello, my name is Jane.

```

## Prototypes and Inheritance

JavaScript uses prototypal inheritance, where objects can inherit properties and methods from a prototype.

```js
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
};

const person1 = new Person('Alice', 'Johnson', 30);
person1.greet(); // Outputs: Hello, my name is Alice Johnson.

```

## The `this` Keyword

The `this` keyword refers to the object the function belongs to. It is used to access properties and methods within an object. The value of `this` can change depending on the context in which the function is called.

```js
const person = {
  firstName: 'Jane',
  greet() {
    console.log(this); // Refers to the person object
  },
};

person.greet();

```


## JSON and object conversion

JavaScript objects can be converted to JSON format and back, which is common when exchanging data between a server and a client.

```js
const jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"firstName":"Jane","lastName":"Doe","age":30}


const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Outputs: { firstName: 'Jane', lastName: 'Doe', age: 30 }

```
## Summary

- Dot Notation is the simplest way to access and modify object properties when you know the property name.
- Bracket Notation is more flexible and allows access to properties with special characters or spaces, or when property names are stored in variables.
- Methods are functions stored as object properties, and they can access the object's properties using the `this` keyword.
- Prototypes allow objects to inherit properties and methods, following the concept of prototypal inheritance.
- JSON conversion is useful for transmitting data between systems, and JavaScript provides `JSON.stringify()` and `JSON.parse()` for easy conversions.
