const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.cy.js' // tells Cypress where to find test files
  }
});