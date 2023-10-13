let { assert } = require("chai");
let bookSelection = require("./bookSelection");

describe("Test", function () {
  describe("FirstFunction", function () {
    it("isGenreSuitable (genre, age)", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 12),
        `Books with Thriller genre are not suitable for kids at 12 age`
      );
    });
    it("isGenreSuitable (genre, age)2", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 11),
        `Books with Thriller genre are not suitable for kids at 11 age`
      );
    });
    it("isGenreSuitable (genre, age)3", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 0),
        `Books with Thriller genre are not suitable for kids at 0 age`
      );
    });
    it("isGenreSuitable (genre, age)3", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", -1),
        `Books with Thriller genre are not suitable for kids at -1 age`
      );
    });
    it("isGenreSuitable (genre, age)", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 12),
        `Books with Horror genre are not suitable for kids at 12 age`
      );
    });
    it("isGenreSuitable (genre, age)2", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 11),
        `Books with Horror genre are not suitable for kids at 11 age`
      );
    });
    it("isGenreSuitable (genre, age)3", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 0),
        `Books with Horror genre are not suitable for kids at 0 age`
      );
    });
    it("isGenreSuitable (genre, age)3", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Horror", -1),
        `Books with Horror genre are not suitable for kids at -1 age`
      );
    });
    it("isGenreSuitable (genre, age)3", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 13),
        `Those books are suitable`
      );
    });
    describe("isItAffordable(price, budget)", function () {
      it("isItAffordable(price, budget)3", function () {
        assert.equal(
          bookSelection.isItAffordable(10, 10),
          "Book bought. You have 0$ left"
        );
      });
      it("isItAffordable(price, budget)3", function () {
        assert.equal(
          bookSelection.isItAffordable(9, 10),
          "Book bought. You have 1$ left"
        );
      });
      it("isItAffordable(price, budget)3", function () {
        assert.equal(
          bookSelection.isItAffordable(10, 9),
          "You don't have enough money"
        );
      });
      it("isItAffordable(price, budget)3", function () {
        assert.equal(
          bookSelection.isItAffordable(-10, 9),
          "Book bought. You have 19$ left"
        );
      });
      it("isItAffordable(price, budget)3", function () {
        assert.equal(
          bookSelection.isItAffordable(0, 0),
          "Book bought. You have 0$ left"
        );
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable([], 1);
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable([], []);
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable("sf", "sf");
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable(undefined, undefined);
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable(2, undefined);
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable(undefined, 1);
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable(null, 2);
        }, "Invalid input");
      });
      it("isItAffordable(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.isItAffordable(null, null);
        }, "Invalid input");
      });
    });
    describe("suitableTitles(price, budget)", function () {
      it("suitableTitles (books, wantedGenre)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles(null, null);
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles([], []);
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles("sf", "sf");
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles(undefined, undefined);
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles(2, undefined);
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles([undefined], 1);
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.throws(() => {
          bookSelection.suitableTitles(null, 2);
        }, "Invalid input");
      });
      it("suitableTitles(price, budget)3", function () {
        assert.deepEqual(
          bookSelection.suitableTitles(
            [
              { title: "The Da Vinci Code", genre: "Thriller" },
              { title: "The Da ", genre: "s" },
            ],
            "s"
          ),
          ["The Da "]
        );
      });
      it("suitableTitles(price, budget)3", function () {
        assert.deepEqual(
          bookSelection.suitableTitles(
            [
              { title: "The Da Vinci Code", genre: "Thriller" },
              { title: "The Da ", genre: "s" },
            ],
            ""
          ),
          []
        );
      });
      it("suitableTitles(price, budget)3", function () {
        assert.deepEqual(
          bookSelection.suitableTitles(
            [
              { title: "The Da Vinci Code", genre: "Thriller" },
              { title: "The Da ", genre: "s" },
            ],
            "safsafa"
          ),
          []
        );
      });
    });
  });
});
