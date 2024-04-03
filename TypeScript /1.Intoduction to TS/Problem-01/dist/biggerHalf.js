function biggerHalf(input) {
    let result = input.sort((a, b) => {
        return a - b;
    });
    let half = result.length / 2;
    let finalResult = result.slice(half);
    console.log(finalResult);
}
biggerHalf([4, 7, 2, 5]);
