import { Page } from "@playwright/test";
import { CartPageElements } from "./cart-page.elements";
import { Logger } from "../../support/logger";

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor (page:Page){
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnRemove(nameProduct: string){
        await Logger.logStep(`Click on Remove button for ${nameProduct}`)
        await this.cartPageElements.removeProduct.remove(nameProduct).click()
    }

    async clickOnContinueShopping(){
        await Logger.logStep('Click on Continue Shopping button')
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickOnCheckout(){
        await Logger.logStep('Click on Checkout button')
        await this.cartPageElements.buttons.checkout.click()
    }
}