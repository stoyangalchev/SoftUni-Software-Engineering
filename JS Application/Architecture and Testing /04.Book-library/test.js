const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

describe("E2E tests", async function () {
  this.timeout(6000);

  let browser, page;

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
  });

  after(async () => {
    await browser.close();
  });

  this.beforeEach(async () => {
    page = await browser.newPage();
  });
  this.afterEach(async () => {
    await page.close();
  });

  it("works", async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    expect(1).to.equal(1);
  });
});
