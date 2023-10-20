let { assert } = require("chai");
let recipeSelection = require("./recipeSelection");

describe("Test", function () {
  describe("Test", function () {
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Vegetarian", "Meat"),
        "This recipe is suitable for your dietary restriction"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Vegetarian", "Dairy"),
        "This recipe is suitable for your dietary restriction"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Vegan", "Dairy"),
        "This recipe is suitable for your dietary restriction"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Vegan", "Meat"),
        "This recipe is suitable for your dietary restriction"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Meat", "Vegetarian"),
        "This recipe is not suitable for vegetarians"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Dairy", "Vegetarian"),
        "This recipe is suitable for your dietary restriction"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isTypeSuitable("Dairy", "Vegan"),
        "This recipe is not suitable for vegans"
      );
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isTypeSuitable([1], [1]);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isTypeSuitable(-1, -2);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isTypeSuitable(undefined, undefined);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isTypeSuitable("s", [1]);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isTypeSuitable("d", 1);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isTypeSuitable(0, 0);
      }, "Invalid input");
    });
  });
  describe("Test", function () {
    it("Test", function () {
      assert.equal(
        recipeSelection.isItAffordable(1, 0),
        "You don't have enough budget to afford this recipe"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isItAffordable(1, 1),
        "Recipe ingredients bought. You have 0$ left"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isItAffordable(-1, 0),
        "Recipe ingredients bought. You have 1$ left"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isItAffordable(10, 1),
        "You don't have enough budget to afford this recipe"
      );
    });
    it("Test", function () {
      assert.equal(
        recipeSelection.isItAffordable(10, 1),
        "You don't have enough budget to afford this recipe"
      );
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isItAffordable([10], []);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isItAffordable(undefined, undefined);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isItAffordable(null, null);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isItAffordable("S", "S");
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isItAffordable(1, "s");
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.isItAffordable("s", 2);
      }, "Invalid input");
    });
  });
  describe("Test", function () {
    it("Test", function () {
      assert.deepEqual(
        recipeSelection.getRecipesByCategory(
          [{ title: "Spicy Tofu Stir-Fry", category: "Asian" }],
          "Asian"
        ),
        ["Spicy Tofu Stir-Fry"]
      );
    });
    it("Test", function () {
      assert.deepEqual(
        recipeSelection.getRecipesByCategory(
          [{ title: "s", category: "z" }],
          "z"
        ),
        ["s"]
      );
    });
    it("Test", function () {
      assert.deepEqual(recipeSelection.getRecipesByCategory([], "z"), []);
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory(-1, "z");
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory("s", "z");
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory(undefined, undefined);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory(null, null);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory(0, 0);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory(1, 2);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory(-1, 0);
      }, "Invalid input");
    });
    it("Test", function () {
      assert.throws(() => {
        recipeSelection.getRecipesByCategory([], []);
      }, "Invalid input");
    });
  });
});
