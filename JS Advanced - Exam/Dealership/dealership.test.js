const assert = require("chai").assert;
const dealership = require("./dealership");

describe('dealership', () => {
  it('return old car', () => {
      assert.equal(dealership.newCarCost('a', 1), 1);
      assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000);
  });

  it('car equipment', () => {
      assert.deepEqual(dealership.carEquipment(['a', 'b', 'c'], [0, 2]), ['a', 'c']);
  });

  it('euro category', () => {
      assert.equal(dealership.euroCategory(3),
          'Your euro category is low, so there is no discount from the final price!');
  });
  it('euro category1', () => {
      assert.equal(dealership.euroCategory(4),
          `We have added 5% discount to the final price: 14250.`);
  });
  it('euro category2', () => {
      assert.equal(dealership.euroCategory(5),
          `We have added 5% discount to the final price: 14250.`);
  });
});
