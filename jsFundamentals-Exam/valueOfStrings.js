function valueOfStrings(input) {
  let string = input[0];
  let command = input[1];
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    let element = string[index];
    let codeOfEelement = Number(element.charCodeAt());
    switch (command) {
      case "LOWERCASE":
        {
          if (codeOfEelement >= 97 && codeOfEelement <= 122) {
            sum += codeOfEelement;
          }
        }
        break;
      case "UPPERCASE":
        {
          if (codeOfEelement >= 65 && codeOfEelement <= 90) {
            sum += codeOfEelement;
          }
        }
        break;
    }
  }
  console.log(`The total sum is: ${sum}`);
}
valueOfStrings(["AC/DC", "UPPERCASE"]);
