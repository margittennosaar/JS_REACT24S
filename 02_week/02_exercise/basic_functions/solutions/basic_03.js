// Write a function named greetUser that takes a user's name as a parameter and returns a greeting message.

function greetUser(name) {
    // double quotes   return "Hello, " + name + "!"; 
    // single quotes   return 'Hello, ' + name + '!'; 
    return `Hello, ${name}!`;
}

const greetUser = (name) => `Hello, ${name}!`;

// sample usage - do not modify
console.log(greetUser("Alice")); // Returns "Hello, Alice!"
console.log(greetUser("Bob")); // Returns "Hello, Bob!"
