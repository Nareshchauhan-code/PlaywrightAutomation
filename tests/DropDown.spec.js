import { test, expect } from "@playwright/test";

test('DropDown Test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.locator("#username").type("rahulshettyacademy");
    await page.locator("#password").type("learning");
    await page.locator("span.checkmark").last().click();

    await expect(page.locator("span.checkmark").last()).toBeChecked();
    console.log(await page.locator("span.checkmark").last().isChecked());
    await expect(page.locator("span.checkmark").last()).toBeTruthy();
    await page.locator("#okayBtn").click();

    await page.locator("select.form-control").selectOption('consult');
    await page.locator("#terms").click();
    await page.locator("#terms").uncheck();
    await page.locator("#terms").click();

    await page.locator("#signInBtn").click();

    await page.pause();

})
