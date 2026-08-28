import{test } from '../../fixtures/baseFixture';
import { DashboardPage } from '../../pages/DashboardPage';

test('E2E-Add product to cart with fixture', async({loggedInPage})=>{
    const dashboardPage = new DashboardPage(loggedInPage);
    await dashboardPage.AddProductToCart('ADIDAS ORIGINAL');
    console.log('E2E-Product added to cart successfully');
});