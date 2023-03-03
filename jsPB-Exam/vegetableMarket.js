function vegetableMarket(input) {
    let pricForKgVeg = Number(input[0]);
    let priceForKgFru = Number(input[1]);
    let allVegkg = Number(input[2]);
    let allFrukg = Number(input[3]);

    let vegCost = pricForKgVeg * allVegkg;
    let fruitCost = priceForKgFru * allFrukg;

    let vegFruitCost = vegCost + fruitCost
    let sumToEuro = vegFruitCost / 1.94
    console.log(sumToEuro.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10])//Зеленчуците струват – 0.194лв. * 10кг. = 1.94лв.
//Плодовете струват – 19.4лв. * 10кг.  = 194лв.
//Общо – 195.94лв. = 101евро