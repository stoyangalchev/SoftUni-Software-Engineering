function townPopulation(input: string[]): void {
  for (let el of input) {
    let [town, population] = el.split(" <-> ");
    console.log(`${town} : ${population}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",

  "Montana <-> 20000",

  "New York <-> 10000000",

  "Washington <-> 2345000",

  "Las Vegas <-> 1000000",
]);
