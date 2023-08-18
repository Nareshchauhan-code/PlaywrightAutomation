import { test, expect } from "@playwright/test";

test('Child Window Handle', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    let blinkingText = page.locator("[href*='documents-request']");
    console.log(blinkingText.isEnabled);
    await expect(blinkingText).toHaveAttribute("class", "blinkingText");

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        blinkingText.click(),

    ])

    let text = await newPage.locator(".red").textContent();
    console.log(text);
    let userName = text.substring(26, 48);

   await page.locator("#username").type(userName);

    await page.pause();

})
