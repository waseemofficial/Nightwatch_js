console.log("hi");

module.exports = {
  "@tests": ["login-test"],
  "try login with valid credintials": function (browser) {
    browser
      .url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .waitForElementVisible("body", 3000)
      .assert.titleEquals("OrangeHRM")
      .setValue("input[placeholder='Username']", "Admin")
      .setValue("input[placeholder='Password']", "admin123")
      .click("button[type='submit']")
      .waitForElementVisible("body", 3000)
      .waitForElementVisible(
        ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module",
        3000
      )
      .pause(3000)
      .assert.urlMatches(
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
      )
      .end(); //
  },
};
