"use strict";
class Box {
    data;
    constructor(data) {
        this.data = data;
    }
    toString() {
        return `${this.data} is of type ${typeof this.data}`;
    }
}
const box1 = new Box("Hello");
console.log(box1.toString());
const box2 = new Box(20);
console.log(box2.toString());
const box3 = new Box(true);
console.log(box3.toString());
