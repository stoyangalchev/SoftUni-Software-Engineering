function vegetableMarket(input) {
  let priceF = Number(input[0]);
  let priceV = Number(input[1]);
  let kgF = Number(input[2]);
  let kgV = Number(input[3]);

  let sum1 = priceF * kgF;
  let sum2 = priceV * kgV;

  let allSumLv = sum1 + sum2;

  let allsumEuro = allSumLv / 1.94;

  console.log(allsumEuro.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10]);
