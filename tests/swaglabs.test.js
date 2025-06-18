const {test, expect} = require('@playwright/test')
const {POM} = require('../pageobjectmodel/pomManager')
require('dotenv').config();
const BASE_URL = process.env.SWLABS_BASE_URL;
const USERNAME = process.env.SWLABS_USERNAME;
const PASSWORD = process.env.SWLABS_PASSWORD;

test('Login-to-SwagLabs', async ({page}) => {

    const SWPOM = new POM(page)
    const SWLABS = SWPOM.getSwagLabs()
    await SWLABS.goto(BASE_URL)
    await SWLABS.validLogin(USERNAME, PASSWORD)
    await SWLABS.clickOnLogin()
    await page.waitForLoadState()
    const title = await page.locator('.app_logo').textContent()
    expect(title).toContain('Swag Labs')
    await SWLABS.clickOnLogout()
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})