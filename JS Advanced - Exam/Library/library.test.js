let { assert } = require("chai");
let library = require("./library");

describe("Test>........>>.....>>>>>", function () {
  describe("Function calcPriceOfBook (nameOfBook, year)", function () {
    it("Return If the year of publication is less than or equal to 1980, there is a 50% percent discount from the standard price", function () {
      assert.equal(
        library.calcPriceOfBook("Boook", 1980),
        "Price of Boook is 10.00"
      );
      assert.equal(
        library.calcPriceOfBook("Boook", 1979),
        "Price of Boook is 10.00"
      );
    });
    it("Return If it s bigger", function () {
      assert.equal(
        library.calcPriceOfBook("Boook", 2000),
        "Price of Boook is 20.00"
      );
    });
    it("Return If namebook not String", function () {
      assert.throw(() => {
        library.calcPriceOfBook([1, 2], 2000);
      }, "Invalid input");

      assert.throw(() => {
        library.calcPriceOfBook(NaN, 2000);
      }, "Invalid input");

      assert.throw(() => {
        library.calcPriceOfBook(null, 2000);
      }, "Invalid input");
      assert.throw(() => {
        library.calcPriceOfBook(undefined, 2000);
      }, "Invalid input");
      assert.throw(() => {
        library.calcPriceOfBook(3, 2000);
      }, "Invalid input");
    });
    it("Return If the year is not an integer ", function () {
      assert.throw(() => {
        library.calcPriceOfBook("Book", 2.3);
      }, "Invalid input");
      assert.throw(() => {
        library.calcPriceOfBook("Book", -2.3);
      }, "Invalid input");
    });
  });
  describe("Function findBook(booksArr, desiredBook)", function () {
    it("If booksarr zero", function () {
      assert.throw(() => {
        library.findBook([], "Boook JS");
      }, "No books currently available");
    });
    it("If booksarr Return true", function () {
      assert.equal(
        library.findBook(["JS", "rubby", "C++"], "JS"),
        "We found the book you want."
      );
    });
    it("If booksarr not there", function () {
      assert.equal(
        library.findBook(["JS", "rubby", "C++"], "sS"),
        "The book you are looking for is not here!"
      );
    });
  });
  describe("Functiona arrangeTheBooks (countBooks)", function () {
    it("Function arrangeTheBooks (string)return Invalid input", function () {
      assert.throw(() => {
        library.arrangeTheBooks("s");
      }, "Invalid input");
    });
    it("Function arrangeTheBooks (1,2)return Invalid input", function () {
      assert.throw(() => {
        library.arrangeTheBooks(1.2);
      }, "Invalid input");
    });
    it("Function arrangeTheBooks (-2)return Invalid input", function () {
      assert.throw(() => {
        library.arrangeTheBooks(-2);
      }, "Invalid input");
    });
    it("Function arrangeTheBooks (1)Great job, the books are arranged.", function () {
      assert.equal(
        library.arrangeTheBooks(1),
        "Great job, the books are arranged."
      );
    });
    it("Function arrangeTheBooks (5)Great job, the books are arranged.", function () {
      assert.equal(
        library.arrangeTheBooks(5),
        "Great job, the books are arranged."
      );
    });
    it("Function arrangeTheBooks (0)Great job, the books are arranged.", function () {
      assert.equal(
        library.arrangeTheBooks(0),
        "Great job, the books are arranged."
      );
    });
    it("Function arrangeTheBooks (40)Great job, the books are arranged.", function () {
      assert.equal(
        library.arrangeTheBooks(40),
        "Great job, the books are arranged."
      );
    });
    it("Function arrangeTheBooks (41)Insufficient space, more shelves need to be purchased.", function () {
      assert.equal(
        library.arrangeTheBooks(41),
        "Insufficient space, more shelves need to be purchased."
      );
    });
    it("Function arrangeTheBooks (50)Insufficient space, more shelves need to be purchased.", function () {
      assert.equal(
        library.arrangeTheBooks(50),
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
