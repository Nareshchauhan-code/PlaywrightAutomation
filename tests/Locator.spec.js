//import{test,expect} from '@playwright/test'

const { test, expect } = require('@playwright/test')

test('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    
    // Click Login Button
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    // Fill the Username
    await page.locator('#loginusername').fill('pavanol');
    await page.locator("input[id='loginpassword']").type('test@123');
    await page.locator("//button[text()='Log in']").click();
    let logoutBtn=await page.locator("//a[text()='Log out']");
    // Assertion 
    await expect(logoutBtn).toBeVisible();
    await logoutBtn.click();


})