import { test, expect } from '@playwright/test'

test('Multiple Links Locate', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    const links = await page.$$('a');

    for (const link of links) {

        const text = await link.textContent();

        console.log(text);
    }

})

test('Multiple Elements Locate', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const product of products) {

        const productName = await product.textContent();

        console.log("Product Name is : ", productName)

    }

})