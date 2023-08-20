import { test, expect } from '@playwright/test'

test('Multiple Element Locate', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    const links = await page.$$('a');

    for(const link of links ){

       const text =await link.textContent();

       console.log(text);
    }

})