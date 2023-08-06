function biggerHalf(input) {
  let sorted = input.sort((a, b) => a - b);
  let half = sorted.length / 2;
  if (input.length % 2 == 0) {
    return sorted.slice(half, sorted.length);
  } else {
    return sorted.slice(half, sorted.length);
  }
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
