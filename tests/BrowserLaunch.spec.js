import { test, expect } from '@playwright/test'
test('Browser Launch', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://google.com');
    await page.locator('#APjFqb').fill('Welcome to playwright !!!');
    await page.pause();

})