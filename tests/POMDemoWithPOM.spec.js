import { test, expect } from '@playwright/test';

const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')
const ShoppingCartPage = require('../pages/ShoppingCartPage')


// Test 1 - Add Product to Cart
test('Login Add Product To Cart', async ({ page }) => {

const login = new LoginPage(page)
const inventory = new InventoryPage(page)
const cart = new ShoppingCartPage(page)

//open url
await login.openWebsite()
await login.login("standard_user","secret_sauce")

await page.waitForTimeout(2000)//pause of 2 sec

await inventory.addProductToCart();
await inventory.openCart()

//verify product in cart
console.log(await cart.getProductName())
await page.waitForTimeout(2000)//pause of 2 sec

//    // Logout
//    await page.click('#react-burger-menu-btn');
//    await page.click('#logout_sidebar_link');
});


 //Test 2 - Remove Product from Cart
test('Remove Product From Cart', async ({ page }) => {

const login = new LoginPage(page)
const inventory = new InventoryPage(page)
//const cart = new ShoppingCartPage(page)

//open url
await login.openWebsite()
await login.login("standard_user","secret_sauce")

await page.waitForTimeout(2000)//pause of 2 sec

await inventory.addProductToCart();

await page.waitForTimeout(2000)//pause of 2 sec

await inventory.removeProduct();
await page.waitForTimeout(2000)//pause of 2 sec


});