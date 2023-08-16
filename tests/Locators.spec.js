import { test,expect } from "@playwright/test";

test('Locators in Playwright',async({page})=>{

   await page.goto("https://www.saucedemo.com/");
   console.log(await page.title());
   await page.locator('#user-name').type('Naresh Chauhan');
   await page.locator('#password').type('12345');
   await page.locator('#login-button').click;

})

