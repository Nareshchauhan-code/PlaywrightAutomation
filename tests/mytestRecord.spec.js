import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.telusinternational.com/');
  await page.getByLabel('Menu', { exact: true }).getByRole('link', { name: 'Careers' }).click();
  await page.getByText('Find your next career:').click();
  await page.locator('.select__indicator').click();
  await page.getByText('View locations').click();
  await page.locator('div').filter({ hasText: /^View locations$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^View locations$/ }).nth(1).click();
  await page.locator('#consent_blackbar').click();
  await page.locator('div').filter({ hasText: /^View locations$/ }).nth(3).click();
  await page.locator('#react-select-2-option-15').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'See jobs' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Digital Solutions - Automation Testing Profession with Selenium API Testing, Playwright, Cypress' }).click();
});