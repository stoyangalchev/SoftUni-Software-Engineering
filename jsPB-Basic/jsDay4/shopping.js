function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideoCard = videoCard * 250;//500= 250*2
    let priceProcessor = processor * (priceVideoCard * 0.35); //175=175*1
    let priceRam = ram * (priceVideoCard * 0.10);//150=50*3

    let sum = priceVideoCard + priceProcessor + priceRam;//825
    if (videoCard > processor) {
        sum = sum * 0.85
    }
    let leftMoney = Math.abs(budget - sum);

    if (budget>=sum){
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva more!`);
    }
    



}
shopping(["920.45","3","1","1"])