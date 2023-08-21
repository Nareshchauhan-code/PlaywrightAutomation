import { test, expect } from '@playwright/test'

test('Soft Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');

    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');

})