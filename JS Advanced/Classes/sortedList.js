class List {
  constructor() {
    this.num = [];
    this.size = this.num.length;
  }
  add(x) {
    this.num.push(x);
    this.size = this.num.length;
    this.num.sort((a, b) => {
      return a - b;
    });
  }
  get(i) {
    return this.num[i];
  }
  remove(i) {
    if (i < 0 || i >= this.num.length) {
      throw new Error("Greshka");
    }
    this.size = this.num.length - 1;
    return this.num.splice(i, 1);
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));
list.remove(1);

console.log(list.get(1));
console.log(list);
