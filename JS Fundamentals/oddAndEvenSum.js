function oddAndEvenSum(number) {
  let asString = String(number);
  let odd = 0;
  let even = 0;

    
  for (let el of asString) {
    let curent = Number(el);
    if (curent % 2 == 0) {
      even += curent;
    } else {
      odd += curent;
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435);
