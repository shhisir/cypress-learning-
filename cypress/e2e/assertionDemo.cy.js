it("Assertions Demo", () => {
  // Define a test case named "Assertions Demo"

  cy.visit("https://example.cypress.io");     // Open the Cypress example website in the browser

  cy.contains("get").click();               // Find the element that contains the text "get" and click it

  // cy.wait(5000);                            // Wait for 5 seconds (5000 milliseconds)

  cy.get("#query-btn")                    // Select the element with id "query-btn"
    .should("contain", "Button")          // Assert that the element contains the text "Button"
    .should("have.class", "query-btn")     // Assert that the element has the class "query-btn"
    .should("be.visible")                 // Assert that the element is visible on the page
    .should("be.enabled");                // Assert that the button is enabled and can be clicked

  cy.get("#query-btn").click();          // Again select the button and click it

  expect(true).to.be.true;   
  assert .equal(4, 4, 'not equal')  
  // assert.strictEqual(4, '4', 'not equal')    // Explicit assertion: checks that true equals true (test will pass)
});                                 // End of the test case
