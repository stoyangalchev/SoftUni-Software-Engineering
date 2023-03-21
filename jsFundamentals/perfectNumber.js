function perfectNumber(num) {
  let result = 0;
  for (let i = 1; i < num; i++) {
    let curentNum = i;
    if (num % curentNum === 0) {
      result += curentNum;
    }
  }
  if (result === num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfectNumber(123456789);
