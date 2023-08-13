function carFactory(obj) {
  let result = {
    model: "",
    engine: { power: 0, volume: 0 },
    carriage: { type: "", color: "" },
    wheels: [],
  };

  if (obj.power <= 90) {
    result.model += obj.model;
    result.engine.power += 90;
    result.engine.volume += 1800;
  } else if (obj.power > 90 && obj.power <= 120) {
    result.model += obj.model;
    result.engine.power += 120;
    result.engine.volume += 2400;
  } else if (obj.power > 120 && obj.power <= 200) {
    result.model += obj.model;
    result.engine.power += 200;
    result.engine.volume += 3500;
  }
  result.carriage.type = obj.carriage;
  result.carriage.color = obj.color;

  for (let i = 0; i < 4; i++) {
    let num = obj.wheelsize;
    if (num % 2 == 0) {
      num -= 1;
    }
    result.wheels.push(num);
  }

  return result;
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
