function solve(firstP, secondP) {
  let sentence = secondP;
  let words = firstP.split(", ");
  words.forEach((x) => {
    sentence = sentence.replace("*".repeat(x.length), x);
  });
  console.log(sentence);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);


