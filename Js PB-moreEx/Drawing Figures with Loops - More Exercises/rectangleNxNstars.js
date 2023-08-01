function rectangleNxNStars(input) {
  let n = Number(input.shift());
  for (let c = 1; c <= n; c++) {
    console.log(`${"*".repeat(n)}`);
  }
}
rectangleNxNStars([4]);
