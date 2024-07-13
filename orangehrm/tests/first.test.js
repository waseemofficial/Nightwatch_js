module.exports = {
  before: function (browser) {
    browser
      .url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .waitForElementVisible("body", 3000)
      .setValue("input[placeholder='Username']", "Admin")
      .setValue("input[placeholder='Password']", "admin123")
      .click("button[type='submit']");
  },

  "@tests": ["dashboard-test"],
  "functionality of Dashboard ": function (browser) {
    browser
      .waitForElementVisible("body", 3000)
      .pause(2000)
      .assert.textContains("h6.oxd-text:nth-child(1)", "Dashboard");
  },

  "@tests": ["dashboard-test"],
  "functionality of Dashboard  click admin": function (browser) {
    browser
      .waitForElementVisible("body", 3000)
      .click(
        "li.oxd-main-menu-item-wrapper:nth-child(1) > a:nth-child(1) > span:nth-child(2)"
      )
      .pause(2000)
      .assert.textContains("h6.oxd-text:nth-child(1)", "Admin")
      .assert.textContains(
        ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-level",
        "User Management"
      );
  },

  "@tests": ["dashboard-test2"],
  "functionality of Dashboard click on PIM": function (browser) {
    browser
      .waitForElementVisible("body", 3000)
      .click(
        "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)"
      )
      .pause(2000)
      .assert.textContains("h6.oxd-text:nth-child(1)", "PIM");
  },

  "@tests": ["dashboard-test2"],
  "functionality of Dashboard click on PIM": function (browser) {
    browser
      .waitForElementVisible("body", 3000)
      .click(
        "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)"
      )
      .pause(2000)
      .assert.textContains("h6.oxd-text:nth-child(1)", "Time")
      .end();
  },
};
