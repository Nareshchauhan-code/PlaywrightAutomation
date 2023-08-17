import { test, expect } from "@playwright/test";

test('Locators in Playwright', async ({ page }) => {

   const userName = page.locator('#user-name');
   const passWord = page.locator('#password');
   const clickBtn = page.locator('#login-button');

   await page.goto("https://www.saucedemo.com/");
   await userName.fill("standard_user")
   await passWord.fill('secret_sauce');
   await clickBtn.click;

   let text =await page.locator("a[id='item_4_title_link'] div[class='inventory_item_name']").textContent();

   console.log(text);


})

