function bitcoinMining(input) {
  const bitcoin = 11949.16; //lv
  const gramofGold = 67.51; //lv

  let bitcoinCount = 0;
  let sumGold = 0;
  let dayCount = 0;
  let firstDAyBit = "";
  let boughtBitcoin = 0;
  let sumBitcoins = 0;
  for (let i = 0; i < input.length; i++) {
    let currentDayGold = Number(input[i]);
    let convertGold = currentDayGold * gramofGold; //6751
    dayCount++;
    if (dayCount === 3) {
      convertGold *= 0.7;
    }
    sumGold += convertGold; // 6751   +   13.502 +    20.253
    if (sumGold >= bitcoin) {
      bitcoinCount++;
      firstDAyBit += dayCount;
      boughtBitcoin = Math.floor(sumGold / bitcoin);
      sumGold = sumGold - bitcoin * boughtBitcoin;
      sumBitcoins += boughtBitcoin;
    }
  }

  if (bitcoinCount != 0) {
    console.log(`Bought bitcoins: ${sumBitcoins}`);
    console.log(`Day of the first purchased bitcoin: ${firstDAyBit.charAt(0)}`);
    console.log(`Left money: ${sumGold.toFixed(2)} lv.`);
  } else {
    console.log(`Bought bitcoins: ${bitcoinCount}`);

    console.log(`Left money: ${sumGold.toFixed(2)} lv.`);
  }
}
bitcoinMining([50, 100]);
function bitcoinMinings(array) {
  let bitcoin = 11949.16;
  let gold = 67.51;
  let totalSum = 0;
  let day = 0;
  let firstDay = 0;
  let boughtBitcoin = 0;
  let countBitcoin = 0;
  let sumBitcoins = 0;

  for (let index = 0; index < array.length; index++) {
    day++;
    let element = array[index];
    if (day % 3 == 0) {
      element = element * 0.7;
    }
    let singleDayEarning = element * gold;
    totalSum += singleDayEarning;

    if (totalSum >= bitcoin) {
      countBitcoin++;
      boughtBitcoin = Math.floor(totalSum / bitcoin);
      totalSum = totalSum - bitcoin * boughtBitcoin;
      sumBitcoins += boughtBitcoin;
    }
    if (countBitcoin == 1) {
      firstDay = day;
    }
  }

  console.log(`Bought bitcoins: ${sumBitcoins}`);
  if (firstDay != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}
bitcoinMinings([3124.15, 504.212, 2511.124]);
