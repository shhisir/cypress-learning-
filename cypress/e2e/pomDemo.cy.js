import { LoginPage } from "./pages/login_page";
const loginPage = new LoginPage();
beforeEach(function () {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

describe("all login tests", function () {
  it("login sucessful ", function () {
    loginPage.enterusername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();

    
  });

  it("login with invalid username", function () {
    const loginPage = new LoginPage();
    loginPage.enterusername("AdminInvalid");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });

  it("login with invalid password", function () {
    const loginPage = new LoginPage();

    loginPage.enterusername("Admin");
    loginPage.enterPassword("admin456");
    loginPage.clickLogin();
  });
});
