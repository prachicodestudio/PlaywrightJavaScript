import { test, expect } from '@playwright/test';

test('Record Video', async ({ page }) => {

    //open url
  await page.goto('https://www.saucedemo.com/');


    //enter user name
    await page.locator('#user-name').fill('standard_user');
 // Wait for Demo
    await page.waitForTimeout(2000);

    //enter password
    await page.locator('#password').fill('secret_sauce');
    // Wait for Demo
    await page.waitForTimeout(2000);

    //check for visibility of login button
    await expect(page.locator('#login-button')).toBeVisible();

    //click on login button
    await page.locator('#login-button').click();

    // Wait for Demo
    await page.waitForTimeout(2000);

})