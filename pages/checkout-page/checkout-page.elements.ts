import { Page } from '@playwright/test';

export class CheckoutPageElements {

    private page: Page

    constructor(page:Page) {
        this.page = page
    }

    get buttons(){
        return{
            continue: this.page.locator('#continue'),
            cancel: this.page.locator('#cancel')
        }
    }

    get dataLabels(){
        return {
            firstName: this.page.locator('#first-name'),
            lastName: this.page.locator('#last-name'),
            postalCode: this.page.locator('#postal-code')
        }
    }
}