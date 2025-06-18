import { Page } from '@playwright/test';
import { SfLoginPage } from '../pageobjectmodel/sfloginpage';

export class POM {
  private page: Page;
  private sfLoginPage: SfLoginPage;

  constructor(page: Page) {
    this.page = page;
    this.sfLoginPage = new SfLoginPage(this.page);
  }

  getSfLoginPage(): SfLoginPage {
    return this.sfLoginPage;
  }
}
