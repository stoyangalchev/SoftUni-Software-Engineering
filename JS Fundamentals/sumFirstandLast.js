function sumFirstandLast(numbers) {
  let firstEl = Number(numbers.shift());
  let lastEl = Number(numbers.pop());

  console.log(firstEl + lastEl);
}
sumFirstandLast(["20", "30", "40"]);
