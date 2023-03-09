import { expect, Locator, Page } from '@playwright/test';
import * as constants from '../../utils/constants_index';

export class RegistrationPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator(`//button[@type='submit']`);
    }

    // homepage Url loaded
    async registrationPage() {
        await this.page.waitForURL(constants.URL.XE.xeRegistrationPage);
    }

    async verifyEmailField() {
        await expect(this.emailField).toBeVisible();
    }

    async selectEmailField() {
        const emailField = this.emailField;
        await emailField.click();
    }

    async emailInput(emailInput: string) {
        const inputEmail = this.emailField;
        this.selectEmailField;
        await inputEmail.type(emailInput);
    }

    async selectPasswordInput() {
        const inputPassword = this.passwordField;
        await inputPassword.click();
    }

    async passwordInput(passwordInput: string) {
        const inputPassword = this.passwordField;
        this.selectPasswordInput;
        await inputPassword.type(passwordInput);
    }

    async clickRegisterButton() {
        await this.loginButton.click();
    }
}
