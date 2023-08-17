import { test, expect } from '@playwright/test';

test('Record and Code Generate in File', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Text Box').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Naresh Chauhan');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('naresh@gmail.com');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('Noida');
  await page.getByPlaceholder('Current Address').click();
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Greater Noida');
  await page.getByRole('button', { name: 'Submit' }).click();
});