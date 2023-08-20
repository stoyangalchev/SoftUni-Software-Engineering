function solve() {
  let text = document
    .getElementById("input")
    .value.split(".")
    .filter((e) => e);
  let output = [];

  for (i = 0; i < text.length; i++) {
    let sentence = text[i];
    if (sentence.length > 0) {
      if (i % 3 === 0 && i != text.length - 1) {
        output.push("<p>" + sentence + ".");
      } else if (i % 3 === 1 && i != text.length - 1) {
        output.push(sentence + ".");
      } else if (i % 3 === 2 && i != text.length - 1) {
        output.push(sentence + "." + "</p>");
      } else {
        if (i % 3 === 0 && i === text.length - 1) {
          output.push("<p>" + sentence + "." + "</p>");
        } else {
          output.push(sentence + "." + "</p>");
        }
      }
    }
  }
  document.getElementById("output").innerHTML = output.join(" ");
}
