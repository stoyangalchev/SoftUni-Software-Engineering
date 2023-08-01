function accountBalance(input) {
    let index = 0;
    let curentIndex = input[index]
    let totalSum = 0

    while (curentIndex !== "NoMoreMoney") {
        let asNumber = Number(curentIndex);

        if (asNumber < 0) {
       
            console.log(`Invalid operation!`);
            break;
        }else if (asNumber>0){
            console.log(`Increase: ${asNumber.toFixed(2)}`);
        }

        totalSum += asNumber;

        index++
        curentIndex = input[index];

    }
    console.log(`Total: ${totalSum.toFixed(2)}`);

}
accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])