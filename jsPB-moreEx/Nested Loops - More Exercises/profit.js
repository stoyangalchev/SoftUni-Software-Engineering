function profit(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  let num5 = Number(input.shift());
  let sum = Number(input.shift());
  for (let i = 0; i <= num1; i++) {
    for (let j = 0; j <= num2; j++) {
      for (let k = 0; k <= num5; k++) {
        if (i * 1 + j * 2 + k * 5 === sum) {
          console.log(
            `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`
          );
        }
      }
    }
  }
}
profit([5, 3, 1, 7]);
