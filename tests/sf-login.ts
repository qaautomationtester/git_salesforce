import { Page } from '@playwright/test';
import { POM } from '../pageobjectmodel/pomManager';
import { SfLoginPage } from '../pageobjectmodel/sfloginpage';

export class SfLogin {
  private page: Page;
  private sfLoginPage: SfLoginPage;

  constructor(page: Page) {
    this.page = page;
    const pom = new POM(this.page);
    this.sfLoginPage = pom.getSfLoginPage();
  }

  async getSfLoginPage(url: string, userName: string, password: string): Promise<void> {
    await this.sfLoginPage.goTo(url);
    await this.sfLoginPage.validLogin(userName, password);
  }
}
