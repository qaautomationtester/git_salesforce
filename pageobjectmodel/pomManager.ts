import { Page } from '@playwright/test';
import { SwagLabs } from '../pageobjectmodel/swaglabs';

export class POM {
  private page: Page;
  private swaglabs: SwagLabs;

  constructor(page: Page) {
    this.page = page;
    this.swaglabs = new SwagLabs(this.page);
  }

  getSwagLabs(): SwagLabs {
    return this.swaglabs;
  }
}
