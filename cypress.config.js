

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,                // enable video recording
  screenshotOnRunFailure: true, // take screenshot when test fails
  e2e: {
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
});