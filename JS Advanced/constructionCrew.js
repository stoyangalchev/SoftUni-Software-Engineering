function constructionCrew(obj) {
  let result = obj;

  if (result.dizziness == true) {
    let weight = result.weight;
    let sum = weight * 0.1;

    result.levelOfHydrated += sum;
    result.dizziness = false;
  }

  return result;
}
console.log(constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
}));

constructionCrew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});
