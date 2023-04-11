function oddOccurrences(str) {
  let result = new Map();
  let word = str.toLowerCase().split(" ");

  for (let el of word) {
    if (!result.has(el)) {
      result.set(el, 0);
    }
    let oldValue = result.get(el);
    result.set(el, oldValue + 1);
  }

  let filtred = Array.from(result).filter(([a, b]) => {
    return b % 2 !== 0;
  });
  let buffer = "";
  for (let [key, value] of filtred) {
    buffer += key + " ";
  }
  console.table(buffer);
}
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
