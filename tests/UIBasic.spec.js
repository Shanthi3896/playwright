import { test,expect } from '@playwright/test';

test('browser.newContext() when you need a separate browser session or want to customize the context',async ({browser,page}) =>
{
     const context = await browser.newContext();   // new broser intants will open 
     const newpage = await context.newPage(); // fresh page will open
    
    await newpage.goto("https://devon.greythr.com/v3/portal/ess/home");
});


test.only('Playwright automatically creates a context and page',async ({page}) =>
{
    await page.goto("https://devon.greythr.com/v3/portal/ess/home");
    const text = await page.locator('//header/div').innerText();
    await console.log('title =', text);
    
});