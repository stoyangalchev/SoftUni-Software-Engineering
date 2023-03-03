function christmasTree(input) {
  let n = Number(input.shift());
  console.log(" ".repeat(n + 1) + "|");
  for (let row = 0; row < n; row++) {
    console.log(
      " ".repeat(n - 1 - row) +
        "*".repeat(row + 1) +
        " | " +
        "*".repeat(row + 1)
    );
  }
}
christmasTree([6]);
