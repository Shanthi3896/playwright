import { test , expect } from '../../fixtures/apiFixture';
import { DashboardPage } from '../../pages/DashboardPage';
test ('API-Login and Add product to cart', async ({ apiToken, page }) => {
    expect(apiToken).toBeTruthy();
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.AddProductToCart('ADIDAS ORIGINAL');
    console.log('API-Product added to cart successfully');
});