# JavaScript writing rules

Writing clean, maintainable, and error-free JavaScript code is essential for all developers. Following these rules will help improve readability, reduce bugs, and ensure your code is easier to understand and maintain over time.

## Use `"use strict"`

Start your JavaScript files or functions with `"use strict"`. This helps enforce stricter error handling and catches common coding mistakes early.

- Catches quiet errors: Some errors that might pass silently in normal mode (like assigning to undeclared variables) will be caught in strict mode.
- Improves performance: JavaScript engines can optimize code better when strict mode is used.
- Prepares for the future: Strict mode prevents the use of some features that might become problematic with future JavaScript versions.

``` js
"use strict";
function exampleFunction() {
  // Strict mode applies here
}
```

## Adopt consistent formatting

- **Indentation:** Use 2 or 4 spaces for indentation consistently. Never mix spaces and tabs.
- **Semicolons:** Always use semicolons to terminate statements. While JavaScript can automatically insert semicolons, this can lead to unexpected errors.
- **Curly Braces:** Always use curly braces `{}` for blocks, even for single-line `if`, `for`, or `while` statements. This prevents potential errors if you add more code later.

## Declare variables properly

Use `let` and `const`: Always declare variables using `let` for variables that may change, and `const` for variables that should not change. Avoid using `var` to prevent scoping issues.


## Naming conventions

Using clear and consistent names for your variables, functions, and classes makes your code more understandable.

- Variables and Functions: Use `camelCase` (e.g., `userName`, `getUserInfo`).
- Classes: Use `PascalCase` for classes (e.g., Car, `UserProfile`).
- Constants: Use `UPPER_CASE` for constants (e.g., `MAX_VALUE`).

```js
const MAX_SPEED = 120; // Constant
function calculateDistance() { // camelCase function
  // Function logic
}
class Vehicle { // PascalCase class
  // Class logic
}
```

## Functions

Keep functions small and focused

- Single responsibility: A function should ideally do only one thing and do it well. This keeps your code modular and easier to test or maintain.
- Limit parameters: Try to avoid functions with too many parameters. If a function requires multiple parameters, consider passing them as an object.

## Commenting and Documentation

Comments should explain why something is done, not what is being done (which should be clear from the code itself).

- Write meaningful comments: Avoid redundant comments like` // Add 1 to x` for a line of code like `x += 1`;. Instead, explain the reasoning behind complex code.
- Consider documentation: For larger projects, use tools like JSDoc to automatically generate documentation from your comments.

```js
// Calculate the area of a rectangle
function calculateArea(width, height) {
  return width * height;
}
```


## Error Handling

- Use `try...catch` for Error Handling: Wrap blocks of code that might throw an error in a `try...catch` block to prevent the entire application from crashing.
- Throw Custom Errors: When necessary, throw custom error messages that are clear and informative, making debugging easier.

```js
try {
  let result = riskyOperation();
} catch (error) {
  console.error('An error occurred:', error.message);
}
```

## Use ESLint

- Automate code checking: Use ESLint to automatically check your code for style violations, syntax errors, and other common mistakes.
- Integrate with editor: Most code editors (like VSCode) can integrate with ESLint so that you can see linting errors and warnings as you code.

## Avoid magic numbers and strings

Magic numbers (or strings) are unexplained values that appear in code without context. Instead, assign these values to descriptive variables or constants.

```js
// Bad practice
let discount = total * 0.2; // What does 0.2 mean?

// Good practice
const DISCOUNT_RATE = 0.2;
let discount = total * DISCOUNT_RATE;
```

## Refactor regularly and keep learning

- Refactor often: As your understanding of the project grows, revisit your code and improve its structure, readability, and performance.
- Stay updated: The JavaScript ecosystem evolves rapidly. Keep up with the latest features, patterns, and best practices to write better code.
