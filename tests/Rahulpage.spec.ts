import {test,expect} from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

test.describe('Rahul Page',()=>{
    test('valid login-rahulshettyacademy',async({page})=>{
        // goto app
        await page.goto('https://rahulshettyacademy.com/client');
        await page.getByPlaceholder('Email').fill(process.env.APP_Username!);
        await page.getByPlaceholder('enter your passsword').fill(process.env.APP_Password!);
        await page.getByRole('button', { name: 'Login' }).click();
        //assertion
        await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
    });

    test('invali login',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/client');
        await page.getByPlaceholder('Email').fill(process.env.APP_Username!);
        await page.getByPlaceholder('enter your passsword').fill(process.env.APP_InvalidPassword!);
        await page.getByRole('button', { name: 'Login' }).click(); 
        //assertion
        await expect(page.getByText(' Incorrect email or password. ')).toBeVisible();
        const errorMessage = await page.getByText(' Incorrect email or password. ').textContent();
        expect(errorMessage).toBe(' Incorrect email or password. ');
        console.log('Error message:', errorMessage);
     });     
    });