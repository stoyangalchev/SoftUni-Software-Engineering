function house(input) {
    let n = Number(input.shift());
    let startingStars = 1;
    if (n % 2 === 0) {
      startingStars = 2;
    }
      else{
        startingStars=1
    }
    for (let row = 0; row < Math.ceil(n / 2); row++) {
      console.log(`${"-".repeat((n - startingStars) / 2 - row)}${"*".repeat(startingStars+2*row)}${"-".repeat((n-startingStars)/2-row)}`);
    }
    for (let row = 0; row < Math.ceil(n / 2); row++){
      console.log(`|${"*".repeat(n-2)}|`);
    }
  }
house(["2"]);
