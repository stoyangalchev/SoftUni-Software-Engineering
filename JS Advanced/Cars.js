function cars() {}
cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);

function cars2(input) {
  const data = {};

  const instr = {
    create: (number, inherits, n2) =>
      (data[number] = inherits ? Object.create(data[n2]) : {}),
    set: (number, k, v) => (data[number][k] = v),
    print: (n) => {
      const entry = [];
      for (const key in data[n]) {
        entry.push(`${key}:${data[n][key]}`);
      }
      console.log(entry.join(","));
    },
  };

  input.forEach((x) => {
    const [comand, number, type, value] = x.split(" ");

    instr[comand](number, type, value);
  });
}
cars2([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
