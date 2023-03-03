function challengeTheWedding(input) {
  let man = Number(input.shift());
  let woman = Number(input.shift());
  let table = Number(input.shift());
  let counter = 0;
  let result = "";
  for (let i = 1; i <= man; i++) {
    for (let j = 1; j <= woman; j++) {
      counter++;
      result += `(${i} <-> ${j}) `;
      if (counter === table) {
        console.log(result);
        return;
      }
    }
  }
  console.log(result);
}
challengeTheWedding([2, 2, 3]);
