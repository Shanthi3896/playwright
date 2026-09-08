import { test as setup, expect } from '@playwright/test';
import path from 'path';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Setup authentication state', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('Email').fill(process.env.APP_Username!);
  await page.getByPlaceholder('enter your passsword').fill(process.env.APP_Password!);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
  await page.context().storageState({ path: authFile });
  console.log('Authentication state saved to', authFile);
});