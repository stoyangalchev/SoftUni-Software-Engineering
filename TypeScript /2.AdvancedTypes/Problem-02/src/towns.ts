function towns(input: string[]) {
  let towns = [];

  for (let element of input) {
    let [town, latitude, longitude] = element.split(" | ");

    let townObj = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(townObj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
