//import test and expect from playwright test lib
import{test, expect} from '@playwright/test'

test('Pagination table', async({page})=>{

    //open the website/url in the browser
   await page.goto("https://practice-automation.com/tables/")

   //locate the table usign  id
   const table = page.locator('#tablepress-1')

    //count total number of columns
    const columns = table.locator('thead tr th')
    const totalColumns =  await columns.count()
    console.log("Total columns:", totalColumns)
    expect(totalColumns).toBe(3)

     //count total number of rows
    const rows = table.locator('tbody tr')
    const totalRows = await rows.count()
    console.log("Total rows:", totalRows)

   //locate pagination buttons that contain 1,2,3 exclude previous < and next > button
   const pages = page.locator("nav[aria-label='pagination'] button.dt-paging-button:not(.previous):not(.next)")

   //count total number of pages
   const totalPages = await pages.count();
   console.log('Total pages:',totalPages)

   //validation to make sure pagination exist
   expect(totalPages).toBeGreaterThan(0)

   //For loop to iterate through pages
    //p = page index (0,1,2)
   for(let p=0; p<totalPages; p++)
   {
    //nth works like an array index
    await pages.nth(p).click();

    //after clicking pagination table rows get updated in DOM
    //now we will locate rows
    for (let i=0; i< totalRows ;i++)
    {
        //pick one row at a time
        const row = rows.nth(i);

        //each row has multiple cells/columns
        const cells = row.locator('td')

        //loop through all the cells in a row
        for (let j =0; j< await cells.count(); j++)
        {
            //read text from each cell print
            console.log(await cells.nth(j).textContent())
                        
        }
        console.log('----------------------------------')

    }

   }

   
})