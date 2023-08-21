import { test, expect } from "@playwright/test";

test('Assertions ', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    const title = await page.title();
    console.log(title);

    //toHaveTitle()
    await expect(page).toHaveTitle(title);
    const logo = await page.locator(".header-logo");

    // toBeVisible()
    await expect(logo).toBeVisible();

    //toBeEnabled()
    const searchBox = await page.locator("#small-searchterms");
    await expect(searchBox).toBeEnabled();

    // toBeChecked()
    const radiobtn = await page.locator("#gender-male");
    radiobtn.click();
    await expect(radiobtn).toBeChecked();
    const checkBox = await page.locator("#Newsletter").first();
    await expect(checkBox).toBeChecked();
    await page.pause();



})