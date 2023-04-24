function passwordReset(input = []) {
  let password = input.shift();

  let temporary = "";
  let line = input.shift();
  while (line != "Done") {
    let [command, first, second] = line.split(" ");

    if (command === "Done") {
      return;
    }
    switch (command) {
      case "TakeOdd":
        {
          for (let i = 0; i < password.length; i++) {
            if (i % 2 !== 0) {
              temporary += password[i];
            }
          }
          password = temporary;
          console.log(password);
        }

        break;

      case "Cut":
        {
          let arr = Array.from(password)
            .splice(Number(first), Number(second))
            .join("");

          password = password.replace(arr, "");

          console.log(password);
        }
        break;
      case "Substitute": {
        if (!password.includes(first)) {
          console.log("Nothing to replace!");
        } else {
          while (password.includes(first)) {
            password = password.replace(first, second);
          }
        }
      }
    }

    line = input.shift();
  }
  console.log(`Your password is: ${password}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",

  "TakeOdd",

  "Cut 15 3",

  "Substitute :: -",

  "Substitute | ^",

  "Done",
]);
