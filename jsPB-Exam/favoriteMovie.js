function favoriteMovie(input) {
  let index = 0;
  let command = input[index];
  index++;
  let asciSum = 0;
  let bestMovie = Number.MIN_SAFE_INTEGER;
  let bestName = "";
  let counter = 0;

  while (command != "STOP") {
    counter++;
    asciSum = 0;
    let movieName = command;
    let lengthMovie = movieName.length;

    for (i = 0; i < lengthMovie; i++) {
      curentChar = movieName.charCodeAt(i);
      if (curentChar >= 65 && curentChar <= 90) {
        asciSum += curentChar - lengthMovie;
      } else if (curentChar >= 97 && curentChar <= 122) {
        asciSum += curentChar - lengthMovie * 2;
      } else {
        asciSum += curentChar;
      }
    }
    let currentSum = asciSum;

    if (currentSum > bestMovie) {
      bestName = movieName;
      bestMovie = currentSum;
    }

    if (counter === 7) {
      console.log(`The limit is reached.`);
      break;
    }

    command = input[index];
    index++;
  }
  console.log(
    `The best movie for you is ${bestName} with ${bestMovie} ASCII sum.`
  );
}
favoriteMovie(["The maze", "School story 2", "Shrek 2", "Ice age", "STOP"]);
