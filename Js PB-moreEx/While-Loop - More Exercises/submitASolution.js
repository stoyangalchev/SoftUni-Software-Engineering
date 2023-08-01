function submitASolution(input) {
  let letter = input.shift();

  let nIsAppeared = false;
  let cIsAppeared = false;
  let oIsAppeared = false;
  let printLine = "";
  let newWord = "";

  while (letter !== "End") {
    let firstCondition =
      letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
    let secondCondition =
      letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

    if (firstCondition || secondCondition) {
      if (letter === "n") {
        if (nIsAppeared) {
          newWord += letter;
        }
        nIsAppeared = true;
      } else if (letter === "c") {
        if (cIsAppeared) {
          newWord += letter;
        }
        cIsAppeared = true;
      } else if (letter === "o") {
        if (oIsAppeared) {
          newWord += letter;
        }
        oIsAppeared = true;
      } else {
        newWord += letter;
      }

      if (nIsAppeared && cIsAppeared && oIsAppeared) {
        printLine += `${newWord} `;
        newWord = "";
        nIsAppeared = false;
        cIsAppeared = false;
        oIsAppeared = false;
      }
    }

    letter = input.shift();
  }

  console.log(printLine);
}

submitASolution([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
