function weatherForecast(input) {
  let currentWeather = input[0];

  if (currentWeather === "sunny") {
    console.log("It's warm outside!");
  } else if (currentWeather === "cloudy") {
    console.log("It's cold outside!");
  } else {
    console.log("It's cold outside!");
  }
}
weatherForecast(["snowy"]);
