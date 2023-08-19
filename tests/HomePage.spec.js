const { expect, test } = require('@playwright/test')

test.only('Title Validation', async ({ page }) => {

  await page.goto('https://demoblaze.com/');

  console.log('Page Title is : ', await page.title());

  await expect(page).toHaveTitle('STORE');

  await expect(page).toHaveURL('https://demoblaze.com/');

  await page.close();



})
