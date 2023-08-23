function listProcessor(arrrayInput) {
  let array = [];
  for (let el of arrrayInput) {
    let [command, text] = el.split(" ");

    if (command == "add") {
      add(text);
    } else if (command == "remove") {
      remove(text);
    } else if (command == "print") {
      print();
    }
  }

  function add(x) {
    array.push(x);
  }
  function remove(x) {
    array = array.filter((el) => el !== x);
  }
  function print() {
    console.log(array.join(","));
  }
}
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);

function foo(input) {
  let arr = [];

  let obj = {
    add: (str) => arr.push(str),
    remove: (str) => (arr = arr.filter((x) => x !== str)),
    print: () => console.log(arr.join(",")),
  };

  input.forEach((x) => {
    const [command, value] = x.split(" ");

    obj[command](value);
  });
}
foo(["add pesho", "add george", "add peter", "remove peter", "print"]);
