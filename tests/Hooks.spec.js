import{test, expect,chromium} from '@playwright/test'
let browser
let page

test.beforeAll(async()=>{
browser = await chromium.launch()
page= await browser.newPage()

await page.goto('https://www.saucedemo.com/');

// Verify Login Page
await expect(page.locator('.login_logo')).toHaveText('Swag Labs');

  console.log('Login page displayed successfully');

})
test.beforeEach(async()=>{

console.log("---------------------Before each----------------------")
 await page.goto("https://www.saucedemo.com/");
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

})
test("Test Product Page", async()=>{
  //open url
 // await page.goto("https://www.saucedemo.com/");
//await page.fill('#user-name', 'standard_user');
 // await page.fill('#password', 'secret_sauce');
 // await page.click('#login-button');

 //Expected Result 1: URL should contain inventory.html
  await expect(page).toHaveURL(/inventory.html/);

  //Expected Result 2: Products should be visible
  await expect(page.locator('[data-test="title"]')).toHaveText('Products')

  // page.screenshot({ path: 'screenshots/ProductPage.png'})

  //pause for 3 seconds for demo
   await page.waitForTimeout(3000)

  // await page.close();

})

test('Add Product To Cart', async()=>{
   //open url
 // await page.goto("https://www.saucedemo.com/");
 // await page.fill('#user-name', 'standard_user');
 // await page.fill('#password', 'secret_sauce');
 // await page.click('#login-button');
    console.log(browser.browserType().name());
   //add product 'sauce-labs-backpack' to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click()

 await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  console.log('Product added to cart');

 //  page.screenshot({ path: 'screenshots/AddToCart.png'})
// await page.screenshot({
//    path: 'screenshots/AddToCart.png'
//  });
  //pause for 3 seconds for demo
   await page.waitForTimeout(3000)
 //  await page.close();
});

test.afterEach(async ({}, testInfo)=>{
    console.log("--------------------After Each-----------------------")
   await page.screenshot({ path: `screenshots/${testInfo.title}.png`})

   // Logout
    await page.locator("#react-burger-menu-btn").click();
    await expect(page.locator("#logout_sidebar_link")).toBeVisible();

    await page.locator("#logout_sidebar_link").click();

    console.log("Logout successful");
})

test.afterAll(async()=>{
  await page.close();

})