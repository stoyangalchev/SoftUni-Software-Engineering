function stringSubstring(word, sentance) {
  let wordlow = word.toLowerCase();
  let lowCase = sentance.toLowerCase().split(" ");
  let bull = true;
  for (let el of lowCase) {
    if (el === wordlow) {
      bull = false;
      console.log(el);
      break;
    }
  }
  if (bull) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("thE", "JavaScript is the best programming language");

//"{word} not found!"
