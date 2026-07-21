import {test,expect} from '@playwright/test'

test('Automate Multiple Tabs', async({page})=>{

//Step1: Open the parent page
await page.goto("https://the-internet.herokuapp.com/windows")

//verify that we are on the correct page
await expect(page.locator('h3')).toHaveText('Opening a new window')

console.log("Parent page title:", await page.title());

//Step 2: capture the child tab

//Array Destructuring - take the first value from the array and store it in childPage.Ignore the remaining values
const [childPage] = await Promise.all([//operation1
page.context().waitForEvent('page'), page.locator('text=Click Here').click()])

//Step3
// wait until the child page is completely loaded
 await childPage.waitForLoadState()

//Step4: work on the child page
console.log("Child Window Title.",await childPage.title())

//verify that we are on the correct child page
await expect(childPage.locator('h3')).toHaveText('New Window')

//step 5: switch back to parent tab
page.bringToFront();
console.log("Back to parent page:", await page.title())

//step6: close child tab
await childPage.close();


}
)

