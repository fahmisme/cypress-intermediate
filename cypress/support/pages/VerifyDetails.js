const Locator = require("../locator/Locator");
const locator = new Locator();
class VerifyDetails {
    async checkLabel(Label){
        cy.get(locator.staticCategory('product'))
        .should('be.visible')
        .contains(Label);
    }
    async checkLabel(Caption){
        cy.get(locator.staticCategory('product'))
        .should('be.visible')
        .contains(Caption);
    }
}

module.exports = VerifyDetails;