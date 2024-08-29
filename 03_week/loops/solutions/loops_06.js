// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function averageNumbers() {
    let sum = 0;
    let count = 0;

    while (true) {
        let input = +prompt('Enter a number');
        sum += input;
        count++;
        let shouldContinue = prompt('Do you want to continue? (y/n)');

        if (shouldContinue === 'n') {
            break;
        }
    }
    let average = sum / count
    console.log('average is: ', average)
}

averageNumbers()