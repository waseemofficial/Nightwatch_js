const page = {
  url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  elements: {
    username: "Admin",
    password: "admin123",
  },
  commands: {},
};
module.exports = {
  commands: [page.commands],
  elements: page.elements,
  url: page.url,
};
