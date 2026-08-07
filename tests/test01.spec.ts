import {test} from '@playwright/test' 
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-pages/login-pages.methods'
import { LoginPageData } from '../pages/login-pages/login-page.data'
import { ProductPageMethods } from '../pages/product-pages/product-page.methods';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'

const userCredentials = LoginPageData.credentials;

test('Login', async ({page}) => {
    
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productPageMethods = new ProductPageMethods(page)
    const cartPageMethods = new CartPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickOnLoginButton()
    await productPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await productPageMethods.clickOnCartIcon()
    await cartPageMethods.clickOnRemove('Sauce Labs Backpack')
    await commonPageMethods.clickOnOpenMenu()
    await commonPageMethods.clickOnAllItems()
    await productPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await productPageMethods.clickOnCartIcon()
    await cartPageMethods.clickOnContinueShopping()
    await productPageMethods.clickOnCartIcon()
    await cartPageMethods.clickOnCheckout()
    await page.waitForTimeout(4000)

})