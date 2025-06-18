import { Page, Locator } from '@playwright/test';

export class SwagLabs {
  private page: Page;
  private userName: Locator;
  private password: Locator;
  private loginButton: Locator;
  private openMenu: Locator;
  private logout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.locator('#user-name');
    this.password = this.page.locator('#password');
    this.loginButton = this.page.locator('#login-button');
    this.openMenu = this.page.locator('button#react-burger-menu-btn');
    this.logout = this.page.locator('a#logout_sidebar_link');
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async validLogin(userName: string, password: string): Promise<void> {
    await this.userName.fill(userName);
    await this.password.fill(password);
  }

  async clickOnLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async clickOnLogout(): Promise<void> {
    await this.openMenu.click();
    await this.logout.click();
  }
}
