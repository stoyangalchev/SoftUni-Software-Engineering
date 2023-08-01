function personInfo(firstName, lastName, age) {
  let result = {};
  result.firstName = firstName;
  result.lastName = lastName;
  result.age = age;
  return result;
}
console.log(personInfo("Peter", "Pan", "20"));
