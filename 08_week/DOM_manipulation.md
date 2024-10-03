# DOM Manipulation in JavaScript

DOM manipulation is a key aspect of enhancing web page interactivity using JavaScript. It allows you to dynamically add, remove, and modify elements and their styles, making your webpage more responsive and interactive.

## `classList` object

The `classList` property returns a live `DOMTokenList` collection of the class attributes of an element. It provides methods to easily add, remove, or toggle CSS classes.

### Adding a class

To add a class to an element:

```javascript
document.getElementById('myElement').classList.add('myClass');
```

This will add the class `myClass` to the element with the ID `myElement`.

### Removing a class

To remove a class from an element:

```javascript
document.getElementById('myElement').classList.remove('myClass');
```

This removes `myClass` from the element.

### Toggling a class

To toggle a class (add it if it's not there, remove it if it is):

```javascript
document.getElementById('myElement').classList.toggle('myClass');
```

This is useful for interactive features like expanding menus or dark mode toggling.

---

## Handling `window.onscroll` events

The `window.onscroll` event triggers whenever the window is scrolled. You can use it to create dynamic effects such as hiding or revealing elements as the user scrolls.

```javascript
window.onscroll = function () {
  // Add your logic here
};
```

For instance, you can add a class to a navigation bar when the user scrolls past a certain point:

```javascript
window.onscroll = function () {
  const navbar = document.getElementById('navbar');
  if (window.pageYOffset > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
```

---

## Manipulating styles with JavaScript

JavaScript allows direct manipulation of element styles using the `style` property.

```javascript
document.getElementById('myElement').style.backgroundColor = 'blue';
```

This changes the background color of the element with the ID `myElement` to blue.

### Setting multiple styles

To set multiple styles, chain them together:

```javascript
const myElement = document.getElementById('myElement');
myElement.style.color = 'white';
myElement.style.backgroundColor = 'black';
myElement.style.padding = '10px';
```

This changes the text color, background color, and padding of `myElement`.

---

## Throttling and Debouncing

### Throttling

Throttling limits the number of times a function can be executed over a period. This is useful for events that fire rapidly, such as scroll or resize events.

```javascript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
```

### Use Cases for Throttling:
- **Scroll events**: Avoid running heavy functions repeatedly during scrolling.
- **Resize events**: Limit the number of times resizing logic is executed.

---

### Debouncing

Debouncing delays the execution of a function until a specified amount of time has passed since the last invocation. It’s useful for events like typing or resizing where you want the function to run only after a pause in activity.

```javascript
function debounce(func, delay) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}
```

### Use Cases for debouncing:
- **Search input**: Delay making API calls until the user stops typing.
- **Window resize**: Avoid running expensive layout recalculations during resizing.

---

## Summary

- **DOM manipulation**: Use methods like `classList.add()`, `remove()`, and `toggle()` to manipulate CSS classes dynamically.
- **Style manipulation**: Directly modify element styles using JavaScript’s `style` property.
- **Scroll events**: Modify elements based on the user’s scroll position with `window.onscroll`.
- **Throttling & debouncing**: Optimize event handling with these techniques to enhance performance in scroll, resize, and input events.