function specialNumbers(input) {
    let n = Number(input[0]);
    let output = "";
 
    for (let i = 1111; i <= 9999; i++) {
      let numberAsString = i.toString();
      for (let index = 0; index < numberAsString.length; index++) {
        let currentNum = Number(numberAsString[index]);
        if (n % currentNum !== 0) {
          break;
        }
        if (index === 3 && n % currentNum === 0) {
          output += i + " ";
        }
      }
    }
    console.log(output);
  }
specialNumbers(["16"])