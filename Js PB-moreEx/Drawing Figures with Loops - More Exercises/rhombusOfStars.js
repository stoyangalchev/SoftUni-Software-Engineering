function rhombusOfStars(input) {
  let n = Number(input.shift());
  for (let row = 0; row < n - 1; row++) {
    console.log(" ".repeat(n - 1 - row) + "* ".repeat(row + 1));
  }

  for (let i = n - 1; i >= 0; i--) {
    console.log(" ".repeat(n - 1 - i) + "* ".repeat(i + 1));
  }
}
rhombusOfStars([4]);

