function averageNumber(input) {
    let index = 0;
    let n = Number(input[index++]);
    let sum = 0;
 
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[index++]);
        sum += currentNum;
    }
 
    let avgSum = sum / n;
    console.log(avgSum.toFixed(2));
}
averageNumber([2,6,4]);
