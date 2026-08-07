import { Page } from "@playwright/test";
import { OverviewPageElements } from "./overview-page.elements";
import { Logger } from "../../support/logger";

export class OverviewPageMethods{

    private page: Page
    private overviewPageElements: OverviewPageElements

    constructor(page:Page){
        this.page = page
        this.overviewPageElements = new OverviewPageElements(page)
    }

    async clickOnFinish(){
        await Logger.logStep('Click on Finish button')
        await this.overviewPageElements.buttons.finish.click()
    }

    async clickOnCancel(){
        await Logger.logStep('Click on Cancel button')
        await this.overviewPageElements.buttons.cancel.click()
    }
}