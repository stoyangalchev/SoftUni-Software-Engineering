function countStringOccurrences(text, word) {
  let splited = text.split(" ");
  let counter = 0;
  for (let el of splited) {
    if (el === word) {
      counter += 1;
    }
  }
  console.log(counter);
}
countStringOccurrences(
  "softuni is great place for learning new programming languages",

  "softuni"
);
