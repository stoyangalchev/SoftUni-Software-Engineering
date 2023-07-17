function asciiSumator(input) {
  let first = input.shift().charCodeAt();
  let second = input.shift().charCodeAt();
  let firstChar = Math.min(first, second);
  let secondChar = Math.max(first, second);

  let stringchar = input.shift().split("");

  let sum = 0;
  for (let i = firstChar; i < secondChar; i++) {
    let el = i;
    let stringCharCode = String.fromCharCode(el);

    for (let j = 0; j < stringchar.length; j++) {
      let char = stringchar[j];
      if (stringCharCode == char) {
        sum += el;
      }
    }
  }
  console.log(sum);
}
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);

asciiSumator(["?", "E", "@ABCEF"]);

asciiSumator([".", "@", "dsg12gr5653feee5"]);
