import { LoginPage } from "./pages/login_page";

it("POM  Demo", function () {
  const loginPage = new LoginPage();

  cy.visit("https://opensource-demo.orangehrmlive.com/");

  loginPage.enterusrname("Admin");
  loginPage.enterPassword("admin123");
  loginPage.clickLogin();
});
