// utility module for environment vars
require('dotenv').config();

// require testing frameworks
var assert = require('assert');
// var chai = require('chai');
// chai.should();
Test = require('selenium-webdriver/testing');
// console.log(test)
// Import Selenium instance and utility functions
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
// Import browser drivers
var chrome = require('chromedriver')


console.log(assert);

console.log('\n', 'Beginning unit tests:');

var driver = new webdriver.Builder()
    // .withCapabilities(webdriver.Capabilities.chrome())
    .forBrowser('chrome')
    .build();




Test.describe('Connection', function() {
    this.timeout(20000);
    Test.it('Should connect to the URL', function() {

        driver.get(process.env.TEST_URL).then(function() {

            assert.equal(true, true);
        });
    });
});

Test.describe('Login Form', function() {
    this.timeout(20000);

    var loginForm = driver.findElement(By.css('form'));
    var loginEmail = driver.findElement(By.id('UserEmail'));
    var loginPassword = driver.findElement(By.id('UserPassword'));

    Test.it('Should not accept blank credentials', function() {
        loginEmail.sendKeys("");
        loginPassword.sendKeys("");
        loginForm.submit();

        var error = driver.wait(until.elementLocated(By.className("login-validation-error")));
        var smallError = driver.findElement(By.id("dvUserEmailClientValidation"));
        var errorText = smallError.findElement(By.css('span'));

        console.log(errorText);
        //TODO: getText() method does nothing?

    });
});
