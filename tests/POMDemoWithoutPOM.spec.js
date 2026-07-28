import { test, expect } from '@playwright/test';
// Test 1 - Add Product to Cart
test('Add Product To Cart', async ({ page }) => {

    // Open Website
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add Product to Cart
    await page.click('#add-to-cart-sauce-labs-backpack');

    // Verify Product Added
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Logout
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
});


// Test 2 - Remove Product from Cart
test('Remove Product From Cart', async ({ page }) => {

    // Open Website
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add Product to Cart
    await page.click('#add-to-cart-sauce-labs-backpack');


    //go to cart page
    await page.locator('.shopping_cart_badge').click()

     // Remove Product from Cart
    await page.click('#remove-sauce-labs-backpack');

    // Verify Cart Badge is Removed
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);


    // Logout
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
});