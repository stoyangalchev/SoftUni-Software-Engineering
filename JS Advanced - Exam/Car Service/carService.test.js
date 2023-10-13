let { assert } = require("chai");
let carService = require("./carService");

describe("Test", function () {
    describe("Func1", function () {
        it("Func1", function () {
            assert.equal(
                carService.isItExpensive("Engine"),
                `The issue with the car is more severe and it will cost more money`
            );
        });
        it("Func2", function () {
            assert.equal(
                carService.isItExpensive("Transmission"),
                `The issue with the car is more severe and it will cost more money`
            );
        });
        it("Func3", function () {
            assert.equal(
                carService.isItExpensive("S"),
                `The overall price will be a bit cheaper`
            );
        });
    });
    describe("Func2", function () {
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => carService.discount([], "s"), "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => carService.discount(2, []), "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => carService.discount("sa", "s"), "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => carService.discount(2, "s"), "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => carService.discount("s", 2), "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => carService.discount(null, null), "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(
                () => carService.discount(undefined, undefined),
                "Invalid input"
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.discount(3, 2),
                "Discount applied! You saved 0.3$"
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(carService.discount(2, 2), "You cannot apply a discount");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.discount(6, 2),
                "Discount applied! You saved 0.3$"
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.discount(7, 2),
                "Discount applied! You saved 0.3$"
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(carService.discount(1, 2), "You cannot apply a discount");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.discount(8, 2),
                "Discount applied! You saved 0.6$"
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.discount(9, 1),
                "Discount applied! You saved 0.3$"
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(carService.discount(0, 1), "You cannot apply a discount");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(carService.discount(0, 0), "You cannot apply a discount");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(carService.discount(-1, 0), "You cannot apply a discount");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(carService.discount(-1, -10), "You cannot apply a discount");
        });
    });
    describe("Func3", function () {
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["blowoff valve", "injectors"]
                ),
                145
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["blowoff valve", "coil springs"]
                ),
                375
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["blowoff valve", "coil springs"]
                ),
                375
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["sa", ""]
                ),
                0
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [

                    ],
                    []
                ),
                0
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["sa", ""]
                ),
                0
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.equal(
                carService.partsToBuy(
                    [
                        { sto: "Yan" }
                    ],
                    []
                ),
                0
            );
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy("x", "s")
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy(1, "s")
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy("s", 1)
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy("s", 1)
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy({}, "")
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy("", {})
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy(undefined, undefined)
            }, "Invalid input");
        });
        it("The function parses the input to number, and validates it", function () {
            assert.throws(() => {
                carService.partsToBuy(null, null)
            }, "Invalid input");
        });
    });
});
