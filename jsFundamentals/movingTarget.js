function movingTarget(arr) {
  let sequence = arr.shift().split(" ").map(Number);

  let commands = arr.shift();

  while (commands !== "End") {
    let splitted = commands.split(" ");

    let command = splitted[0];

    let index = Number(splitted[1]);

    let value = Number(splitted[2]);

    switch (command) {
      case "Shoot":
        shoot(index, value);
        break;

      case "Add":
        add(index, value);
        break;

      case "Strike":
        strike(index, value);
        break;
    }

    function shoot(index, power) {
      if (sequence[index]) {
        sequence[index] -= power;

        if (sequence[index] <= 0) {
          sequence.splice(index, 1);
        }
      }
    }

    function add(index, value) {
      if (index >= 0 && index < sequence.length) {
        sequence.splice(index, 0, value);
      } else {
        console.log(`Invalid placement!`);
      }
    }

    function strike(index, radius) {
      const radiusRange = 1 + radius * 2;

      const radiusStart = index - radius;

      const radiusEnd = index + radius;

      if (radiusStart >= 0 && radiusEnd < sequence.length) {
        sequence.splice(radiusStart, radiusRange);
      } else {
        console.log(`Strike missed!`);
      }
    }

    commands = arr.shift();
  }

  console.log(sequence.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",

  "Shoot 5 10",

  "Shoot 1 80",

  "Strike 2 1",

  "Add 22 3",

  "End",
]);
