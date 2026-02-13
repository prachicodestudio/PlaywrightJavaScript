import {test, expect} from '@playwright/test'

test.skip('Single File Upload Demo', async({page})=>{

    //step1. open URL
    await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/FileUpload1.html")

    //Dialog handler - for alert popup
    page.on('dialog', async dialog =>{

        //print alert message in console
        console.log("dialog message is:", dialog.message() )

        //verify alert messaeg contains word "uploaded"
     expect(dialog.message()).toContain('uploaded')

     //click OK button on alert to accept the dialog
     await dialog.accept()

    })

    
     //upload file 
     await page.locator('#fileUpload').setInputFiles('tests/uploadFiles/Resume.txt')
    
     //click on upload button
     await page.locator('button').click()

     //wait for 3 secs for demo only
     await page.waitForTimeout(3000)

    
})


test('Multiple File Upload Demo', async({page})=>{


//open url
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

//Input multiple files
await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/Resume.txt','tests/uploadFiles/smiley.jpg'])

//verify uploaded files
const files = page.locator('#fileList li')

await expect(files.nth(0)).toHaveText('Resume.txt')
await expect(files.nth(1)).toHaveText('smiley.jpg')

await page.waitForTimeout(3000) //for demo only for visibility

//remove uploaded files
await page.locator('#filesToUpload').setInputFiles([])

//verify files are removed
await expect(page.locator('#fileList')).toHaveText('No Files Selected');

//Final pause for demo
await page.waitForTimeout(3000) //3 secs

})


test.only('Drag and Drop File Upload', async ({ page }) => {

    //open url
  await page.goto('file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/DragAndDropFileUpload.html');

  // Upload file
  await page.locator('#fileInput')
    .setInputFiles('tests/UploadFiles/Resume.txt');

  // Verify file name shown
  await expect(page.getByText('Resume.txt')).toBeVisible();

  await page.waitForTimeout(3000); //for demo only
});
