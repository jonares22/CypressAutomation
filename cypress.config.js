const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "reports/allure/allure-results",
      });
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com'
  },
  watchForFileChanges: false
});
