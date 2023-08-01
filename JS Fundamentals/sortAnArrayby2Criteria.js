function sortAnArrayby2Criteria(arr) {
  const twoCriteriaSort = (a, b) => a.length - b.length || a.localeCompare(b);
  arr.sort();

  console.log(arr.join("\n"));
}

sortAnArrayby2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
function solve(input) {
  let sortedByLength = (x) => {
    return x.sort((a, b) => a.length - b.length);
  };

  function sortedByAlfa(x) {
    return x.sort((a, b) => a.localeCompare(b));
  }

  let result = sortedByLength(sortedByAlfa(input));
  return result.join("\n");
}
console.log(solve(["test", "Deny", "omen", "Default"]));
