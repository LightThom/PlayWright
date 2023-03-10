import { expect, Locator, Page } from '@playwright/test';
import * as constants from '../../utils/constants_index';

export class SendMoneyPage {
    readonly page: Page;
    readonly signInAndSendButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInAndSendButton = this.page.locator("//a[contains(text(),'Sign in and send')]");
    }

    // homepage Url loaded
    async sendMoneyPage() {
        await this.page.waitForURL(constants.URL.XE.xeSendMoneyPage);
    }

    async verifySignInAndSendButton() {
        // checks the sign In and Send button is present
        await expect(this.signInAndSendButton).toBeVisible();
    }

    async clickSignInAndSendButton() {
        // clicks the sign and send button
        await this.signInAndSendButton.click();
    }
}
