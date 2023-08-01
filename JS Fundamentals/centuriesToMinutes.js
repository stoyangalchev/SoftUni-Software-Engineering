function centuriesToMinutes(centuries) {
  let year = 100 * centuries;
  let day = Math.trunc(year * 365.2422);
  let hour = 24 * day;
  let minutes = hour * 60;

  console.log(`${centuries} centuries = ${year} years = ${day} days = ${hour} hours = ${minutes} minutes`);
}
centuriesToMinutes(1);
