import { test, expect } from '@playwright/test';
import { SfLogin } from './sf-login'; // Ensure the class is exported as `SfLogin` in sf-login.ts
import * as dotenv from 'dotenv';

dotenv.config();

const BASE_URL: string = process.env.SF_BASE_URL!;
const USERNAME: string = process.env.SF_USERNAME!;
const PASSWORD: string = process.env.SF_PASSWORD!;

test('SF Login', async ({ page }) => {
  const statusText = 'New';
  const priorityText = 'High';
  const caseOriginText = 'Web';

  const sfLogin = new SfLogin(page);
  await sfLogin.getSfLoginPage(BASE_URL, USERNAME, PASSWORD);

  await page.waitForLoadState();

  await expect(page.locator("//span[.='Quarterly Performance']")).toHaveText('Quarterly Performance');
  await page.getByRole('button', { name: 'View profile' }).click();
  await page.locator('//a[.="Log Out"]').click();
});
