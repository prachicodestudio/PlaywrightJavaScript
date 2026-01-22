import{test,expect} from '@playwright/test'

test('NestedFrameDemo', async({page})=>{

    //step1 : open url
    await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/nested-frame.html")

    //step2: switch to parent frame
    const parentFrame = page.frame('parentFrame')

    //verify parent frame text to be visible
    await expect(parentFrame.locator("//p[normalize-space()='This is the parent frame.']")).toBeVisible();

    //switch to child frame and verify child text
    const childFrame= parentFrame.frameLocator("//iframe[@name='childFrame']")

    //locate child text on childFrame and verify child text
    await expect(childFrame.locator("//p[@id='childText']")).toHaveText("This is a nested (child) frame.")
    
})