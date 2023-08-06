function addAndRemoveElements(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] == "add") {
      result.push(i + 1);
    } else {
      result.pop();
    }
  }
  if (result.length <= 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}
addAndRemoveElements(["add", "add", "add", "adsd"]);
