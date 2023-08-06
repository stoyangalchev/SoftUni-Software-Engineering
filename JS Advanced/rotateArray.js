function rotateArray(input, rot) {
  let cloneInput = input;
  let i = 0;
  while (i < rot) {
    let popedEl = cloneInput.pop();
    cloneInput.unshift(popedEl);
    i++;
  }

  console.log(cloneInput.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
