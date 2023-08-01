function passwordGeserator(input) {
  let n = Number(input.shift());
  let l = Number(input.shift());

  let pass = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 97; k <= 97 + l - 1; k++) {
        for (let m = 97; m <= 97 + l - 1; m++) {
          for (let s = 1; s <= n; s++) {
            if (i < s && j < s) {
              pass += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(
                m
              )}${s} `;
            }
          }
        }
      }
    }
  }
  console.log(pass);
}
passwordGeserator(["4", "2"]);
