function personInfo(firstName: string, lastName: string, age: number): void {
  const person = {
    firstName,
    lastName,
    age,
  };

  console.log(person);
}
personInfo("Peter", "Pan", 20);
