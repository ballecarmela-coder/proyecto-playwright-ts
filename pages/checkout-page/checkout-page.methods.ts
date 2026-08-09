import { expect, Page } from "@playwright/test"
import { CheckoutPageElements } from "./checkout-page.elements"
import { Logger } from "../../support/logger"

export class CheckoutPageMethods{

    private page: Page
    private checkoutPageElements: CheckoutPageElements

    constructor(page:Page){
        this.page = page
        this.checkoutPageElements = new CheckoutPageElements(page)
    }

    async insertFirstName(firstName: string){
        await Logger.logStep(`Insert ${firstName} as First Name`)
        await this.checkoutPageElements.dataLabels.firstName.fill(firstName)
    }

    async insertLastName(lastName: string){
        await Logger.logStep(`Insert ${lastName} as Last Name`)
        await this.checkoutPageElements.dataLabels.lastName.fill(lastName)
    }

    async insertPostalCode(postalCode: number){
        await Logger.logStep(`Insert ${postalCode} as Postal Code`)
        await this.checkoutPageElements.dataLabels.postalCode.fill(postalCode.toString())
    }

    async clickOnContinue(){
        await Logger.logStep('Click on Continue button')
        await this.checkoutPageElements.buttons.continue.click()
    }

    async clickOnCancel(){
        await Logger.logStep('Click on Cancel button')
        await this.checkoutPageElements.buttons.cancel.click()
    }
}