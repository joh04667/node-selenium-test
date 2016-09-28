var login = function(driver) {

var By = driver.By

  var loginForm = driver.findElement(By.css('form'))
  var loginEmail = driver.findElement(By.id('UserEmail'));
  var loginPassword = driver.findElement(By.id('UserPassword'));
  loginEmail.sendKeys(process.env.USER_EMAIL);
  loginPassword.sendKeys(process.env.USER_PASSWORD)
  loginForm.submit();
}

module.exports = login;
