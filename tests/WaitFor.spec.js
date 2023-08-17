import { test, expect } from '@playwright/test';

test('Validation', async ({ page }) => {

    const userName = page.locator("[name='username']");
    const password = page.locator("[name='password']");
    const submitbtn = page.locator("[type='submit']");
    const admintbtn = page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)");
    const addbtn = page.locator("button[class='oxd-button oxd-button--medium oxd-button--secondary']");

    const items = page.locator("[class ='oxd-label']");

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await userName.type("Admin");
    await password.type("admin123");
    await submitbtn.click();

    await admintbtn.click();

    await items.first().waitFor();

    console.log(await items.allTextContents());
    await addbtn.click();

})