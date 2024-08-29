// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function calcAverage() {
    let sum = 0;
    let count = 0;
    let input;
    do {
        input = +prompt('Enter number (enter zero to terminate):')
        if (input !== 0) {
            sum += input;
            count++
        }
    } while (input != 0);
    console.log(sum / count)
}

calcAverage();