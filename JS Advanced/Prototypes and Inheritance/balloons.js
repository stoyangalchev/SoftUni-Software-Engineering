function solution() {
  class Balloon {
    constructor(color, hasWeight) {
      this.color = color;
      this.hasWeight = hasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength) {
      super(color, hasWeight);
      this.ribbon = { color: ribbonColor, length: ribbonLength };
    }

    get _ribbon() {
      return this.ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
      super(color, hasWeight, ribbonColor, ribbonLength);
      this.text = text;
    }

    get _text() {
      return this.text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
