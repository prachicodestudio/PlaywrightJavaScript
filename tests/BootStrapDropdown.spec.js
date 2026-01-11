import{test, expect} from '@playwright/test'

test('BootStrapDropDownDemo',async({page})=>{
//open url
await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/BootStrapDropdown.html")

//locate bootstrap dropdown and perform click action
await page.locator(".multiselect").click()

//Locate list items <li> inside the bootstrap dropdown menu
const items =page.locator("ul.dropdown-menu > li")

//get the totral number of dropdown options
const total = await items.count()

//print total nuber of options inn the terminal
console.log('Total options:', total)

//verify that the dropdown contains exactly 10 options
await expect(items).toHaveCount(10)

//create an array of options names that we want to select
const valuesToSelect = ['Python','jQuery Tutorials','MySQL']

//create an array of options names that we want to select
const valuesToDeSelect = ['HTML','CSS']


//Loop through each dropdown options one by one
for(let i=0; i<total; i++)
{
    //get the current dropdown item using index
    const item = items.nth(i)

    //Read the visible text of the current dropdown item
    const text = (await item.textContent()).trim();

    //check if the current option text matches our required values
    if(valuesToSelect.includes(text))
    {
        //locate the checkbox inside the matched option and check/select it
       await  item.locator('input[type="checkbox"]').check()
    }

     //check if the current option text matches our required values
    if(valuesToDeSelect.includes(text))
    {
        //locate the checkbox inside the matched option and uncheck/deselect it
       await  item.locator('input[type="checkbox"]').uncheck()
    }
}

//pause for 5 seconds (only for demo/learning purpose)
await page.waitForTimeout(5000)
})