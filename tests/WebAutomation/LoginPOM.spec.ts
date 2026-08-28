import{test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import * as dotenv from 'dotenv';
dotenv.config();

test('POM-Login page', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.APP_Username!,process.env.APP_Password!);
    await loginPage.verifyLoginSuccessfull();
    console.log('POM-Login successful');
});
