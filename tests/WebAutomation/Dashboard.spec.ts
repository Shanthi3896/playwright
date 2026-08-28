import{test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import {DashboardPage} from "../../pages/DashboardPage";
import * as dotenv from 'dotenv';
dotenv.config();

test('POM-Dashboard page', async({page})=>{
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.APP_Username!,process.env.APP_Password!);
    await loginPage.verifyLoginSuccessfull();
    await dashboardPage.AddProductToCart('ADIDAS ORIGINAL');
    console.log('POM-Product added to cart successfully');
})