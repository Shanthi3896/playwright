import {test,expect} from '@playwright/test';
test.describe('Rahul Page',()=>{
    test('valid login-rahulshettyacademy',async({page})=>{
        // goto app
        await page.goto('https://rahulshettyacademy.com/client');
        await page.getByPlaceholder('Email').fill('shanthipalanisamy38@gmail.com');
        await page.getByPlaceholder('enter your passsword').fill('Shanthi@3896');
        await page.getByRole('button', { name: 'Login' }).click();
        //assertion
        await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
    });

    test('invali login',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/client');
        await page.getByPlaceholder('Email').fill('shanthipalanisamy38@gmail.com');
        await page.getByPlaceholder('enter your passsword').fill('Shanthi');
        await page.getByRole('button', { name: 'Login' }).click(); 
        //assertion
        await expect(page.getByText(' Incorrect email or password. ')).toBeVisible();
        const errorMessage = await page.getByText(' Incorrect email or password. ').textContent();
        expect(errorMessage).toBe(' Incorrect email or password. ');
        console.log('Error message:', errorMessage);
     });     
    });