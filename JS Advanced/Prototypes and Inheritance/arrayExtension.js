(function arrayExtension() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    return this.slice(n);
  };
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
  Array.prototype.sum = function () {
    const sum = this.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

let myArr = [1, 2, 3];

console.log(myArr.last());
console.log(myArr.skip(1));

console.log(myArr.take(3));

console.log(myArr.sum());
console.log(myArr.average());
