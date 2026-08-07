import { Page } from "@playwright/test";

export class CartPageElements {
    
    private page:Page

    constructor (page:Page){
        this.page = page
    }

    get buttons(){
        return{
            continueShopping: this.page.locator('#continue-shopping'),
            checkout: this.page.locator('#checkout')
        }
    }
    get removeProduct(){
        return{
            remove: (nameProduct: string) =>
                this.page.locator(`//div[.="${nameProduct}"]//ancestor::div[@class="cart_item_label"]//button`)
        }
    }
}