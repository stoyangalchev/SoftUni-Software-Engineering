function heroicInventory(input) {
  let arr = [];

  for (let el of input) {
    let obj = {
      name: "",
      level: 0,
      items: [],
    };
    let [name, level,items] = el.split(" / ");
    let itemss = items ? items.split(", ") : [];
    obj.name = name;
    obj.level = Number(level);

    obj.items = itemss;
    arr.push(obj);
  }

  return JSON.stringify(arr);
}
console.log(heroicInventory(["Jake / 1000"]));
