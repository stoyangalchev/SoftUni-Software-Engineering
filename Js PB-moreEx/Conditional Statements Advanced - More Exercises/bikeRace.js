function bikeRace(input) {
  let juniorCount = Number(input[0]);
  let seniorCount = Number(input[1]);
  let trace = input[2];
  let countPeople = juniorCount + seniorCount;
  let sum = 0;
  switch (trace) {
    case "trail":
      {
        sum = juniorCount * 5.5 + seniorCount * 7;
        sum = sum * 0.95;
      }
      break;
    case "cross-country":
      {
        sum = juniorCount * 8 + seniorCount * 9.5;
        sum = sum * 0.95;
        if (countPeople >= 50) {
          sum *= 0.75;
        }
      }
      break;
    case "downhill":
      {
        sum = juniorCount * 12.25 + seniorCount * 13.75;
        sum = sum * 0.95;
      }
      break;
    case "road":
      {
        sum = juniorCount * 20 + seniorCount * 21.5;
        sum = sum * 0.95;
      }
      break;
  }
  console.log(sum.toFixed(2));
}
bikeRace([3, 40, "road"]);
