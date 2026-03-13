export class LoginPage {
  enterusrname(username) {
    cy.get('[name="username"]').type(username);
  }

  enterPassword(passsword) {
    cy.get('[name="password"]').type(passsword);
  }

  clickLogin() {
    cy.get(".oxd-button").click();
  }
}
