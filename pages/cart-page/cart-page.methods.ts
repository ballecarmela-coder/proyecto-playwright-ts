import { expect, Page } from "@playwright/test";
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

    async verifyProductIsDisplades(productName: string){
        await Logger.logVerification(`The product  "${productName}" should be shown`)
        const productsCount = await this.cartPageElements.removeProduct.remove(productName).count()
        expect(productsCount).toEqual(1)
    }

    async verifyProductIsNotDisplades(productName: string){
        await Logger.logVerification(`The product  "${productName}" should not be shown`)
        const productsCount = await this.cartPageElements.removeProduct.remove(productName).count()
        expect(productsCount).toEqual(0)
    }
}