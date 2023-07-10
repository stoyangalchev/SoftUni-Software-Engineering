function serializeString(input) {
  let stringSplit = input[0].split("");
  let result = {};
  for (let i = 0; i < stringSplit.length; i++) {
    let char = stringSplit[i];
    result[char] = [];

    for (let index = 0; index < stringSplit.length; index++) {
      let element = stringSplit[index];

      if (char === element) {
        result[char].push(index);
      }
    }
  }

  for (let [key, value] of Object.entries(result)) {
    let valueJoin = value.join("/");
    console.log(key + ":" + valueJoin);
  }
}
serializeString(["avjavamsdmcalsdm"]);
// a:0/2/4/6
// b:1/3/5
