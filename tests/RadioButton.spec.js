import { test, expect } from "@playwright/test"

test('RadioButtonDemo', async ({ page }) => {


    //increase the timeout only for this test 
    test.setTimeout(60000)

    // Open the application and wait only for DOM content to load
    // This avoids waiting for ads and video content
    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html", { waitUntil: 'domcontentloaded' })

    //loacate radio button - year3
    const year3RadioBtn = page.locator("//input[@value='3']")
    //select radio button year-3
    await year3RadioBtn.check()


    //verify radio button is checked
    await expect.soft(year3RadioBtn).not.toBeChecked() //fasle

    //verify if radio button is checked
    await expect(year3RadioBtn.isChecked()).toBeTruthy()
    //verify an unselected radiobutton

    //loacate radio button - year3
    const year5RadioBtn = page.locator("//input[@value='5']")
    //select radio button year-5
    //await year5RadioBtn.check()


    //verify radio button is checked
    await expect.soft(year5RadioBtn).toBeChecked() //false

    //verify if radio button is checked
    await expect(await year5RadioBtn.isChecked()).toBeFalsy() //fail

    await page.waitForTimeout(5000) //pause for 5 sec for demo purpose only

})