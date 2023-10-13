let { assert } = require("chai");
let motorcycleRider = require("./motorcycleRider");

describe("Test", function () {
  describe("licenseRestriction (category)", function () {
    it("Test1", function () {
      assert.equal(
        motorcycleRider.licenseRestriction("AM"),
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });
    it("Test2", function () {
      assert.equal(
        motorcycleRider.licenseRestriction("A1"),
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });
    it("Test3", function () {
      assert.equal(
        motorcycleRider.licenseRestriction("A2"),
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });
    it("Test4", function () {
      assert.equal(
        motorcycleRider.licenseRestriction("A"),
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
    it("Test5", function () {
      assert.throws(() => {
        motorcycleRider.licenseRestriction("ab");
      }, "Invalid Information!");
    });
    it("Test6", function () {
      assert.throws(() => {
        motorcycleRider.licenseRestriction([]);
      }, "Invalid Information!");
    });
    it("Test6", function () {
      assert.throws(() => {
        motorcycleRider.licenseRestriction(-1);
      }, "Invalid Information!");
    });
    it("Test6", function () {
      assert.throws(() => {
        motorcycleRider.licenseRestriction(1);
      }, "Invalid Information!");
    });
    it("Test6", function () {
      assert.throws(() => {
        motorcycleRider.licenseRestriction(undefined);
      }, "Invalid Information!");
    });
    it("Test6", function () {
      assert.throws(() => {
        motorcycleRider.licenseRestriction(null);
      }, "Invalid Information!");
    });
  });
  describe("licenseRestriction (category)", function () {
    it("Test1", function () {
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 600),
        "There are 3 available motorcycles matching your criteria!"
      );
    });
    it("Test12121", function () {
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "650"], 600),
        "There are 2 available motorcycles matching your criteria!"
      );
    });
    it("Test12121", function () {
      assert.equal(
        motorcycleRider.motorcycleShowroom(["1225", "2520", "6250"], 600),
        "There are 0 available motorcycles matching your criteria!"
      );
    });
    it("Test12121", function () {
      assert.equal(
        motorcycleRider.motorcycleShowroom(["1225"], 600),
        "There are 0 available motorcycles matching your criteria!"
      );
    });
    it("Test12121", function () {
      assert.equal(
        motorcycleRider.motorcycleShowroom(["1225"], 50),
        "There are 0 available motorcycles matching your criteria!"
      );
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(["1225"], 0);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(["1225"], -1);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(["1225"], []);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom([], -1);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom([], 0);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(undefined, -1);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(undefined, undefined);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(-1, -1);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom(0, 0);
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom("saf", "Sfa");
      }, "Invalid Information!");
    });
    it("Test12121", function () {
      assert.throws(() => {
        motorcycleRider.motorcycleShowroom("S", -1);
      }, "Invalid Information!");
    });
  });
  describe("otherSpendings (category)", function () {
    it("Test1", function () {
      assert.equal(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          true
        ),
        "You spend $540.00 for equipment and consumables with 10% discount!"
      );
    });
    it("Test1", function () {
      assert.equal(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          false
        ),
        "You spend $600.00 for equipment and consumables!"
      );
    });
    it("Test1", function () {
      assert.equal(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          false
        ),
        "You spend $600.00 for equipment and consumables!"
      );
    });
    it("Test1", function () {
      assert.throws(() => {
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          ""
        );
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        motorcycleRider.otherSpendings("s", ["engine oil", "oil filter"], "");
      }, "Invalid Information!");
    });
    it("Test1", function () {
      assert.throws(() => {
        motorcycleRider.otherSpendings("s", "", "");
      }, "Invalid Information!");
    });
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings([], [], "");
    }, "Invalid Information!");
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings(
        ["helmet", "jacked"],
        ["engine oil", "oil filter"],
        1
      );
    }, "Invalid Information!");
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings(
        ["helmet", "jacked"],
        ["engine oil", "oil filter"],
        1
      );
    }, "Invalid Information!");
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings(
        undefined,
        ["engine oil", "oil filter"],
        1
      );
    }, "Invalid Information!");
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings(undefined, undefined, 1);
    }, "Invalid Information!");
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings(undefined, undefined, undefined);
    }, "Invalid Information!");
  });
  it("Test1", function () {
    assert.throws(() => {
      motorcycleRider.otherSpendings(true, true, true);
    }, "Invalid Information!");
  });
});
//otherSpendings (equipment, consumables, discount)
