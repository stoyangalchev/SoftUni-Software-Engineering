class Box<T> {
    data: T;
    constructor(data: T) {
        this.data = data;
    }
    toString() {
        return `${this.data} is of type ${typeof this.data}`;
    }
}

const box1 = new Box<string>("Hello");
console.log(box1.toString());

const box2 = new Box<number>(20);
console.log(box2.toString());

const box3 = new Box<boolean>(true);
console.log(box3.toString());
