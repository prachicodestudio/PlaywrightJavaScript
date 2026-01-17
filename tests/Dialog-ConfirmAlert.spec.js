import{test,expect} from '@playwright/test'

test("ConfirmAlterHandling",async({page})=>{

    //Step1: open url
    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")

    //Step2: we must register the dialog handler before clicking the button

   //once means this handler will run only one time
   //Listen for the confirmation dialog
    page.once('dialog',async dialog=>{

        //check what type of dialog it is (alert/confirm/prompt)
        expect(dialog.type()).toBe('confirm');

        //Read te message shown inside the alert popup
        expect(dialog.message()).toContain('I am a confirm alert')

        //click OK button on the alert
        await dialog.accept()

        //to click cancel instead, we would use
       // await dialog.dismiss()

    })

    //Step3: click the button that opens the confirmation alert popup
     await page.getByText('Show confirm box').click()

     //step4: verify that alert was handled successfully
     await expect(page.locator('#confirmreturn')).toHaveText('true')

     await page.waitForTimeout(3000);

})

