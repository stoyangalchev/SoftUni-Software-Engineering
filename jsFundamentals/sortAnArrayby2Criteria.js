function sortAnArrayby2Criteria(arr) {
  const twoCriteriaSort = (a, b) => a.length - b.length || a.localeCompare(b);
  arr.sort(twoCriteriaSort);
  console.log(arr.join("\n"));
}

sortAnArrayby2Criteria(["test", "Deny", "omen", "Default"]);
