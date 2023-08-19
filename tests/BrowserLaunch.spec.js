import { test, expect } from '@playwright/test'

test("Browser Launch", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://facebook.com');


})