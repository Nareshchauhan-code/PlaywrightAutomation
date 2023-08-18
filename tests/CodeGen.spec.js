import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('Naresh');
  await page.getByPlaceholder('First name').press('Tab');
  await page.getByLabel('Surname').fill('Chauhan');
  await page.getByLabel('Surname').press('Tab');
  await page.getByLabel('Mobile number or email address').fill('8652682u3');
  await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('12345');
  await page.getByRole('button', { name: 'Sign Up' }).click();
});