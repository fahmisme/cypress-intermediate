const Locator = require("../locator/Locator");
const locator = new Locator();
class VerifyCategory {
  
  async visit() {
    cy.visit('/');
  }

  async openPromotionMenu(data) {
    return cy.get(locator.staticCategory(data)).click();
  }

  async openAllItems(data) {
    cy.wait(2000);
    return cy.get(locator.staticCategory(data)).click();
  }

  async itemsByCategory(Category) {
    cy.wait(3000);
    return cy.get(locator.dynamicCategory(Category)).click({ force: true })
  }
}

module.exports = VerifyCategory;