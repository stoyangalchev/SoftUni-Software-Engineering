function diamond(input) {
  let n = Number(input.shift());
  let startingStars = 1;
  let height = Math.floor(n / 2);
  let middleDashes = "-";

  if (n % 2 === 0) {
    startingStars = 2;
    height = n / 2 - 1;
    middleDashes = "--";
  }
  let dashes = (n - startingStars) / 2;
if(n<=1){
    console.log("*");
    return;
}
else if(n==2){
console.log("**");
return;
}
else{
  console.log(
    "-".repeat(dashes) + "*".repeat(startingStars) + "-".repeat(dashes)
  );
  for (let row = 1; row < height; row++) {
    console.log(
      "-".repeat(dashes - row) +
        "*" +
        middleDashes +
        "*" +
        "-".repeat(dashes - row)
    );
    middleDashes += "--";
  }
  console.log(`*${middleDashes}*`);
  for (let row = 1; row < height; row++) {
    console.log(
      "-".repeat(row) +
        "*" +
        "-".repeat(n - 2 - row * 2) +
        "*" +
        "-".repeat(row)
    );
    middleDashes += "--";
  }
  console.log(
    "-".repeat(dashes) + "*".repeat(startingStars) + "-".repeat(dashes)
  );}
}
diamond(["2"]);
