function secretChat(input) {
  let text = input.shift();
  let line = input.shift();
  while (line != "Reveal") {
    let [command, index1, index2] = line.split(":|:");

    switch (command) {
      case "ChangeAll":
        {
          while (text.includes(index1)) {
            text = text.replace(index1, index2);
          }
          console.log(text);
        }
        break;
      case "Reverse":
        {
          if (text.includes(index1)) {
            text = text.replace(index1, "");
            index1 = index1.split("").reverse().join("");
            text += index1;
            console.log(text);
          } else {
            console.log("error");
          }
        }
        break;
      case "InsertSpace":
        {
          text = text.split("");
          text.splice(+index1, 0, " ");
          text = text.join("");
          console.log(text);
        }
        break;
    }

    line = input.shift();
  }
  console.log(`You have a new text message: ${text}`);
}
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
