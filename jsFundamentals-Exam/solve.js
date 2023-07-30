function strings(input) {
  let text = input.shift();

  let line = input.shift();

  while (line != "Done") {
    let [command, index1, index2] = line.split(" ");

    switch (command) {
      case "Change":
        {
          while (text.includes(index1)) {
            text = text.replace(index1, index2);
          }
          console.log(text);
        }
        break;

      case "Includes":
        {
          if (text.includes(index1)) {
            console.log("True");
          } else {
            console.log("False");
          }
        }
        break;

      case "End":
        {
          if (text.endsWith(index1)) {
            console.log("True");
          } else {
            console.log("False");
          }
        }
        break;

      case "Uppercase":
        {
          text = text.toUpperCase();
          console.log(text);
        }
        break;

      case "FindIndex":
        {
          let indexOF = text.indexOf(index1);
          console.log(indexOF);
        }
        break;

      case "Cut":
        {
          text = text.split("").splice(+index1, +index2).join("");
          console.log(text);
        }
        break;
    }

    line = input.shift();
  }
}
strings([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
console.log(",,,,,,,,,,");
strings([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
