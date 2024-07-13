module.exports = {
  "advance google search test"(browser) {
    browser
      .url("https://www.google.com")
      .waitForElementVisible("#APjFqb")
      .assert.containsText("#APjFqb", "");
    //browser.assert.urlContains("http://www.google.com");

    //browser.getAttribute(id, "APjFqb").sendKeys("heello wa");
  },
};
