function arrayManipulator(arr, commands) {
  let newArr = [];
  for (let el of commands) {
    let [command, index, element] = el.split(" ");
    switch (command) {
      case "add":
        arr.splice(index, 0, +element);
        break;
      case "addMany":
        let currentEl = 0;
        let removeFirst = el.split(" ");
        for (let i = removeFirst.length - 1; i >= 2; i--) {
          currentEl = removeFirst[i];
          arr.splice(index, 0, +currentEl);
        }
        break;
      case "contains":
        console.log(arr.indexOf(+index));
        break;
      case "remove":
        arr.splice(index, 1);
        break;
      case "shift":
        let position = +index;
        for (let i = 0; i < position; i++) {
          let firstEl = arr.shift();
          arr.push(firstEl);
        }
        break;
      case "sumPairs":
        let els = arr.reduce(function (total, el, index) {
          if (index % 2 === 0) {
            total.push(+arr[index] + (+arr[index + 1] || 0));
          }
          return total;
        }, []);
        arr = els;

        break;
      case "print":
        for (let el of arr) {
          newArr.push(el);
        }
        break;
    }
  }

  console.log("[ " + newArr.join(", ") + " ]");
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
