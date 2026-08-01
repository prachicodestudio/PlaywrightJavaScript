import { test, expect } from '@playwright/test';
test('SauceDemo Login', async({page})=>{
   //open url
  await page.goto("https://www.saucedemo.com/");
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
})


test('Retries Demo-Facebook has title', async ({ page },testInfo) => {

console.log(`Retry Index: ${testInfo.retry}`)

  await page.goto('https://facebook.com/');
  await expect(page).toHaveTitle("wrong title");

  // Expect a title should be Facebook
  //await expect(page).toHaveTitle("Facebook");
  //await expect(page).toHaveTitle("wrong title");

});


test('Flaky Demo-Facebook has title', async ({ page },testInfo) => {
    console.log(`Retry Index: ${testInfo.retry}`)

    await page.goto('https://facebook.com/');
    if(testInfo.retry===0)
    {
        console.log('First Attempt - Failed');
        await expect(page).toHaveTitle("wrong title");
    }

    //pass on retry
  // Expect a title should be Facebook
   await expect(page).toHaveTitle("Facebook");

});

test.skip('RepeatEachDemo-Facebook has title', async ({ page },testInfo) => {

console.log(`Repeat Index: ${testInfo.repeatEachIndex}`)

  await page.goto('https://facebook.com/');

    if(testInfo.repeatEachIndex===1)
    {
        await expect(page).toHaveTitle("wrong title");
    }
  // Expect a title should be Facebook
  await expect(page).toHaveTitle("Facebook");
  //await expect(page).toHaveTitle("wrong title");

});
