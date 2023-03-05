function rightPlace(str, char, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === "_") {
      currentChar = char;
    }
    result += currentChar;
  }
  let matched = result === word ? "Matched" : "Not Matched";
  console.log(matched);
}
rightPlace("Str_ng", "o", "Strong");
