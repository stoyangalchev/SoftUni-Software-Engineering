function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkDollCount = Number(input[2]);
    let gummyBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let count = puzzleCount + talkDollCount + gummyBearCount + minionsCount + truckCount;
    let sum = puzzleCount * 2.60 + talkDollCount * 3 + gummyBearCount * 4.10 + minionsCount * 8.20 + truckCount * 2;

    if (count >= 50) {
        sum = sum * 0.75;
    }
    sum = sum * 0.90
    let difference = Math.abs(tripPrice - sum)
    if (sum >= tripPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else if (sum< tripPrice) {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])