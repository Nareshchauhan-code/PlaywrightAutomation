import { test, expect } from "@playwright/test";

test('Locators in Playwright', async ({ page }) => {

   let userName = page.locator('#user-name');
   let passWord = page.locator('#password');

   await page.goto("https://www.saucedemo.com/");
   await userName.fill("standard_user")
   await passWord.fill('secret_sauce');
   await page.locator('#login-button').click();

   let text =await page.locator("a[id='item_4_title_link'] div[class='inventory_item_name']").textContent();

   console.log(text);


})

