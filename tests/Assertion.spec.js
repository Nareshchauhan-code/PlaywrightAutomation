import { test, expect } from "@playwright/test";

test('Assertions ', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    const title = await page.title();
    console.log(title);

    //toHaveTitle()
    await expect(page).toHaveTitle(title);
    await expect(page).not.toHaveTitle('wdsdaffsdvbv');

    // toBeVisible()
    const logo = await page.locator(".header-logo");
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

    //toHaveAttribute()
    const registerBtn = page.locator("#register-button");
    await expect(registerBtn).toHaveAttribute('type', 'submit');

})