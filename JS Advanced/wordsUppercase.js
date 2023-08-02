function wordsUppercase(text) {
  let result = text.toUpperCase().match(/\w+/g).join(", ");

  console.log(result);
}
wordsUppercase("HESS SDE,NEEs,e,");
