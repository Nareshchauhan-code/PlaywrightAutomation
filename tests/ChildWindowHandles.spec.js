import { test, expect } from "@playwright/test";

test('Child Window Handles', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://toolsqa.com/');
    console.log(await page.title());

    expect(await page.title()).toMatch('Tools QA');

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        page.locator('header li:nth-child(3) a:nth-child(1)').click(),

    ])

    await page.pause();
    let text = await newPage.title();
    console.log(text);

    let elements = await newPage.locator("div[class='category-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(3) h5:nth-child(1)");
    elements.click();



})
