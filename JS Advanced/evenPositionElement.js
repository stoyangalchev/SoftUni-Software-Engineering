function evenPositionElement(arr) {
  let result = [];
  arr.forEach((el, index) => {
    if (index % 2 == 0) {
      result.push(el);
    }
  });
  console.log(result.join(" "));
}
evenPositionElement(["20", "30", "40", "50", "60"]);
