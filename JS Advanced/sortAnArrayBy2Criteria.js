function sortAnArrayBy2Criteria(input) {
  function sortBylengthandsortByAsci(x) {
    return x.sort((a, b) => {
      return a.length - b.length || a.localeCompare(b);
    });
  }

  return sortBylengthandsortByAsci(input).join("\n");
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

console.log(sortAnArrayBy2Criteria(["test", "Deny", "omen", "Default"]));
