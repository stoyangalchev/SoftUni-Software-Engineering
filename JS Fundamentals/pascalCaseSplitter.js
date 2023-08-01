function pascalCaseSplitter(input) {
  let text = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
      text += ` ${input[i]}`;
    } else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
      text += input[i];
    }
  }

  console.log(text.substring(1).split(" ").join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

function solve(input) {
  let splitInput = input.split("");
  let saverWord = "";

  let length = splitInput.length;

  for (let i = 0; i < length; i++) {
    let firstChar = splitInput[i];
    let secondChar = splitInput[i + 1];

    if (firstChar.charCodeAt() >= 65 && firstChar.charCodeAt() <= 90) {
      saverWord += ` ${firstChar}`;
    } else if (firstChar.charCodeAt() >= 97 && firstChar.charCodeAt() <= 122) {
      saverWord += `${firstChar}`;
    } else if (
      secondChar.charCodeAt() >= 97 &&
      secondChar.charCodeAt() <= 122
    ) {
      saverWord += secondChar;
    }
  }
  console.log(saverWord.trim().split(" ").join(", "));
}
solve("HolSreDor");