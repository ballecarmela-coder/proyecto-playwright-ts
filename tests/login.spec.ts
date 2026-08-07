import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageData } from '../pages/login-pages/login-page.data'
import { LoginPageMethods } from '../pages/login-pages/login-pages.methods'
import { ProductPageMethods } from '../pages/product-pages/product-page.methods'

const credentials = LoginPageData.credentials

test.describe('Login', () => {

    test('Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productPageMethods = new ProductPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.insertUsername(credentials.usernames.standardUser)
        await loginPageMethods.insertPassword(credentials.password)
        await loginPageMethods.clickOnLoginButton()
        await productPageMethods.verifyProductPageIsDisplayed()
    })
})