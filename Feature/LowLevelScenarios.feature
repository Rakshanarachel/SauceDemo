Feature: Login to app & Purchase the product
  Scenario: Login - Customer logging in as standard user
    Given I visit "login"
    When I enter "standard_user" in the "username" field
    And I enter "secret_sauce" in the "password" field
    And I press the "login" button
    Then I should see the "Products" page
  Scenario: Sort the products by price (High to low)
    Given I see the product page
    When I click on the filter icon
    And I select the Price(High to low) in options
    Then the products should be sorted from high to low
  Scenario: Adding products to basket - Lowest & Costliest products
    Given I am on product page which is sorted
    When I Click on Add to basket button for the first product (Costliest)
    Then the product should be added to the basket
    And the basket icon should show 1
    And scroll down to the end of the page
    When I Click on Add to basket button for the last product (Cheapest)
    Then the product should be added to the basket
    And the basket icon should show 2
  Scenario: Open the basket & Checkout
    Given I have added the products to the basket
    When I click on the basket icon
    Then it should display the products which is added
    And scroll down to the Checkout
    When I am clicking on the Checkout button
    Then it should display the Your Information page
  Scenario: Purchase the product
    Given I am on "Your Information" page
    When I enter "Standard" in "First Name" field
    And I enter "User" in "Last name" field
    And I enter the "9000" in postal code field
    And I click on the "Continue" button
    Then it should display the "overview" page
    And When i click on the "Finish"button
    Then It should show the "Complete" page with "Thank you for your Order" message


