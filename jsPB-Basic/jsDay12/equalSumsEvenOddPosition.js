function equalSumsEvenOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = ''
    for (let currentNum = start; currentNum <= end; currentNum++) {
        let curentNumAsStr = currentNum.toString();
        let evenSum = 0;
        let oddSum = 0;
        for (let index = 0; index < curentNumAsStr.length; index++) {
            let currentDigit = Number(curentNumAsStr[index])
            let position = index + 1

            if (position % 2 === 0) {
                evenSum += currentDigit
            } else {
                oddSum += currentDigit
            }

        } if (evenSum === oddSum) {
            result += `${curentNumAsStr} `

        }

    } console.log(result);

}
equalSumsEvenOddPosition(["100000", "100050"])