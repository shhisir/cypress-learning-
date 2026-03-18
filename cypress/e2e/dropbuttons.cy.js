/// <reference types="cypress" />

describe("GUI Elements", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("basic input", () => {
    // basic input
    cy.get("#name").type("test user");
    cy.get("#email").type("testuser@mail.com");
    cy.get("#phone").type("9845627485");
    cy.get("#textarea").type("kathmandu,Nepal");
  });

  // Selecting the radio buttons using input selectors

  it("checking Radio Buttons", () => {
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

  //learning checkboxes

  it("weekend check", () => {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    days.forEach((days) => {
      cy.get(`input[type="checkbox"][value="${days}"]`)
        .check()
        .should("be.checked");
    });
    cy.get("#monday").uncheck().should("not.be.checked");
  });

  //dropdown section
  it("drop Down", () => {
    cy.get("#country").select(5);
    // cy.get("#country").should("have.value", "uk");
  });
  
  
  // color selection
  it('color selection',()=>{
    cy.get('#colors').select('red','yellow','blue','green')
    cy.get('#colors').select('red')
  })
 
  // sorted list
  it('animals',()=>{
    cy.get('#animals').select(1)
  })

// date picker
it("datepickers", () => {
    // --- Date Picker 1 (mm/dd/yyyy) ---
    cy.get('#datepicker').click(); // open calendar
    cy.get('.ui-datepicker-calendar td a').contains('18').click(); // select day 18
    cy.get('#datepicker').should('have.value', '03/18/2026');

    // --- Date Picker 2 (dd/mm/yyyy) ---
    cy.get('#txtDate').click();
    cy.get('.ui-datepicker-calendar td a').contains('18').click();
    cy.get('#txtDate').should('have.value', '18/03/2026');

    // --- Date Picker 3: Date Range ---
    // Assuming two inputs for start and end
//     cy.get('.date-picker-box input:first').click();
//     cy.get('.ui-datepicker-calendar td a').contains('01').click();
//     cy.get('.date-picker-box input:first').should('have.value','03/01/2026');

//     cy.get('.date-picker-box input:last').click();
//     cy.get('.ui-datepicker-calendar td a').contains('15').click();
//     cy.get('.date-picker-box input:last').should('have.value','03/15/2026');
})

});
