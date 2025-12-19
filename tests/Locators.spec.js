//const{test,expect}=require('@playwright/test'); //importing two thins, test function to create test and expect for assertions
import { test, expect } from '@playwright/test';

test('Locators',async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    
    //locate id web element & enter user id - Used Id Property
   // await page.locator('id=user-name').fill('standard_user')
   // await page.locator('#user-name').fill('standard_user') 
   await page.fill('#user-name','standard_user')
  // await page.type('#user-name','standard_user')
    //locate password web element and fill password - by using css selector
    await page.locator('#password').fill('secret_sauce')

    //locate login button and perform click action - By using XPATH
    await page.locator("//input[@id='login-button']").click()

    //verify sucessful login
    await expect(page).toHaveURL(/inventory.html/); //verify url
    await expect(page.locator('.title')).toHaveText('Products'); //verify text

    const productElement = page.locator('.title')
    await expect(productElement).toBeVisible() //verify web elemet visibility


})