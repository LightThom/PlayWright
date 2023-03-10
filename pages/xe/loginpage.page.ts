import { expect, Locator, Page } from '@playwright/test';
import * as constants from '../../utils/constants_index';

export class LoginPage {
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

    // loginpage Url loaded
    async loginPage() {
        await this.page.waitForURL(constants.URL.XE.xeLoginPage);
    }

    async verifyEmailField() {
        // checks the email field is present
        await expect(this.emailField).toBeVisible();
    }

    async selectEmailField() {
        const emailField = this.emailField;
        // select the email field for input using force true to skip the actionability checks as this is not a button.
        await emailField.click({ force: true });
    }

    async emailInput(emailInput: string) {
        const inputEmail = this.emailField;
        this.selectEmailField;
        // inputs an email
        await inputEmail.type(emailInput);
    }

    async selectPasswordInput() {
        const inputPassword = this.passwordField;
        // select the password field for input using force true to skip the actionability checks as this is not a button.
        await inputPassword.click({ force: true });
    }

    async passwordInput(passwordInput: string) {
        const inputPassword = this.passwordField;
        this.selectPasswordInput;
        // inputs a password
        await inputPassword.type(passwordInput);
    }

    async loginButtonDisbaled() {
        // checks the login button is disabled.
        await expect(this.loginButton).toBeDisabled();
    }

    async loginButtonEnabled() {
        // checks the login button is enabled.
        await expect(this.loginButton).toBeEnabled();
    }

    async clickLoginButton() {
        // clicks the login button.
        await this.loginButton.click();
    }
}
