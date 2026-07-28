class LoginPage{

    constructor(page)
    {
    //store the playwright page object
    this.page = page

    //Define page locators
    this.userName = page.locator('#user-name')
    this.password = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    this.errorMessage = page.locator('[data-test="error"]')

   }

   //open website saucedemo

   async openWebsite()
   {
   //open web page url
    await this.page.goto("https://www.saucedemo.com/")

   }

   //enter username
   async enterUserName(username){
    await this.userName.fill(username)
   }

    //enter password
   async enterPassword(password){
    await this.password.fill(password)
   }

    //click on login button
   async clickLogin(){
      await this.loginButton.click()
   }

   //perform complete login
  async login (username,password)
  {
      await this.enterUserName(username)
     await this.enterPassword(password)
     await this.clickLogin()
  }

   //get login error method
   async getErrorMessage()
   {
   return await this.errorMessage.textContent();
   }
}

module.exports = LoginPage;