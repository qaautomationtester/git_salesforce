import { Page, Locator } from '@playwright/test';

export class SfLoginPage {
  private page: Page;
  private userName: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('//input[@id="username"]');
    this.password = page.locator('//input[@id="password"]');
    this.loginButton = page.locator('//input[@id="Login"]');
  }

  async goTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async validLogin(userName: string, password: string): Promise<void> {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  // If needed, you can use these as standalone steps:
  /*
  async validLogin(userName: string, password: string): Promise<void> {
    await this.userName.fill(userName);
    await this.password.fill(password);
  }

  async clickOnLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
  */
}
