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
