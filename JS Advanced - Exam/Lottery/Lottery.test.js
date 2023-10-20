let { assert } = require("chai");
let lottery = require("./Lottery");

describe("Test", function () {
  describe("Test", function () {
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket([], [], 2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket(2, 2, 2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket(-2, -2, -2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket(undefined, undefined, undefined);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket(null, null, null);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket(0, 0, 0);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket("s", "S", "undefined");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.buyLotteryTicket("s", "S", []);
      }, "Invalid input!");
    });
  });
  it("Test", function () {
    assert.throws(() => {
      lottery.buyLotteryTicket("s", "S", false);
    }, "Unable to buy lottery ticket!");
  });
  it("Test", function () {
    assert.throws(() => {
      lottery.buyLotteryTicket(0, 1, true);
    }, "Invalid input!");
  });
  it("Test", function () {
    assert.throws(() => {
      lottery.buyLotteryTicket(1, 0, true);
    }, "Invalid input!");
  });
  it("Test", function () {
    assert.throws(() => {
      lottery.buyLotteryTicket(-1, 0, true);
    }, "Invalid input!");
  });
  it("Test", function () {
    assert.throws(() => {
      lottery.buyLotteryTicket(0, -1, true);
    }, "Invalid input!");
  });
  it("Test", function () {
    assert.equal(
      lottery.buyLotteryTicket(2, 2, true),
      "You bought 2 tickets for 4$."
    );
  });
  it("Test", function () {
    assert.equal(
      lottery.buyLotteryTicket(10, 2, true),
      "You bought 2 tickets for 20$."
    );
  });
  describe("Test", function () {
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket(1, 2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket(-1, -2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket([], []);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket(undefined, undefined);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket(null, null);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket("s", "s");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket("s", 2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket(1, "S");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.checkTicket([1, 2, 3, 4], [2, 3, 4, 5, 6]);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.equal(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]),
        "You win the JACKPOT!!!"
      );
    });
    it("Test", function () {
      assert.equal(
        lottery.checkTicket([1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5, 6]),
        "Congratulations you win, check your reward!"
      );
    });
    it("Test", function () {
      assert.equal(
        lottery.checkTicket([0, 0, 0, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
        "Congratulations you win, check your reward!"
      );
    });
    it("Test", function () {
      assert.equal(
        lottery.checkTicket([0, 5, 4, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
        "Congratulations you win, check your reward!"
      );
    });
  });
  describe("Test", function () {
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance(null, null);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance(1, 2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance(-1, -2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance([], []);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance(undefined, undefined);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance(null, null);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance("s", "s");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance("s", 2);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        lottery.secondChance(1, "S");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.equal(
        lottery.secondChance(1, []),
        "Sorry, your ticket didn't win!"
      );
    });
    it("Test", function () {
      assert.equal(
        lottery.secondChance(1, [1, 2]),
        "You win our second chance prize!"
      );
    });
  });
});
