module.exports = {
  src_folders: ["tests"],
  webdriver: {
    start_process: true,
    server_path: require("geckodriver").path,
    port: 9515,
  },

  test_settings: {
    default: {
      launch_url: "https://www.google.com",
      desiredCapabilities: {
        browserName: "firefox",
      },
    },
  },
};
