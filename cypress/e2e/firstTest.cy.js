/// <reference types="cypress" />

it("swift search", () => {

  cy.visit("https://swifttech.com.np/");

  cy.wait(8000)

  cy.get('.btns-group > .theme-btn').click()


});
