function charactersInRange(first, second) {
  let firstChar = Math.min(first.charCodeAt(), second.charCodeAt());
  let secondChar = Math.max(first.charCodeAt(), second.charCodeAt());
  let result = [];
  
  for (let i = firstChar + 1; i < secondChar; i++) {
    let curent = String.fromCharCode(i);
    result.push(curent);
  }
  console.log(result.join(" "));
}
charactersInRange("C", "#");
