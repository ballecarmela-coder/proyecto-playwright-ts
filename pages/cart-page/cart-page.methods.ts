import { Page } from "@playwright/test";
import { CartPageElements } from "./cart-page.elements";

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor (page:Page){
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnRemove(nameProduct: string){
        await this.cartPageElements.removeProduct.remove(nameProduct).click()
    }

    async clickOnContinueShopping(){
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickOnCheckout(){
        await this.cartPageElements.buttons.checkout.click()
    }
}