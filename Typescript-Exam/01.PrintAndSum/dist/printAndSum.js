function calculateSumAndNumbers(start, end) {
    let sum = 0;
    let numbers = "";
    for (let i = start; i <= end; i++) {
        sum += i;
        numbers += i + " ";
    }
    return { sum, numbers };
}
function printSumAndNumbers(start, end) {
    const { sum, numbers } = calculateSumAndNumbers(start, end);
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printSumAndNumbers(5, 10);
printSumAndNumbers(0, 26);
printSumAndNumbers(50, 60);
