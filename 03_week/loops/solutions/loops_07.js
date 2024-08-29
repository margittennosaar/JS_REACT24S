/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */
function myFunction() {

    let sum = 0;
    let smallest = Infinity;
    let biggest = -Infinity;
    const count = 10

    for (let i = 0; i < count; i++) {
        let input = +prompt(`Enter number:`);

        sum += input;

        if (input < smallest) {
            smallest = input;
        }

        if (input > biggest) {
            biggest = input;
        }
    }

    const average = sum / count;

    console.log(`Sum of the numbers: ${sum}. Average of the numbers: ${average}. Smallest number: ${smallest}. Biggest number: ${biggest}`);
}

myFunction() 