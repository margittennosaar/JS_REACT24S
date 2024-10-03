# Asynchronous JavaScript

Asynchronous behavior in JavaScript allows programs to run other code while waiting for asynchronous operations (such as HTTP requests or file I/O) to complete. This ensures your web applications remain responsive and don’t "freeze" during long operations.

## Promises

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. Instead of passing callbacks into functions, promises allow you to attach callbacks after the operation is finished.

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Result"), 1000);
});
```

Promises have three states:

- **Pending:** The operation hasn’t completed yet.
- **Fulfilled:** The operation completed successfully.
- **Rejected:** The operation failed.

You can attach callbacks to promises using `.then()` for fulfillment, `.catch()` for rejection, and `.finally()` for code that should execute regardless of the promise's outcome.

```js
fetch("https://api.example.com")
  .then((response) => response.json()) // Handles success
  .catch((error) => console.error(error)) // Handles failure
  .finally(() => console.log("Operation finished")); // Runs no matter what
```

This structure provides a more readable and manageable approach to handling asynchronous logic.

## Async/Await

`async/await` is a modern way to work with promises. It allows asynchronous code to look like synchronous code, which makes it easier to read and manage.

- The `async` keyword marks a function as asynchronous, and it automatically returns a promise.
- The `await` keyword pauses the function execution until a promise is resolved, making it easy to work with the result.

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

`async/await` is ideal when working with multiple asynchronous tasks that depend on one another. It helps avoid deeply nested `.then()` chains.

## Callbacks

A callback is a function passed into another function as an argument. It’s often used in older JavaScript code to handle asynchronous operations.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => console.log(data));
```

### Callback hell

Callback hell, or the "Pyramid of Doom," happens when callbacks are nested within each other, making code difficult to read and maintain. This occurs when multiple asynchronous operations depend on the previous ones.

```javascript
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        console.log(d);
      });
    });
  });
});
```

Each function requires the result from the previous callback, leading to deeply nested structures that are difficult to understand and maintain. This pattern can result in code that is hard to follow, especially for error handling and debugging.

Refactoring Callback Hell with Promises

By using promises, you can avoid callback hell and make your code cleaner and easier to follow:

```js
getData()
  .then((result) => getMoreData(result))
  .then((result) => getMoreData(result))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

```js
async function processData() {
  try {
    let result = await getData();
    result = await getMoreData(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

processData();
```

## Fetching data

One of the most common asynchronous operations is fetching data from APIs. JavaScript provides two main ways to handle this: with promises or using async/await.

### Using promises

```js
function fetchData() {
  fetch("https://api.example.com/data")
    .then((response) => response.json()) // Process the response data
    .then((data) => console.log(data)) // Log the result
    .catch((error) => console.error("Error:", error)); // Handle errors
}

fetchData();
```

### Using async/await

```js
async function fetchDataAsync() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();
```

**When to Use Promises vs. Async/Await**
**Promises: **Suitable for simpler asynchronous tasks or when you need to chain multiple operations.
**Async/Await:** Provides cleaner, more readable code when dealing with complex asynchronous workflows, such as nested promises or extensive error handling.
Both approaches are valid, and the choice depends on your coding style and the complexity of the task.

## Error Handling in Asynchronous Code

When working with asynchronous code, it's important to properly handle errors:

- Promises use .catch() to handle any errors.
- Async/Await uses try...catch blocks for error handling.

```js
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

```