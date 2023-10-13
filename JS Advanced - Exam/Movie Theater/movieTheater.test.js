let { assert } = require("chai");
let movieTheater = require("./movieTheater");

describe("test", function () {
    describe("test", function () {
        it("test1", function () {
            assert.equal(
                movieTheater.ageRestrictions("G"),
                `All ages admitted to watch the movie`
            );
        });
        it("test2", function () {
            assert.equal(
                movieTheater.ageRestrictions("PG"),
                `Parental guidance suggested! Some material may not be suitable for pre-teenagers`
            );
        });
        it("test3", function () {
            assert.equal(
                movieTheater.ageRestrictions("R"),
                `Restricted! Under 17 requires accompanying parent or adult guardian`
            );
        });
        it("test4", function () {
            assert.equal(
                movieTheater.ageRestrictions("NC-17"),
                `No one under 17 admitted to watch the movie`
            );
        });
        it("test5", function () {
            assert.equal(
                movieTheater.ageRestrictions("HEY"),
                `There are no age restrictions for this movie`
            );
        });
    });
    describe("test2", function () {
        it("test1", function () {
            assert.equal(
                movieTheater.moneySpent(10, ["food", "hrana"], ["cola", "rakia"]),
                "The total cost for the purchase with applied discount is 120.00"
            );
        });
        it("test1", function () {
            assert.equal(
                movieTheater.moneySpent(-1, ["food", "hrana"], ["cola", "rakia"]),
                "The total cost for the purchase is -15.00"
            );
        });
        it("test1", function () {
            assert.equal(
                movieTheater.moneySpent(49, ["food", "hrana"], ["cola", "rakia"]),
                "The total cost for the purchase with applied discount is 588.00"
            );
        });
        it("test1", function () {
            assert.equal(
                movieTheater.moneySpent(2, ["food", "hrana"], ["cola", "rakia"]),
                "The total cost for the purchase is 30.00"
            );
        });
        it("test1", function () {
            assert.equal(
                movieTheater.moneySpent(3, ["food", "hrana"], ["cola", "rakia"]),
                "The total cost for the purchase is 45.00"
            );
        });
        it("test1", function () {
            assert.equal(
                movieTheater.moneySpent(3, ["food", "hrana"], ["cola", "rakia"]),
                "The total cost for the purchase is 45.00"
            );
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent(3, 2, 2);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent(3, [], 2);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent(3, undefined, []);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent("s", undefined, []);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent("s", "s", "s");
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent("s", {}, "s");
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.moneySpent(null, null, null);
            }, "Invalid input");
        });
    });
    describe("test2", function () {
        it("reservation(rowsArray, neededSeatsCount);", function () {
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 2), 1);
        });
        it("reservation(rowsArray, neededSeatsCount);", function () {
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 100), "-Infinity");
        });
        it("reservation(rowsArray, neededSeatsCount);", function () {
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 8), "-Infinity");
        });
        it("reservation(rowsArray, neededSeatsCount);", function () {
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 7), "1");
        });
        it("reservation(rowsArray, neededSeatsCount);", function () {
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], -6), "1");
        });
        it("reservation(rowsArray, neededSeatsCount);", function () {
            assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 0), "1");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation({ rowNumber: 1, freeSeats: 7 }, 0);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation("2", 0);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation("2", "d");
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation(null, null);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation(undefined, undefined);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation(-1, -1);
            }, "Invalid input");
        });
        it("test1", function () {
            assert.throws(() => {
                movieTheater.reservation({}, {});
            }, "Invalid input");
        });
       
    });

});
