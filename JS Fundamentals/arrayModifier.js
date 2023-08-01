function arrayModifier(input) {
  let target = input.shift().split(" ").map(Number);
  let i = 0;

  let command = input[i++];

  while (command != "end") {
    let [commands, index1, index2] = command.split(" ");
    index1 = Number(index1);
    index2 = Number(index2);

    switch (commands) {
      case "swap":
        {
          let savedValue = target[index1];
          target.splice(index1, 1, target[index2]);
          target.splice(index2, 1, savedValue);
        }
        break;

      case "multiply":
        {
          let multiplication = target[index1] * target[index2];
          target.splice(index1, 1, multiplication);
        }
        break;

      case "decrease":
        {
          target = target.map((el) => {
            return el - 1;
          });
        }
        break;
    }

    command = input[i++];
  }
  console.log(target.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
