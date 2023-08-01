function censoredWords(str, word) {
  while (str.includes(word)) {
    str = str.replace(word, "*".repeat(word.length));
  }
  console.log(str);
}
censoredWords(
  "A small sentence with some words",

  "small"
)