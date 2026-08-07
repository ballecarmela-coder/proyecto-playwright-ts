import { Page } from "@playwright/test";
import { OverviewPageElements } from "./overview-page.elements";

export class OverviewPageMethods{

    private page: Page
    private overviewPageElements: OverviewPageElements

    constructor(page:Page){
        this.page = page
        this.overviewPageElements = new OverviewPageElements(page)
    }

    async clickOnFinish(){
        await this.overviewPageElements.buttons.finish.click()
    }

    async clickOnCancel(){
        await this.overviewPageElements.buttons.cancel.click()
    }
}