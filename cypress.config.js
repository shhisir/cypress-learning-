

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,                // enable video recording
  screenshotOnRunFailure: true, // take screenshot when test fails
  e2e: {
    watchForFileChanges: false, // disables automatic test re-run when files change
    specPattern: 'cypress/e2e/**/*.cy.js' // pattern to find and run all test files (*.cy.js) in cypress/e2e folder and subfolders
  }
});