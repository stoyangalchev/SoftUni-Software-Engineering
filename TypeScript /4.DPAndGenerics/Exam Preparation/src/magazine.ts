import { Cloth } from "./cloth";

class Magazine {
  type: string;
  capacity: number;
  clothes: Cloth[];
  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
    this.clothes = [];
  }
  addCloth(cloth: Cloth) {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }
  removeCloth(color: string) {
    let index = this.clothes.findIndex((cloth) => cloth.color === color);
    if (index !== -1) {
      this.clothes.splice(index, 1);
      return true;
    }
    return false;
  }

  getSmallestCloth(): Cloth | undefined {
    let smallest = this.clothes[0];
    for (let i = 1; i < this.clothes.length; i++) {
      if (this.clothes[i].size < smallest.size) {
        smallest = this.clothes[i];
      }
    }
    return smallest;
  }
  getCloth(color: string): Cloth | undefined {
    return this.clothes.find((cloth) => cloth.color === color);
  }

  getClothCount(): number {
    return this.clothes.length;
  }

  report(): string {
    let result = `${this.type} magazine contains:`;
    this.clothes
      .sort((a, b) => a.size - b.size)
      .forEach((cloth) => {
        result += `${cloth.toString()}. `;
      });
    return result;
  }
}

export { Magazine };
