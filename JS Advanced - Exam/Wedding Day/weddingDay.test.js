let { assert } = require("chai");
let weddingDay = require("./weddingDay");

describe("Test", function () {
  describe("WedingDay", function () {
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue(150, 120, "sofia");
      }, "The location of this venue is not in the correct area!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue("s", "s", "sofia");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue([], [], "sofia");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue(undefined, "s", "sofia");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue(undefined, undefined, "sofia");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue(null, null, 1);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue("s", "s", 1);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.pickVenue(150, 150, -1);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(151, 121, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(120, 120, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(150, 150, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(0, 0, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(0, 1, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(-1, 120, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(-1, -2, "Varna"),
        "This venue does not meet your requirements!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(170, 119, "Varna"),
        "This venue meets the requirements, with capacity of 170 guests and 119$ cover."
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.pickVenue(150, 120, "Varna"),
        "This venue meets the requirements, with capacity of 150 guests and 120$ cover."
      );
    });
  });
  describe("WedingDay", function () {
    it("Test1", function () {
      assert.equal(
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["picture", "video"],
          true
        ),
        "You spend 1870$ for wedding decoration and photography with 15% discount!"
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["picture", "video"],
          false
        ),
        "You spend 2200$ for wedding decoration and photography!"
      );
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["picture", "video"],
          "sa"
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings([1, 2, 3], ["picture", "video"], "sa");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(
          ["true", "fa drapes and curtains"],
          ["picture", "video"],
          "sa"
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["picture", "saa"],
          "sa"
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["pictsgasasure", "video"],
          "sa"
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["picture", "video"],
          1
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["picture", "video"],
          null
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(1, 2, "sa");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(null, null, "sa");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(0, -1, "sa");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(undefined, undefined, undefined);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings(-11, -2, -1);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings([], [], "sa");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.otherSpendings([], [], []);
      }, "Invalid Information!");
    });
  });
  describe("WedingDay", function () {
    it("Test1", function () {
      assert.equal(
        weddingDay.tableDistribution(5, 1),
        "There is only 5 people on every table, you can join some tables."
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.tableDistribution(6, 6),
        "There is only 1 people on every table, you can join some tables."
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.tableDistribution(1, 1),
        "There is only 1 people on every table, you can join some tables."
      );
    });
    it("Test1", function () {
      assert.equal(
        weddingDay.tableDistribution(1, 10),
        "There is only 0 people on every table, you can join some tables."
      );
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution(1, -10);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution(0, 6);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution(-1, -10);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution(-6, 6);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution([], 6);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution(undefined, undefined);
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        weddingDay.tableDistribution(null, null);
      }, "Invalid Information!");
    });
     it("Test1", function () {
       assert.throws(() => {
         weddingDay.tableDistribution([], []);
       }, "Invalid Information!");
     });
  });
});
