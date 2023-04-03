function inventory(arr) {
  let heroes = [];
  for (let heroInfo of arr) {
    let [name, level, item] = heroInfo.split(" / ");

    let curentHero = {
      name: name,
      level: Number(level),
      item: item,
    };
    heroes.push(curentHero);
  } //console.log(heroes);
  let sortedByLevel = heroes.sort((a, b) => {
    return a.level - b.level;
  });
  for (let hero of sortedByLevel) {
    console.log(`Hero: ${hero.name}`);
    console.log(`Level => ${hero.level}`);
    console.log(`Item => ${hero.item}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
