
export class Login {
 navigate() {
    cy.visit("https://www.edu.goit.global/account/login")
 }   
 validateInputs() {
    cy.get("#user_email")
      .type("user888@gmail.com")
      .should("have.value", "user888@gmail.com");
    cy.get("#user_password")
      .type("1234567890");
 }
 clickLoginButton() {
    cy.get(".eckniwg2")
      .click();
 }
 clickMenu() {
    cy.get('.css-7afvtf')
      .click();
 }
 clickLogoutButton() {
    cy.get(':nth-child(9) > .css-bve2vl')
      .click();
 }
}

import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("Mój drugi test", () => {
  it("Page Object Pattern test LMS", () => {
    LoginPage.navigate();
    // action 
    LoginPage.validateInputs();
    // action 
    LoginPage.clickLoginButton();
    // action
    LoginPage.clickMenu();
    // action
    LoginPage.clickLogoutButton();
  });
});