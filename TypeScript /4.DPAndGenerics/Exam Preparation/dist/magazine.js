"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        let index = this.clothes.findIndex((cloth) => cloth.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        let smallest = this.clothes[0];
        for (let i = 1; i < this.clothes.length; i++) {
            if (this.clothes[i].size < smallest.size) {
                smallest = this.clothes[i];
            }
        }
        return smallest;
    }
    getCloth(color) {
        return this.clothes.find((cloth) => cloth.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let result = `${this.type} magazine contains:`;
        this.clothes
            .sort((a, b) => a.size - b.size)
            .forEach((cloth) => {
            result += `${cloth.toString()}. `;
        });
        return result;
    }
}
exports.Magazine = Magazine;
