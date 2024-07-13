module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["tests"],
  page_objects_path: "page_object",
  globals_path: "test-data/data.js",
  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require("geckodriver").path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ],
  },
  screenshot: {
    enabled: false,
    path: "screenshot",
    on_failure: true,
  },

  test_settings: {
    default: {
      launch_url: "https://nightwatchjs.org",
      desiredCapabilities: {
        browserName: "firefox",
      },
    },
  },
};
