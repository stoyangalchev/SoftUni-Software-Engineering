function sameNumnber(input) {
  let sum = 0;
  let stringAs = String(input);
  let bolean = false;

  for (let i = 0; i <= stringAs.length; i++) {
    let firstNum = stringAs[0];

    for (let el of stringAs) {
      if (firstNum == el) {
        bolean = true;
      } else {
        bolean = false;
      }
    }
  }
  for (let el of stringAs) {
    sum += Number(el);
  }
  console.log(bolean);
  console.log(sum);
}
sameNumnber(2222223);
