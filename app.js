// utility module for environment vars
require('dotenv').config();

// Import Selenium instance and utility functions
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
// Import browser drivers
var chrome = require('chromedriver')





var driver = new webdriver.Builder()
  // .withCapabilities(webdriver.Capabilities.chrome())
  .forBrowser('chrome')
  .build();


driver.get(process.env.TEST_URL)
driver.wait(until.titleIs('webdriver - Google Search'), 10000)
