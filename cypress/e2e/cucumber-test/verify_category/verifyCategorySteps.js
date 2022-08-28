import { Given, When, Then, And} from  "@badeball/cypress-cucumber-preprocessor";

const verifyCategory = require("../../../support/pages/VerifyCategory");
let verify = new verifyCategory();

Given(/^User visit FairPrice website$/, () => {
    verify.visit();
})
When(/^User click a (\w+) menu$/, (data) => {
    verify.openPromotionMenu(data);
})
And(/^User see all items of (\w+)$/, (data) => {
    verify.openAllItems(data);
})
Then(/^User see all items by (.+) category$/, (Category) => {
    verify.itemsByCategory(Category);
})



// Given(/^User visit FairPrice website$/, () => {
//     cy.visit("/");
// })
// When(/^User click a Promotion menu$/, () => {
//     cy.get('[data-testid="Promotions"]').click();
// })
// And(/^User see all items$/, () => {
//     cy.get('[data-testid="tagAll"]').click();
// })
// Then(/^User see all items by (.+) category$/, (Category) => {
//     let element = Category.split(' ').join('-').toLowerCase()
//     let path = '[data-testid="tagOption-'+element+'"]'
//     cy.get(path).click();
// })
