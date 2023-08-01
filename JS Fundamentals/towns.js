function towns(input) {
  let object = {};

  for (let i = 0; i < input.length; i++) {
    let splitedEL = input[i].split(" | ");
    let town = splitedEL[0];
    let latitude = Number(splitedEL[1]).toFixed(2);
    let longitude = Number(splitedEL[2]).toFixed(2);
    object.town = town;
    object.latitude = latitude;
    object.longitude = longitude;
    console.log(object);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
