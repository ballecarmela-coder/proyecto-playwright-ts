import {test} from '@playwright/test'
import { Logger } from '../support/logger'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-pages/login-pages.methods'
import { ProductPageMethods } from '../pages/product-pages/product-page.methods'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'
import { standarUser } from '../pages/login-pages/login-page.interfaces'
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods'
import { OverviewPageMethods } from '../pages/overview-page/overview-page.methods'

test.describe('Checkout', () => {    

    test('Checkout process', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const checkoutPageMethods = new CheckoutPageMethods(page)
        const overviewPageMethods = new OverviewPageMethods(page)
        const productName = 'Sauce Labs Onesie'

        await Logger.logPreCondition('User has items in cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standarUser)
        await productsPageMethods.clickOnAddToCart(productName)
        
        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.clickOnCheckout()
        await checkoutPageMethods.insertFirstName('First name')
        await checkoutPageMethods.insertLastName('Last name')
        await checkoutPageMethods.insertPostalCode(144521)
        await checkoutPageMethods.clickOnContinue()
        await overviewPageMethods.verifyCheckoutOverviewPageIsDisplayed()
    })
}) 