import { Page } from "@playwright/test"
import { CheckoutPageElements } from "./checkout-page.elements"

export class CheckoutPageMethods{

    private page: Page
    private checkoutPageElements: CheckoutPageElements

    constructor(page:Page){
        this.page = page
        this.checkoutPageElements = new CheckoutPageElements(page)
    }

    async insertFirstName(firstName: string){
        await this.checkoutPageElements.dataLabels.firstName.fill(firstName)
    }

    async insertLastName(lastName: string){
        await this.checkoutPageElements.dataLabels.lastName.fill(lastName)
    }

    async insertPostalCode(postalCode: number){
        await this.checkoutPageElements.dataLabels.postalCode.fill(postalCode.toString())
    }

    async clickOnContinue(){
        await this.checkoutPageElements.buttons.continue.click()
    }

    async clickOnCancel(){
        await this.checkoutPageElements.buttons.cancel.click()
    }
}