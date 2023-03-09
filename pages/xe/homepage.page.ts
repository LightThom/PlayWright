import { expect, Locator, Page } from '@playwright/test';
import * as constants from '../../utils/constants_index';

export class HomePage {
    readonly page: Page;
    readonly convertButton: Locator;
    readonly signInButton: Locator;
    readonly moneyTransfer: Locator;
    readonly amountField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.convertButton = this.page.locator("//button[text()='Convert']");
        this.signInButton = this.page.locator("(//button[text()='Sign In'])[1]");
        this.moneyTransfer = this.page.locator(
            "(//div[@class='Submenus___StyledDiv4-sc-2ubi8a-12 fIGZfR']//a)[1]",
        );
        this.amountField = this.page.locator('#amount');
    }

    // homepage Url loaded
    async homePage() {
        await this.page.waitForURL(constants.URL.XE.xeHomePage);
    }

    async convertButtonIsVisible() {
        // checks ConvertButton is visible
        await expect(this.convertButton).toBeVisible();
    }

    async clickSignInButton() {
        // clicks the sign in button
        await this.signInButton.click();
    }

    async clickMoneyTransfer() {
        await this.moneyTransfer.click();
    }

    async selectAmountField() {
        const amountField = this.amountField;
        await amountField.click();
    }

    async amountFieldInput(amountInput: string) {
        const amountField = this.amountField;
        this.selectAmountField;
        await amountField.fill(amountInput);
    }

    async verifyAmountInput() {
        await expect(this.amountField).toContainText('1000');
    }
}
