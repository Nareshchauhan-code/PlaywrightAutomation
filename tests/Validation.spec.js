import { test, expect } from '@playwright/test';

test('Validation', async ({ page }) => {


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").type("Admin");
    await page.locator("[name='password']").type("admin123");
    await page.locator("[type='submit']").click();

    await page.locator(".oxd-main-menu-item.active").click();

    await page.locator("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();

})