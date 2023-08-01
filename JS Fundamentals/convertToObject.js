function convertToObject(JSONdata) {
  let jsonFile = JSON.parse(JSONdata);
  for (let [key, value] of Object.entries(jsonFile)) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
