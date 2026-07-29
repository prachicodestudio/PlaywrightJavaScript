import { test, expect } from '@playwright/test';
test('SauceDemo Login', async({page})=>{
   //open url
  await page.goto("https://www.saucedemo.com/");
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
})

test('Playwright has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('Facebook has title', async ({ page }) => {
  await page.goto('https://facebook.com/');

  // Expect a title should be Facebook
  await expect(page).toHaveTitle("Facebook");
});


