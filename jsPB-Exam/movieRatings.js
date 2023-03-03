function movieRatings(input) {
  let movieCount = Number(input.shift());

  let maxName = "";
  let maxRate = 0;
  let smallName = "";
  let smallRate = 0;
  let maxnum = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 1; i <= movieCount; i++) {
    let currentMovie = input.shift();
    let rate = Number(input.shift());
    sum += rate;
    if (rate > maxRate) {
      maxName = currentMovie;
      maxRate = rate;
    } else if (rate < maxnum) {
      maxnum = rate;
      smallName = currentMovie;
      smallRate = rate;
    }
  }
  let avarage = sum / movieCount;
  console.log(`${maxName} is with highest rating: ${maxRate.toFixed(1)}`);
  console.log(`${smallName} is with lowest rating: ${smallRate.toFixed(1)}`);
  console.log(`Average rating: ${avarage.toFixed(1)}`);
}
movieRatings([
  "3",
  "FastAndFurious",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);
