function movieDay(input) {
  let timeForPictures = Number(input[0]);
  let countScene = Number(input[1]);
  let timeForScene = Number(input[2]);

  let terrain = timeForPictures * 0.15;
  let timeForAllScene = countScene * timeForScene;

  let needTime = terrain + timeForAllScene;

  let diff = Math.abs(timeForPictures - needTime);

  if (timeForPictures <= needTime) {
    console.log(`Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`);
  } else {
    console.log(
      `You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`
    );
  }
}
movieDay(["60", "15", "3"]);
