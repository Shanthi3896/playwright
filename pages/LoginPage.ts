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
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async verifyLoginSuccessfull(){
        await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    } 
}

