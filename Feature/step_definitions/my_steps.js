const {Given, When, Then} = require('@cucumber/cucumber');
const SauceDemo1=require('../Utility/SauceDemo.page');
let SD=new SauceDemo1();

Given(/^Logged in to SauceDemo_Webpage using the standard_user account$/, function () {
    SD.openUrl();
    SD.enterUserName();
    SD.enterPassword();
    SD.clickOnLogin();
});

When(/^I click on the Sort the products by Price \(high to low\)$/, function () {
SD.clickOnSort();
SD.selectHightoLow();
});

When(/^Add the cheapest and costliest products to my basket$/, function () {
SD.addCostliestProductToBasket();
SD.addCheapestProductToBasket();
});

When(/^I Open the basket$/, function () {
SD.clickOnBasket()
});

Then(/^it should display the Basket with the added products$/, function () {
    SD.assertOnProductsAdded();
});

When(/^I click on the Checkout button$/, function () {
SD.clickOnCheckout();
});

When(/^Enter details and Finish the purchase$/, function () {
SD.enterUserDetails();
});

Then(/^It should show the Complete page with Thank you for your Order message$/, function () {
SD.assertOnCompletion();
});
