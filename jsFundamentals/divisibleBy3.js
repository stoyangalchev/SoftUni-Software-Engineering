function divisibleBy3() {
  for (let i = 1; i <= 100; i++) {
    let currentNum = i;
    if (currentNum % 3 === 0) {
      console.log(currentNum);
    }
  }
}
divisibleBy3();
