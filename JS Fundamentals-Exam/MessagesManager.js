function messagesManager(input) {
  let capacity = input.shift();

  let line = input.shift();
  let array = {};
  let counter = 0;
  while (line != "Statistics") {
    let [command, index1, index2, index3] = line.split("=");

    switch (command) {
      case "Add":
        {
          let count = +index2 + +index3;
          if (!array.hasOwnProperty(index1)) {
            array[index1] = count;
          }
          if (array[index1] >= capacity) {
            console.log(`${index1} reached the capacity!`);
            counter++;
            delete array[index1];
          }

          count = 0;
        }

        break;
      case "Message":
        {
          if (array.hasOwnProperty(index1)) {
            array[index1] += 1;
          }
          if (array.hasOwnProperty(index2)) {
            array[index2] += 1;
          }
          if (!array.hasOwnProperty(index1)) {
            array[index1] = 1;
          }
          if (!array.hasOwnProperty(index2)) {
            array[index2] = 1;
          }
          if (array[index1] >= capacity) {
            console.log(`${index1} reached the capacity!`);
            counter++;
            delete array[index1];
          }
          if (array[index2] >= capacity) {
            console.log(`${index2} reached the capacity!`);
            counter++;
            delete array[index2];
          }
        }

        break;

      case "Empty":
        {
          if (index1 === "All") {
            array = {};
            counter = 0;
          } else {
            array[index1] = 0;
          }
        }

        break;
    }
    if (array[index1] == 0) {
      delete array[index1];
    }
    if (array[index2] == 0) {
      delete array[index2];
    }

    line = input.shift();
  }
  let length = Object.getOwnPropertyNames(array).length;
  if (length == 0) {
    console.log(`Users count: ${counter}`);
  } else {
    console.log(`Users count: ${length}`);
  }

  for (let [keys, value] of Object.entries(array)) {
    console.log(`${keys} - ${value}`);
  }
}
messagesManager([
  "20",
  "Add=Mark==20",
  "Add=Berry=0=0",
  "Add=Clark=0=0",
  "Empty=Berry",
  "Add=Blake=0=0",
  "Add=Michael=0=0",
  "Add=Amy=0=0",

  "Statistics",
]);
function messagesManager(inputs) {
  let Info = function (send, received) {
    this.send = send;
    this.received = received;
  }

  var pairs = {};
  var maxCapacity = inputs.shift();
  var input = inputs.shift()

  while (input !== "Statistics") {
    var array = input.split("=");
    var action = array[0];

    if (action === "Add") {
      var username = array[1];
      var sent = +(array[2]);
      var received = +(array[3]);

      if (!pairs.hasOwnProperty(username)) {
        pairs[username] = new Info(sent, received);
      }
    } else if (action === "Empty") {
      var userName = array[1];

      if (userName === "All") {
        pairs = {};
      } else if (pairs.hasOwnProperty(userName)) {
        delete pairs[userName];
      }
    } else if (action === "Message") {
      var sender = array[1];
      var receiver = array[2];

      if (pairs.hasOwnProperty(sender) && pairs.hasOwnProperty(receiver)) {
        pairs[sender].send++;
        pairs[receiver].received++;

        if (pairs[sender].send + pairs[sender].received >= maxCapacity) {
          console.log(sender + " reached the capacity!");
          delete pairs[sender];
        }

        if (pairs[receiver].send + pairs[receiver].received >= maxCapacity) {
          console.log(receiver + " reached the capacity!");
          delete pairs[receiver];
        }
      }
    }

    input = inputs.shift()
  }

  console.log("Users count: " + Object.keys(pairs).length);
  Object.keys(pairs)
    .forEach(function (key) {
      console.log(key + " - " + (pairs[key].received + pairs[key].send));
    });
}
messagesManager([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);
