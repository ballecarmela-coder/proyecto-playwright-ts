import { Page } from "@playwright/test";

export class OverviewPageElements{

    private page: Page

    constructor(page:Page){
        this.page = page
    }

    get buttons(){
        return{
            finish: this.page.locator('#finish'),
            cancel: this.page.locator('#cancel')
        }
    }

    get otherElements(){
        return{
            pageTitle: this.page.locator('[data-test="title"]')
        }
    }
}