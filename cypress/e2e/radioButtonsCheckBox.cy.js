/// <reference types="cypress" />

describe("check UI elements", () => {
  it("checking Radio Buttons", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    // Selecting the radio buttons using input selectors
    cy.get(':nth-child(3) > [name="gender"]')
      .should("be.visible")
      .check()
      .should("be.checked");
    cy.get(':nth-child(4) > [name="gender"]')
      .should("be.visible")
      .should("not.be.checked");

    // Now selecting radio buttons
    cy.get(':nth-child(3) > [name="gender"]').check().should("be.checked");
    cy.get(':nth-child(4) > [name="gender"]').should("not.be.checked");

    cy.get(':nth-child(4) > [name="gender"]').check().should("be.checked");
    cy.get(':nth-child(3) > [name="gender"]').should("not.be.checked");
  });

  
});
