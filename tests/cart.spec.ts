import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-pages/login-pages.methods'
import { ProductPageMethods } from '../pages/product-pages/product-page.methods'
import { Logger } from '../support/logger'
import { standarUser } from '../pages/login-pages/login-page.interfaces'
import { afterEach } from 'node:test'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'

test.describe('Cart test case', async () => {
    test('Add item to cart', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productPageMethods = new ProductPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        Logger.logPreCondition('User is logged in')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standarUser)
        await productPageMethods.verifyProductPageIsDisplayed()

        await productPageMethods.clickOnAddToCart(productName)
        await productPageMethods.clickOnCartIcon()
        await cartPageMethods.verifyProductIsDisplades(productName)

    })

     test('Remove item from cart', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productPageMethods = new ProductPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        Logger.logPreCondition('Item is in the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standarUser)
        await productPageMethods.verifyProductPageIsDisplayed()

        await productPageMethods.clickOnAddToCart(productName)
        await productPageMethods.clickOnCartIcon()
        await cartPageMethods.verifyProductIsDisplades(productName)

        await productPageMethods.clickOnCartIcon()
        await cartPageMethods.clickOnRemove(productName)
        await cartPageMethods.verifyProductIsNotDisplades(productName)

    })
})