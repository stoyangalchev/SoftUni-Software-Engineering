class AggregateElements {
    input;
    constructor(input) {
        this.input = input;
    }
    sumAllElements() {
        return this.input.reduce((acc, el) => acc + el, 0);
    }
    aggregateElements() {
        return this.input.reduce((acc, el) => acc + 1 / el, 0);
    }
    concatAllElements() {
        return this.input.reduce((acc, el) => acc + el.toString(), "");
    }
    print() {
        console.log(this.sumAllElements());
        console.log(this.aggregateElements());
        console.log(this.concatAllElements());
    }
}
const aggregateElements = new AggregateElements([1, 2, 3]);
aggregateElements.print();
