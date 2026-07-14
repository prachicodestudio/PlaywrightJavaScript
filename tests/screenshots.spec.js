import {test} from '@playwright/test'


test("Visible page Screenshot", async ({ page }) => {

    // Open Website
    await page.goto("https://www.facebook.com/");



// Create a Date object that contains the current date and time
const now = new Date();

// Create a timestamp string using the current date and time
const timestamp =

    now.getDate() + "-" +// Get the current day (1-31)
    (now.getMonth() + 1) + "-" +    // Get the current month (0-11, so add 1 to make it 1-12)
    now.getFullYear() + "_" +    // Get the current year
    now.getHours() + "-" +// Get the current hour (0-23)
    now.getMinutes() + "-" +   // Get the current minute (0-59)
    now.getSeconds();    // Get the current second (0-59)


    // Capture Screenshot
    await page.screenshot({
        path: "screenshots/" + timestamp +"_LoginPage.png"
    });

});

test("Full page Screenshot", async ({ page }) => {

    // Open Website
    await page.goto("https://www.facebook.com/");

    // Capture Screenshot
    await page.screenshot({
        path: "screenshots/FullLoginPage.png",fullPage:true
    });

});

test("Specific Element Screenshot", async ({ page }) => {

    // Open Website
    await page.goto("https://www.facebook.com/");

    // Capture Screenshot
    await page.locator('#_R_1h6kqsqppb6amH1_').screenshot({
        path: "screenshots/email.png"
    });
});