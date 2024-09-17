// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
for (const person of teamMembers) {
  console.log(person);
}

// Exercise 2: Remove the first member of the array.
teamMembers.shift(teamMembers);
console.log(teamMembers);

// Exercise 3: Remove the last member of the array.
teamMembers.pop(teamMembers);
console.log(teamMembers);

// Exercise 4: Add a new member "Alex" to the front of the array.
teamMembers.unshift('Alex');
console.log(teamMembers);

// Exercise 5: Append a new member "Linda" to the end of the array.
teamMembers.push('Linda');
console.log(teamMembers);

// Exercise 6: Create a new array that excludes the first two members.
const newArray = teamMembers.slice(2);
console.log(newArray);

// Exercise 7: Find the index of "Mike" in the array.
console.log(teamMembers.indexOf('Mike'));
console.log(newArray.indexOf('Mike'));

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
console.log(teamMembers.indexOf('Jake'));

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
teamMembers.splice(2, 1, 'Carol', 'Bruce');
console.log(teamMembers);

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
teamMembers.concat;

const anotherTeam = teamMembers.concat('Bob');
console.log(anotherTeam);

// Exercise 11: Using `slice` to Copy the Entire Array
const copyArray = teamMembers.slice();
console.log(copyArray);

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ['Tina', 'Dean'];

const concatArray = teamMembers.concat(newMembers);

console.log(concatArray);

// Exercise 13: Finding all occurrences of a John
let amount = 0;
for (const name of teamMembers) {
  if (name === 'John') {
    amount++;
  }
}
console.log(`There is ${amount} of John in the array teamMembers`);

// Exercise 14: Transforming members with `map` to be all written uppercase
const upperCaseNames = teamMembers.map((member) => member.toUpperCase());
console.log(upperCaseNames);