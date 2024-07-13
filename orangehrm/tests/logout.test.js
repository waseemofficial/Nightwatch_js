module.exports = {
  before: function (browser) {
    browser
      .url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .waitForElementVisible("body", 3000)
      .setValue("input[placeholder='Username']", "Admin")
      .setValue("input[placeholder='Password']", "admin123")
      .click("button[type='submit']");
  },
  "@tests": ["logout functionality"],
  "check the functionality of logout": function (browser) {
    browser.waitForElementVisible("body", 3000).pause(2000);
  },
};
