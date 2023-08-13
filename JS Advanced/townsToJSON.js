function townsToJSON(input) {
  let first = input.shift();
  let result = [];
  for (let el of input) {
    let obj = {
      Town: "",
      Latitude: 0,
      Longitude: 0,
    };
    let [town, latitude, longitude] = el.split(" | ");
    let towns = town.split("| ").join("");
    let latitudes = latitude;
    let longitudes = longitude.split(" |").join("");

    obj.Town = towns;
    obj.Latitude = JSON.parse(Number(latitudes).toFixed(2));
    obj.Longitude = JSON.parse(Number(longitudes).toFixed(2));

    result.push(obj);
  }
  console.log(JSON.stringify(result));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
