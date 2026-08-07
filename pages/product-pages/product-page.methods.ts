import { Page } from "@playwright/test";
import { ProductPageElements } from "./producto-page.elements";
import { Logger } from "../../support/logger";
import { expect } from "@playwright/test";

export class ProductPageMethods {
    private page: Page
    private productPageElements: ProductPageElements

    constructor (page: Page){
            this.page = page
            this.productPageElements = new ProductPageElements(page)
    }

    async clickOnCartIcon(){
        await Logger.logStep('Click on Cart button')
        await this.productPageElements.icons.cart.click()
    }

    async clickOnAddToCart(nameProduct: string){
        await Logger.logStep('Click on Add to Cart button')
        await this.productPageElements.buttons.addCart(nameProduct).click()
    }

    async verifyProductPageIsDisplayed(){
        await Logger.logVerification('Verificar si el titulo de producto se muestra')
        const elementCount = await this.productPageElements.others.titleProducts.count()
        expect(elementCount).toEqual(1)
    }

}