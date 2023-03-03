function invalidNumber(input) {
    let number = Math.trunc(Number(input[0]));
    let min = 100;
    let max = 200;

      if ((number != 0) && ((number <= 100) || (number >= 200))) {
        console.log("invalid");
    }
}
invalidNumber(["-1"])