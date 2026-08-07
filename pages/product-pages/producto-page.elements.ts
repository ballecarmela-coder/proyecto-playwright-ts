import { Page } from "@playwright/test";

export class ProductPageElements {

    private page:Page

    constructor(page:Page){
        this.page = page
    }

    get icons(){
        return{
            cart: this.page.locator('#shopping_cart_container')
        }
    }

    get buttons (){
        return{
            addCart: (nameProduct: string) =>
                this.page.locator(`//div[.="${nameProduct}"]//ancestor::div[@class="inventory_item_description"]//button`)
        }
    }

    get others(){
        return {
            titleProducts: this.page.locator('[data-test="title"]')
        }
    }
}