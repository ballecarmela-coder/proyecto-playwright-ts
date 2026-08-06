import {test} from '@playwright/test' 
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-pages/login-pages.methods'

test('Login', async ({page}) => {
    
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageElements = new LoginPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageElements.insertUsername('standard_user')
    await loginPageElements.insertPassword('secret_sauce')
    await page.waitForTimeout(4000)

})