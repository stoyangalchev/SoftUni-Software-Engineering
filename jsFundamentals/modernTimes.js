function modernTimes(input) {
  let splitedInput = input.split(" ");

  for (let el of splitedInput) {
    if (el.includes("#") && el.length > 1) {
      let letter = el.slice(1);
      if (letter.match("^[a-zA-Z]+$")) {
        console.log(letter);
      }
    }
  }
}
modernTimes(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
