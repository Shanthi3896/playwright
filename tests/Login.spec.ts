import { test, expect } from '@playwright/test';
test.describe('Login Page', () => {
    test('valid login-saucedemo',async({page})=>{
        // goto app
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        //assertion
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        //add product to cart 
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('.shopping_cart_link').click();
        //assertion
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    });
});
     