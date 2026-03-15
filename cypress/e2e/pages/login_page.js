export class LoginPage {
  username_textbox = '[name="username"]';
  passsword_textbox = '[name="password"]';
  login_button = ".oxd-button";
  enterusername(username) {
    cy.get(this.username_textbox).type(username);
  }

  enterPassword(passsword) {
    cy.get(this.passsword_textbox).type(passsword);
  }

  clickLogin() {
    cy.get(this.login_button).click();
  }
}
