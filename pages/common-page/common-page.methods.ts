import {Page} from '@playwright/test'
import { CommonPageElements } from './common-page.elements'
import { Logger } from '../../support/logger'

export class CommonPageMethods {

    private page: Page
    private commonPageElements: CommonPageElements

    constructor(page: Page){
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async clickOnAllItems(){
        await Logger.logStep('Click on All Items button the menu')
        await this.commonPageElements.leftMenu.allItems.click()
    }
    async clickOnAbout(){
        await Logger.logStep('Click on About button the menu')
        await this.commonPageElements.leftMenu.about.click()
    }
    async clickOnLogOut(){
        await Logger.logStep('Click on Log Out button the menu')
        await this.commonPageElements.leftMenu.logout.click()
    }
    async clickOnResetAppStore(){
        await Logger.logStep('Click on Reset App Store button the menu')
        await this.commonPageElements.leftMenu.resetAppState.click()
    }
    async clickOnOpenMenu(){
        await Logger.logStep('Click on Open Menu')
        await this.commonPageElements.buttons.openMenu.click()
    }
}