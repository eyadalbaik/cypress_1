const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:['cypress/integration/test/problem_user.js' , 'cypress/integration/test/standard_user.js' , 'cypress/integration/test/locked_out_user.js']
  },
});
