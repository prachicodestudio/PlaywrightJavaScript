import{test, expect} from '@playwright/test'

test('Pagination table automation', async ({ page }) => {

    // Step 1: Open local HTML file or hosted page
    // If file is local, use: file:///path/to/file.html
    await page.goto('file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/tables.html');

    // Step 2: Locate table body
    const tableBody = page.locator('#tableBody');

    // Step 3: Locate pagination buttons
    // This returns a LIST (array-like structure)
    const pages = page.locator('#pagination button');

    // Step 4: Get total number of pages
    const totalPages = await pages.count();
    console.log('Total pages:', totalPages);

    // Validation: Pagination should exist
    expect(totalPages).toBeGreaterThan(0);

    // Step 5: Loop through each page
    for (let p = 0; p < totalPages; p++) {

        // Click pagination button
        await pages.nth(p).click();

        // Locate rows AFTER page change
        const rows = tableBody.locator('tr');

        // Validation: 5 rows per page
        expect(await rows.count()).toBe(5);

        // Step 6: Loop through rows
        for (let i = 0; i < await rows.count(); i++) {

            // Pick one row
            const row = rows.nth(i);

            // Locate all cells in that row
            const cells = row.locator('td');

            // Read cell data (ID, Name, Price)
            for (let j = 0; j < await cells.count() - 1; j++) {
                const text = await cells.nth(j).textContent();
                console.log(text);

                if (text.includes('Bluetooth Adapter')) {
                    // Locate checkbox in the same row (usually last column)
                    const checkbox = row.locator('td input[type="checkbox"]');

                    // Check the checkbox
                    await checkbox.check();

                    console.log('Checkbox selected for Bluetooth Adapter');
                }
            }
            console.log('----------------');
        }
    }

    await page.waitForTimeout(5000)
});