function argumentInfo(...spred) {
  let argiments = spred;
  let obj = [];

  argiments.forEach((x) => {
    let typeOf = typeof x;

    obj.push([[typeOf], x]);
  });

  obj.forEach((key, value) => {
    console.log(`${key[0]}: ${key[1]}`);
  });

  let counterObject = {};
  obj.forEach((x) => {
    if (!counterObject.hasOwnProperty(x[0])) {
      counterObject[x[0]] = 1;
    } else {
      counterObject[x[0]] += 1;
    }
  });

  Object.entries(counterObject)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .forEach((x) => {
      console.log(`${x[0]} = ${x[1]}`);
    });
}

argumentInfo({ name: "bob" }, 3.333, 9.999);
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
