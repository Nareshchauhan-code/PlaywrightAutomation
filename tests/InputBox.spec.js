import { test, expect } from '@playwright/test'

test('Handle Input Box', async ({ page }) => {

    await page.goto('https://www.facebook.com/');

    const email = page.locator("input[id='email']");

    await expect(email).toBeVisible();
    await expect(email).toBeEmpty();
    await expect(email).toBeEditable();

    await email.fill('Naresh Chauhan');
    await page.waitForTimeout(5000);

})