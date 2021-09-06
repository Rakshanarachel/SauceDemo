const webdriver = require('selenium-webdriver');
require('chromedriver');
const {By} = require('selenium-webdriver');
let driver=new webdriver.Builder().forBrowser('chrome').build();

let Url="https://www.saucedemo.com/";
let Username="standard_user";
let Password="secret_sauce";
let First_Name="Rakshana";
let Last_Name="Ramesh";
let Pincode="3749";

class SauceDemo1 {
    async openUrl() {
      await  driver.get(Url);

    }
    enterUserName() {
        driver.findElement(By.id("user-name")).sendKeys(Username);
    }
    enterPassword() {
        driver.findElement(By.xpath('//input[@id="password" and @placeholder="Password"]')).sendKeys(Password);
    }
    clickOnLogin(){
        driver.findElement(By.id("login-button")).click();
    }
    clickOnSort(){
        driver.findElement(By.xpath('//span[@class="active_option"]')).click();
    }
    selectHightoLow(){
        driver.findElement(By.xpath('//option[@value="hilo"]')).click();
    }
    addCostliestProductToBasket(){
        driver.findElement(By.xpath('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]')).click();
    }
    addCheapestProductToBasket(){
        var ele=driver.findElement(By.xpath('//a[@href="https://twitter.com/saucelabs"]'));
        ele.scrollIntoView();
        driver.findElement(By.xpath('//button[@id="add-to-cart-sauce-labs-onesie"]')).click();
    }
    clickOnBasket(){
        driver.findElement(By.xpath('//a[@class="shopping_cart_link"]')).click();
    }
    assertOnProductsAdded(){
        var d=driver.findElement(By.xpath('//div[@class="cart_quantity"]')).isDisplayed();
        if(d.toUpperCase().equals("TRUE")){
            console.log("Assertion passed, Your products are added to cart successfully!");
        }
        else {
            console.log("Assertion failed");
        }
    }
    clickOnCheckout(){
        var checkout= driver.findElement(By.xpath('//*[@id="checkout"]'));
        checkout.scrollIntoView();
        checkout.click();

    }
    enterUserDetails(){
        driver.findElement(By.xpath('//input[@id="first-name"]')).sendKeys(First_Name);
        driver.findElement(By.id("last-name")).sendKeys(Last_Name);
        driver.findElement(By.id("postal-code")).sendKeys(Pincode);
        var continue1=driver.findElement(By.id("continue"));
        continue1.scrollIntoView();
        continue1.click();
        var finish=driver.findElement(By.id("finish"));
        finish.scrollIntoView();
        finish.click();
    }
    assertOnCompletion(){
        var ThankText=driver.findElement(By.xpath('//h2[contains(text(),"THANK YOU FOR YOUR ORDER")]')).getText();
        if(ThankText.contains("THANK")){
            console.log("Assertion passed, Your Order Completed!");
        }else {
            console.log("Assertion failed, Your order not completed!");
        }
    }

}
module.exports= SauceDemo1;