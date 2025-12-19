const{test,expect}=require('@playwright/test'); //importing two thins, test function to create test and expect for assertions

test('Open Google page and check title',async({page})=>
{
   //test code will go here
   await page.goto("https://www.google.com")
   const pageTitle = await page.title()
   console.log("Page Title is :",pageTitle)

   const pageUrl = page.url()
   console.log("Page URL is : ", pageUrl)
   await expect(page).toHaveTitle(/Google/) ;
}

)