function sumOfNumbers(n, m) {
    let nAsNum = Number(n);
    let mAsNum = Number(m);
    let sumOfNumbers = 0;
    for (let i = nAsNum; i <= mAsNum; i++) {
        sumOfNumbers += i;
    }
    console.log(sumOfNumbers);
}
sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");
