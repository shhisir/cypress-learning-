/// <reference types="cypress" />

describe("css selector ", () => {
  it("ID demo", () => {
    cy.visit("https://www.gooogle.com");
    cy.get('#input').type("shisir");
    cy.get('#APjFqb').type("shisir")
  });
});
