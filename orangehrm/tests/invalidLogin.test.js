module.exports = {
  "@tests": ["invalid-login-test"],
  "try login with invalid credintials": function (browser) {
    let login = browser.globals.login;
    //console.log(login);
    browser
      .url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .waitForElementVisible("body", 3000)
      .assert.titleEquals("OrangeHRM")
      .setValue("input[placeholder='Username']", login.wrongUsername)
      .setValue("input[placeholder='Password']", login.wrongPassword)
      .click("button[type='submit']")
      .waitForElementVisible(
        ".oxd-text.oxd-text--p.oxd-alert-content-text",
        3000
      )
      .assert.textContains(
        ".oxd-text.oxd-text--p.oxd-alert-content-text",
        "Invalid credentials"
      );

    browser
      .setValue("input[placeholder='Username']", login.username)
      .setValue("input[placeholder='Password']", login.wrongPassword)
      .click("button[type='submit']")
      .waitForElementVisible(
        ".oxd-text.oxd-text--p.oxd-alert-content-text",
        3000
      )
      .assert.textContains(
        ".oxd-text.oxd-text--p.oxd-alert-content-text",
        "Invalid credentials"
      );

    browser
      .url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .waitForElementVisible("body", 3000)
      .assert.titleEquals("OrangeHRM")
      .setValue("input[placeholder='Username']", login.wrongUsername2)
      .setValue("input[placeholder='Password']", login.wrongPassword2)
      .click("button[type='submit']")
      .waitForElementVisible(
        ".oxd-text.oxd-text--p.oxd-alert-content-text",
        3000
      )
      .assert.textContains(
        ".oxd-text.oxd-text--p.oxd-alert-content-text",
        "Invalid credentials"
      );
    browser
      .url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .waitForElementVisible("body", 3000)
      .assert.titleEquals("OrangeHRM")
      .setValue("input[placeholder='Username']", login.wrongUsername)
      .setValue("input[placeholder='Password']", login.password)
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
