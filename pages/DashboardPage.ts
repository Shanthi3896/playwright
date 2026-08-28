import{Page,Locator,expect } from "@playwright/test";
export class DashboardPage{
    constructor(private page: Page) {}

    get SearchProduct(){
        return this.page.locator('//input[@placeholder="search"]').last();
    }
    get AddToCartButton(){
        return this.page.locator('//div/button[text()=" Add To Cart"]');
    }
    ProductName(ProductName:string){
        return this.page.locator(`//div/h5/b[text()="${ProductName}"]`);
    }

    async AddProductToCart(productName: string){
        await this.SearchProduct.fill(productName);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');    
        const count = await this.AddToCartButton.count();
        for(let i=0;i<count;i++){
         expect(await this.ProductName(productName).isVisible())
         await this.page.waitForTimeout(2000);
        await this.AddToCartButton.click();
}
    }
}