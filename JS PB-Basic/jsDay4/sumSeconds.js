function sumSeconds(input) {

  let firstSecs = Number(input[0]);
  let secondSecs = Number(input[1]);
  let thirdSecs = Number(input[2]);

  let totalTime = firstSecs + secondSecs + thirdSecs;

  let minutes = Math.floor(totalTime / 60)
  let seconds = totalTime % 60

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`)
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(["14", "12", "10"]);

