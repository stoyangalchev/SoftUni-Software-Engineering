function cleverLily(input) {
    let year = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toy = Number(input[2]);
    let toyCount = 0
    let stolenMoney = 0
    let savedMoney = 0
    let sumPlusTen = 10
    for (let i = 1; i <= year; i++) {
        if (i % 2 == 0) {
            stolenMoney++
            savedMoney+=sumPlusTen
            sumPlusTen+=10
            
            
        } else {
            toyCount++
        }
    }
    let totalToyPrice = toyCount*toy
    let sum = (savedMoney+totalToyPrice)-stolenMoney
    let dif =Math.abs(sum-machinePrice)
    if (sum>=machinePrice){
        console.log(`Yes! ${dif.toFixed(2)}`);
    }else {
        console.log(`No! ${dif.toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"])
cleverLily(["21","1570.98","3"])
