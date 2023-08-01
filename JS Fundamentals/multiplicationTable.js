function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    let times = i;
    let result = number * i;

    console.log(`${number} X ${times} = ${result}`);
  }
}
multiplicationTable(5);
