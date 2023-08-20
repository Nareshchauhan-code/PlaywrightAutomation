import { test, expect } from '@playwright/test'

test('Built in Locators ', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { type: 'submit' }).click();

    const nameLogo =await page.locator("//li[@class='oxd-userdropdown']/span/p").textContent();

    await expect(page.getByText(nameLogo)).toBeVisible();

    //await page.pause();

})