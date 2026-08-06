import { Page } from "@playwright/test";
import { ProductPageElements } from "./producto-page.elements";

export class ProductPageMethods {
    private page: Page
    private productPageElements: ProductPageElements

    constructor (page: Page){
            this.page = page
            this.productPageElements = new ProductPageElements(page)
    }

    async clickOnCartIcon(){
        await this.productPageElements.icons.cart.click()
    }

    async clickOnAddToCart(nameProduct: string){
        await this.productPageElements.buttons.addCart(nameProduct).click()
    }

}