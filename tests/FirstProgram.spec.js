const{test} = require('@playwright/test');

test('First Playwright Test', async ({page}) =>{

    await page.goto('https://mail.google.com/');
    var title =page.title;
    console.log(title)

})