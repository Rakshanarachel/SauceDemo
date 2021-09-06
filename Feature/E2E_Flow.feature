Feature: Purchase the product at SauceDemo
  Scenario: Login & purchase the product
  Given Logged in to SauceDemo_Webpage using the standard_user account
  When I click on the Sort the products by Price (high to low)
  And Add the cheapest and costliest products to my basket
  When I Open the basket
    Then it should display the Basket with the added products
  When I click on the Checkout button
  And Enter details and Finish the purchase
    Then It should show the Complete page with Thank you for your Order message
