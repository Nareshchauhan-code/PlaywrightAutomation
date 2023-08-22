import { test, expect } from '@playwright/test'

test('Drop Down Handle', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//select[@id='country' and @class='form-control']").selectOption({ label: 'India' });

    await page.waitForTimeout(3000);



})