import { test, expect } from '@playwright/test';
import * as pages from '../pages/page_index';
import * as constants from '../utils/constants_index';

test.beforeEach(async ({ page }) => {
    // Load XE URL in to the new browser context
    await page.goto(constants.URL.XE.xeSendMoneyPage!, { waitUntil: 'networkidle' });
});

test('Send Money Page', async ({ page }) => {
    const SendMoneyPage = new pages.SendMoneyPage(page);

    await SendMoneyPage.verifySignInAndSendButton();
});

test('navigate to the registration page', async ({ page }) => {
    const SendMoneyPage = new pages.SendMoneyPage(page);
    const RegistrationPage = new pages.RegistrationPage(page);

    await SendMoneyPage.clickSignInAndSendButton();
    await RegistrationPage.verifyEmailField();
});
