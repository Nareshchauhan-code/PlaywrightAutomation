import { test, expect } from '@playwright/test'

test('Drop Down Handle', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Label
    //await page.locator("//select[@id='country' and @class='form-control']").selectOption({ label: 'India' });

    // Visible Text
    //await page.locator("//select[@id='country' and @class='form-control']").selectOption('India');

    // Select by Value

    //await page.locator("//select[@id='country' and @class='form-control']").selectOption({value:'usa'});

    // Select by Index 

    await page.locator("//select[@id='country' and @class='form-control']").selectOption({ index: 1 });

    // Find the all Options 1st way
    const drpOption = await page.locator("//select[@id='country' and @class='form-control']/option");
    await expect(drpOption).toHaveCount(10);
    // 2nd way
    const allOptions = await page.$$("//select[@id='country' and @class='form-control']/option");
    console.log("Total Options : ", await allOptions.length)


    await page.waitForTimeout(3000);



})