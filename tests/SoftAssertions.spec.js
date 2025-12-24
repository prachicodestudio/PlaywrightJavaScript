import{test,expect} from "@playwright/test"

test('SoftAssertions',async({page})=>{

//open url
await page.goto('https://www.saucedemo.com/')

// //////////////////HARD ASSERTION/////////////
// //verify page title
// await expect(page).toHaveTitle('Swag Labs123')

// //verify url
// await expect(page).toHaveURL('https://www.saucedemo.com/')

//////////////////SOFT ASSERTION/////////////
//verify page title
await expect.soft(page).toHaveTitle('Swag Labs123')

//verify url
await expect.soft(page).toHaveURL('https://www.saucedemo12.com/')

const usernameInput = page.locator('#user-name');
const passwordInput = page.locator('#password');
const loginButton = page.locator('#login-button');
const errorMessage = page.locator('[data-test="error"]')


//enter username
await usernameInput.fill('standard_user');
 await page.waitForTimeout(5000) //pause code for 10 seconds

//enter password
 await passwordInput.fill('secret_sauce');

 await page.waitForTimeout(5000) //pause code for 10 seconds

})