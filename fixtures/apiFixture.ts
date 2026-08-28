import {test as base, APIRequestContext} from '@playwright/test';

type ApiFixtures = {
    apiContext: APIRequestContext;
    apiToken: string;
};

export const test = base.extend<ApiFixtures>({
    apiToken: async ({ request }, use) => {
       const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
            data: {
                userEmail: process.env.APP_Username!,
                userPassword: process.env.APP_Password!
            }
        });
        const body = await response.json();
        console.log('API-Login successful');
        await use(body.token);
    }
});
export { expect } from '@playwright/test';