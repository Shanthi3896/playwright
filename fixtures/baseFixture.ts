import {test as base,Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixture= {
    loggedInPage: Page;
}
export const test=base.extend<MyFixture>({
    loggedInPage:async ({page,},use)=>{
    const loginPage=new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.app_username!,process.env.app_password!);
    await page.waitForURL(/.*dashboard/);
   await use(page);
    }
    })
    export {expect}from '@playwright/test';
    
