export class Login {
 navigate() {
    cy.visit("https://www.edu.goit.global/account/login")
 }
 insertDataInInputs() {
    cy.get("#user_email")
      .type("user888@gmail.com")
    cy.get("#user_password")
      .type("1234567890");
 }   
 validateTextInInputs() {
    cy.get("#user_email")
      .should("have.value", "user888@gmail.com");
  }
 clickLoginButton() {
    cy.get(".eckniwg2")
      .click();
 }
}



