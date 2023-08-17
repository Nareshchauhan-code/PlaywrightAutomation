import { test, expect } from "@playwright/test";

test('Locators in Playwright', async ({ page }) => {

   const userName = page.locator('#user-name');
   const passWord = page.locator('#password');
   const clickBtn = page.locator('#login-button');

   // Enter the Value in Fields 
   await page.goto("https://www.saucedemo.com/");
   console.log(await page.title());
   await userName.type('Naresh Chauhan');
   await passWord.type('12345');
   // Click the Login Butten 
   await clickBtn.click;

   // Again Enter the Value after Removing the Exsiting one

   await userName.clear();
   await userName.fill("Kapil")
   await passWord.clear();
   await passWord.fill('9876543');
   await clickBtn.click;


})

