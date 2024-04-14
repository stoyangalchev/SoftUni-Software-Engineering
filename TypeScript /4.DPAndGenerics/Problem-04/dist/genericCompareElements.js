"use strict";
class GenericCompare {
    data;
    constructor(data) {
        this.data = data;
    }
    compare(comparator) {
        let count = 0;
        this.data.forEach((element) => {
            if (element === comparator) {
                count++;
            }
        });
        return count;
    }
}
let com = new GenericCompare([1, 2, 3, 4, 5, 2, 7, 8, 9, 10]);
console.log(com.compare(2));
