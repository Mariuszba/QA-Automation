export class Home {
    clickMenu() {
       cy.get('.css-7afvtf')
         .click();
    }
    clickLogoutButton() {
       cy.get(':nth-child(9) > .css-bve2vl')
         .click();
    }
   }