function division(num) {
  let biggerDivision = 0;

  if (num % 0 == 0) {
    biggerDivision = 0;
  }
  if (num % 2 == 0) {
    biggerDivision = 2;
  }
  if (num % 3 == 0) {
    biggerDivision = 3;
  }
  if (num % 6 == 0) {
    biggerDivision = 6;
  }
  if (num % 7 == 0) {
    biggerDivision = 7;
  }
  if (num % 10 == 0) {
    biggerDivision = 10;
  }
  if (biggerDivision <= 0) {
    console.log("Not divisible");
  }
  if (
    biggerDivision == 2 ||
    biggerDivision == 3 ||
    biggerDivision == 6 ||
    biggerDivision == 7 ||
    biggerDivision == 10
  ) {
    console.log(`The number is divisible by ${biggerDivision}`);
  }
}
division(0);

function rounding(num) {
  let div = [10, 7, 6, 3, 2];

  for (i = 0; i <= 5; i++) {
    let a = div.shift();

    if (num % a === 0) {
      console.log(`The number is divisible by ${a}`);

      break;
    } else if (i === 5) {
      console.log(`Not divisible`);
    }
  }
}
rounding(0);
function rounding(num) {
  if (num % 10 == 0) {
    console.log(`The number is divisible by 10`)
  }else
  if (num % 7 == 0) {
    console.log(`The number is divisible by 7`)
  }else
  if (num % 6 == 0) {
    console.log(`The number is divisible by 6`)
  }else
  if (num % 3 == 0) {
    console.log(`The number is divisible by 3`)
  }else
  if (num % 2 == 0) {
    console.log(`The number is divisible by 2`)
  }else {
    console.log("Not divisible");
  }
}
rounding(0);

