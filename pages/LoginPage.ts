import{Page,Locator,expect } from "@playwright/test";
export class LoginPage{
     readonly page: Page;
     readonly usernameInput: Locator;
     readonly passwordInput: Locator;
     readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
    }
    async goto(){
        await this.page.goto('https://rahulshettyacademy.com/client');
    }
    
    async login(username: string,password: string){
        try {
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
            console.log('Login successful');
        } catch (error) {
            console.error('Error occurred while logging in:', error);
            await this.page.screenshot({ path: 'login_error.png' });
            throw error;
        }
    }
    async verifyLoginSuccessfull(){
        await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    } 
}

