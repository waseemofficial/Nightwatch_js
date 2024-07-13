module.exports = {
  "@tags": ["googlea"],
  "google Advance Search test"(Browser) {
    browser
      .url("https://www.google.com/advanced_search")
      .waitForElementVisible(".jfk-textinput")
      .setValue("input[id=xX4UFf]", "apple")
      .assert.valueEquals("input[name=as_q]", "apple")
      .saveScreenshot("screenshot/google_advance_search.png");
  },
};
