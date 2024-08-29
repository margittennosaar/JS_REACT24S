// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function evenNumbers() {
    let evenCount = 0;

    for (let counter = 0; counter < 20; counter++) {
        let input = Number(prompt('Enter a number'));
        if (input % 2 === 0) {
            evenCount++;
        }
    }
    console.log('There was', evenCount, 'even numbers');
}

evenNumbers();