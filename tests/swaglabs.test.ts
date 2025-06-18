import { test, expect, Page } from '@playwright/test';
import { POM } from '../pageobjectmodel/pomManager';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.SWLABS_BASE_URL as string;
const USERNAME = process.env.SWLABS_USERNAME as string;
const PASSWORD = process.env.SWLABS_PASSWORD as string;

test('Login-to-SwagLabs', async ({ page }: { page: Page }) => {
  const SWPOM = new POM(page);
  const SWLABS = SWPOM.getSwagLabs();

  await SWLABS.goto(BASE_URL);
  await SWLABS.validLogin(USERNAME, PASSWORD);
  await SWLABS.clickOnLogin();

  await page.waitForLoadState();

  const title = await page.locator('.app_logo').textContent();
  expect(title).toContain('Swag Labs');

  await SWLABS.clickOnLogout();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
