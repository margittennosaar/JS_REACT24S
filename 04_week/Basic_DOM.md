# DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. 

## Invoking Functions from HTML

You can call JavaScript functions directly from HTML elements using event attributes. This method is simple and is often used for basic interactions.

```html
<button onclick="showAlert()">Click Me</button>

<script>
  function showAlert() {
    alert('Button clicked!');
  }
</script>
```

This button, when clicked, invokes the `showAlert` JavaScript function, displaying an alert box.

## Invoking Functions from JavaScript

A more flexible way to handle events is to use JavaScript to programmatically attach event listeners to elements. This method is preferred because it keeps your HTML clean and your JavaScript code separate, making it easier to maintain and debug.

```javascript
document.getElementById('myButton').addEventListener('click', function () {
  alert('Button clicked!');
});
```

An event listener is added to a button with the ID `myButton`. When the button is clicked, an anonymous function displays an alert.

## Differences and Best Practices

- **Separation of concerns**: Using `addEventListener` in JavaScript separates the HTML structure from the behavior, adhering to the best practices of web development.
- **Flexibility**: JavaScript-invoked functions allow for more complex interactions, such as attaching multiple event listeners to the same element or dynamically adding or removing event listeners.
- **Compatibility**: While inline event handlers (`onclick` in HTML) are widely supported and easy to use, they offer less flexibility and can lead to code that is harder to maintain and debug.

## Common event types

Understanding common events is essential for handling user interactions on web pages. Here are some of the most common event types you should know:

1. **`click`**: Triggered when an element is clicked.
2. **`dblclick`**: Triggered when an element is double-clicked.
3. **`mouseover`**: Fired when the mouse pointer is moved over an element.
4. **`mouseout`**: Fired when the mouse pointer moves out of an element.
5. **`mousedown`**: Occurs when the mouse button is pressed on an element.
6. **`mouseup`**: Occurs when a mouse button is released over an element.
7. **`mousemove`**: Triggered when the mouse is moved.
8. **`keydown`**: Fired when a key is pressed down.
9. **`keyup`**: Occurs when a key is released.
10. **`keypress`**: Triggered when a key is pressed and released.
11. **`change`**: Fired for `<input>`, `<select>`, and `<textarea>` when a change to the element's value is committed by the user.
12. **`submit`**: Occurs when a form is submitted.
13. **`load`**: Fired when a resource and its dependent resources have finished loading.
14. **`unload`**: Triggered when the document or a child resource is being unloaded.
15. **`resize`**: Occurs when the document view or an element has been resized.
16. **`scroll`**: Fired when the document view or an element is scrolled.
17. **`focus`**: Triggered when an element has received focus.
18. **`blur`**: Fired when an element has lost focus.

These events cover a wide range of user actions, from mouse clicks and keyboard input to form submissions and page loading. By understanding and handling these events, you can make your web pages more interactive.

## DOM selectors

DOM selectors allow you to select and manipulate HTML elements. Here are some commonly used selectors:

### getElementById

Selects a single element by its ID. This is the fastest way to select an element and is commonly used when you know the specific element ID.
```js
const element = document.getElementById('uniqueElement');
```

### getElementsByClassName

Selects all elements that share a specific class name. Returns a live HTMLCollection (an array-like object).
```js
const elements = document.getElementsByClassName('sharedClass');
```

### getElementsByTagName

Selects all elements with a specific tag name (like div, p, span). Also returns a live HTMLCollection.

```js
const elements = document.getElementsByTagName('div');
```

### querySelector

Selects the first element that matches a specified CSS selector (like `.class`, `#id`, `tag`).

```js
const firstMatch = document.querySelector('.classSelector');
```

### querySelectorAll

Selects all elements that match a specified CSS selector and returns a static NodeList (a list of nodes that does not automatically update).

```js
const allMatches = document.querySelectorAll('p.highlight');
```

## Manipulating content and attributes

Once you've selected elements, you can change their content and attributes.


### InnerText vs. TextContent

- `innerText`: Gets or sets the visible text content of a node and its descendants.
- `textContent`: Gets or sets the full text content of a node and its descendants, including text inside <script> and <style> elements.

```js
element.innerText = 'Visible text';
element.textContent = 'Full text, including script and style elements';
```

### innerHTML

`innerHTML` allows getting and setting the HTML content of an element.

```js
element.innerHTML = '<strong>Bold text</strong>';
```

NOTE! Be cautious with `innerHTML` due to the risk of Cross-Site Scripting (XSS) attacks. Never use innerHTML with untrusted data. Use `innerHTML` for static content or when you control the HTML content completely, ensuring it is sanitized.


## Additional DOM manipulation methods

Here are some additional methods that beginners should know:

### `appendChild`

Adds a new child element to a specified parent element.

```js
const parentElement = document.getElementById('parent');
const newElement = document.createElement('div');
newElement.textContent = 'New Child';
parentElement.appendChild(newElement);
```

### `removeChild`

Removes a specified child element from a parent element.

```js
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');
parentElement.removeChild(childElement);
```

### `setAttribute` and `getAttribute`

`setAttribute` sets the value of an attribute on an element, while `getAttribute` retrieves the value of an attribute.

```js
const element = document.getElementById('myElement');
element.setAttribute('class', 'newClass'); // Sets the class attribute
const classValue = element.getAttribute('class'); // Retrieves the class attribute value
```

### `classList` Methods

The `classList` property provides methods to add, remove, toggle, and check for the presence of classes on an element.

```js
const element = document.getElementById('myElement');

// Add a class
element.classList.add('newClass');

// Remove a class
element.classList.remove('oldClass');

// Toggle a class
element.classList.toggle('active');

// Check if a class exists
if (element.classList.contains('active')) {
  console.log('Element is active');
}
```
