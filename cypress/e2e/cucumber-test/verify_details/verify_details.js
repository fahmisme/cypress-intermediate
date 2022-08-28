import { Given, When, Then, And} from  "@badeball/cypress-cucumber-preprocessor";

const VerifyCategory = require("../../../support/pages/VerifyCategory");
const VerifyDetails = require("../../../support/pages/VerifyDetails");

let verify = new VerifyCategory();
let verify_details = new VerifyDetails();


Given(/^User load a FairPrice website$/, () => {
    verify.visit();
})
When(/^User choose a (\w+) menu$/, (data) => {
    verify.openPromotionMenu(data);
})
And(/^User look all items of (\w+)$/, (data) => {
    verify.openAllItems(data);
})
And(/^User see items by (.+) category$/, (Category) => {
    verify.itemsByCategory(Category);
})
Then(/^User check (.+) of items$/, (Label) => {
    verify_details.checkLabel(Label);
})
