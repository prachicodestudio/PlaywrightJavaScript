import{test, expect} from '@playwright/test'

test.skip('Keyboard Actions Demo', async({page})=>{

//step1: open url
await page.goto('https://the-internet.herokuapp.com/key_presses?')

//step2: Press A key
await page.keyboard.press('A')

//Verify result
await expect(page.locator('#result')).toHaveText('You entered: A')

//pause for 3 secs for demo
await page.waitForTimeout(2000)

//Press Enter key
await page.keyboard.press('Enter')

//Verify result
await expect(page.locator('#result')).toHaveText('You entered: ENTER')

//pause for 3 secs for demo
await page.waitForTimeout(2000)

//Press Control key
await page.keyboard.press('Control')

//Verify result
await expect(page.locator('#result')).toHaveText('You entered: CONTROL')

//pause for 3 secs for demo
await page.waitForTimeout(2000)


})

test.skip('KeyboardActionCopyPaste', async({page})=>{


    //open url
    await page.goto('file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/KeyBoardAction.html')

    //click on the first text box
    await page.locator('#box1').click()

    //type text using keyboard
    await page.keyboard.type('Welcome to playwright keyboard actions.')
    
    //press control +A to select all text
    await page.keyboard.press('Control+A')

    //press control + C top copy the selected text
        await page.keyboard.press('Control+C')


        
    //click on the second text box
    await page.locator('#box2').click()

    //press control + V to paste the copied text
    await page.keyboard.press('Control+V')

    //verify the box2 text
    await expect(page.locator('#box2')).toHaveValue('Welcome to playwright keyboard actions.')
    await page.waitForTimeout(3000)//for demo only

})

test('Textarea text selection using Shift + Arrow', async ({ page }) => {

  // Step 1: Open local HTML
  await page.goto('file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/KeyBoardAction.html');

  // Step 2: Click textarea to focus
  await page.locator('#box1').click();

  // Step 3: Type text
  await page.keyboard.type('Playwright keyboard actions demo');

  // Pause for demo
  await page.waitForTimeout(1500);

  //press home button to bring cursor at starting 
   // Step 4: Hold Shift key
  await page.keyboard.press('Home');


  // Step 4: Hold Shift key
  await page.keyboard.down('Shift');

  // Step 5: Select text using ArrowLeft (select from end)
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');

  // Step 6: Release Shift key
  await page.keyboard.up('Shift');

  // Pause so selection is visible
  await page.waitForTimeout(3000);
});