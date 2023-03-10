import { test, expect } from '@playwright/test';
import * as pages from '../pages/page_index';
import * as constants from '../utils/constants_index';

const USER_EMAIL = constants.USER.XE.xeIdUserName;
const USER_PASSWORD = constants.USER.XE.xeIdPassword;

test.beforeEach(async ({ page }) => {
    // Load XE URL in to the new browser context
    await page.goto(constants.URL.XE.xeLoginPage!, { waitUntil: 'networkidle' });
});

test('Login Page', async ({ page }) => {
    const LoginPage = new pages.LoginPage(page);

    await LoginPage.verifyEmailField();
});

test('Registered User login', async ({ page }) => {
    const LoginPage = new pages.LoginPage(page);

    await LoginPage.loginButtonDisbaled();
    await LoginPage.emailInput(USER_EMAIL);
    await LoginPage.passwordInput(USER_PASSWORD);
    await LoginPage.clickLoginButton();
});
