function inventory(input: string[]) {
  const heroes = [];
  for (let i = 0; i < input.length; i++) {
    const [name, level, items] = input[i].split(" / ");
    heroes.push({
      name,
      level: Number(level),
      items: items.split(", "),
    });
  }
  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`Items => ${hero.items.join(", ")}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
