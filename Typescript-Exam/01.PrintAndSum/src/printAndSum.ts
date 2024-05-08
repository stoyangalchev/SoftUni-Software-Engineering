interface SumAndNumbers {
  sum: number;
  numbers: string;
}

function calculateSumAndNumbers(start: number, end: number): SumAndNumbers {
  let sum = 0;
  let numbers = "";
  for (let i = start; i <= end; i++) {
    sum += i;
    numbers += i + " ";
  }
  return { sum, numbers };
}

function printSumAndNumbers(start: number, end: number): void {
  const { sum, numbers } = calculateSumAndNumbers(start, end);
  console.log(numbers);
  console.log(`Sum: ${sum}`);
}

printSumAndNumbers(5, 10);
printSumAndNumbers(0, 26);
printSumAndNumbers(50, 60);
