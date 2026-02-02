import {test,expect} from '@playwright/test'

test.skip('Mouse Hover action', async({page})=>{

    //open url
    await page.goto("https://the-internet.herokuapp.com/hovers")

    //hover () : moves mouse over the element (mouse over action)
    await page.locator('.figure').first().hover()

    // verify name:user1
    // text selector - it locates element by the visible text on the page
    await expect(page.locator('text=name: user1')).toBeVisible()

    //pause execution for 3 section- for demo onlyu
    await page.waitForTimeout(3000) //3 sec 

})

test.skip('Right click automate and alert handling', async({page})=>{

    //open url
    await page.goto("https://the-internet.herokuapp.com/context_menu")

    //alert handler
    page.on('dialog', async(dialog)=>{

        //pring dialog message
        console.log(dialog.message())
        
        //verify dialog message
        expect(dialog.message()).toBe("You selected a context menu")

        //accept dialog

        await dialog.accept();
    })

    //right click on box
    await page.locator('#hot-spot').click({button:'right'}) ;

    //pause for demo
    await page.waitForTimeout(3000) //3 secs
})

test.skip('Drag And Drop Automation', async({page})=>{

    //open url
    await page.goto('https://testpages.eviltester.com/pages/interaction/drag-drop/')
    
    await page.locator('#draggable1').dragTo(page.locator('#droppable1'))

    //Verify, After drop, text inside dropable 1 should be 'Dropped!'
    await expect(page.locator('#droppable1 p')).toHaveText('Dropped!')
    await page.waitForTimeout(2000) //for demo

    await page.locator('#draggable2').dragTo(page.locator('#droppable2'))
    await expect(page.locator('#droppable2 p')).toHaveText('Dropped!')
    await page.waitForTimeout(2000) //for demo

})

test('Doublel click automation', async({page})=>{

    //opn url
    await page.goto('https://testpages.eviltester.com/pages/interaction/javascript-events/')

    //double click on button
    await page.locator('#ondoubleclick').dblclick()
    
    //verify after douible click,  status text becomes 'Event Triggered'
    await expect(page.locator('#ondoubleclickstatus')).toHaveText('Event Triggered');

    //pause for 3 secs for demo pupose
    await page.waitForTimeout(3000)


})