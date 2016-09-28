var selenium = require('selenium-webdriver');
var chrome = require('chromedriver')
var driver = new selenium.Builder()
  // .withCapabilities(selenium.Capabilities.chrome())
  .forBrowser('Chrome')
  .usingServer('https://jodev04.praeses.com/')
  .build();

  driver.get('https://jodev04.praeses.com/')
