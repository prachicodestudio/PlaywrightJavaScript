import { test, expect } from "@playwright/test"

test('InputDemo', async ({ page }) => {


    //increase the timeout only for this test 
    test.setTimeout(60000)

    // Open the application and wait only for DOM content to load
    // This avoids waiting for ads and video content
    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html", { waitUntil: 'domcontentloaded' })

    //locate firstname inputbox
    const firstNameInput = page.locator("//input[@name='firstname']")

    //Input nox is visible or not
    await expect(firstNameInput).toBeVisible()

    //input box is empty or not
    await expect(firstNameInput).toBeEmpty()

    //input box is enable or not
    await expect(firstNameInput).toBeEnabled()
    //input box is editable or not
    await expect(firstNameInput).toBeEditable()
    //enter first name in input

    await firstNameInput.fill("Prachi")

    await page.waitForTimeout(5000) //pause for 5 sec for demo purpose only

})