import{test,expect} from '@playwright/test'

test("PromptAlterHandling",async({page})=>{

    //Step1: open url
    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")

    //Step2: we must register the dialog handler before clicking the button

   //once means this handler will run only one time
   //Listen for the Prompt dialog
    page.once('dialog',async dialog=>{

        //check what type of dialog it is (alert/confirm/prompt)
        expect(dialog.type()).toBe('prompt');

        //Read te message shown inside the alert popup
        expect(dialog.message()).toContain('I prompt you')

        //verify default text inside prompt input box
        expect(dialog.defaultValue()).toBe('change me')

        //Enter value :Prachi Gupta and click ok
        await dialog.accept('Prachi Gupta')

        //click OK button on the alert
       // await dialog.accept()

        //to click cancel instead, we would use
       // await dialog.dismiss()

    })

    //Step3: click the button that opens the prompt alert popup
     await page.getByText('Show prompt box').click()

     //step4: verify that alert was handled successfully
     await expect(page.locator('#promptreturn')).toHaveText('Prachi Gupta')

     await page.waitForTimeout(3000);

})

