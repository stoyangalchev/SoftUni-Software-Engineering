function convertToJSON(firstName, lastName, hairColor) {
  let object = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  let toJSONSTRING = JSON.stringify(object);
  console.log(toJSONSTRING);
}
convertToJSON("George", "Jones", "Brown");
