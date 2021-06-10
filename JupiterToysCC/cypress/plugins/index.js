// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
module.exports = function (on, config) {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    config.browsers.push({
      name: "firefox",
      family: "firefox",
      path: "C:\\JupiterToysCC\\firefox.exe",
    });

    return config;
  });
};
