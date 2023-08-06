// function solve(n, k) {
//   let result = [1];

//   for (let i = 1; i < n; i++) {
//     let tempSum = 0;
//     let reversed = JSON.parse(JSON.stringify(result)).reverse();

//     for (let j = 0; j < reversed.length; j++) {
//       let current = Number(reversed[j]);
//       if (k === j) {
//         break;
//       }

//       tempSum += current;
//     }
//     result.push(tempSum);
//   }
//   return result;
// }
// console.log(solve(6, 3));

function numbers(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let sumOfThree = 0;
    for (let j = 1; j <= k; j++) {
      let num = arr[i - j];
      if (num !== undefined) {
        sumOfThree += num;
      }
    }
    arr.push(sumOfThree);
  }

  return arr;
}
console.log(numbers(6, 3));
