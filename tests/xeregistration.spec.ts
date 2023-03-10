import { test, expect } from '@playwright/test';
import * as pages from '../pages/page_index';
import * as constants from '../utils/constants_index';

const USER_EMAIL = constants.USER.XE.xeIdUserName;
const USER_PASSWORD = constants.USER.XE.xeIdPassword;

test.beforeEach(async ({ page }) => {
    // Load XE URL in to the new browser context
    await page.goto(constants.URL.XE.xeRegistrationPage!, { waitUntil: 'networkidle' });
});

test('Send Money Page', async ({ page }) => {
    const RegistrationPage = new pages.RegistrationPage(page);

    await RegistrationPage.registerNowButtonDisabled();
    await RegistrationPage.emailInput(USER_EMAIL);
    await RegistrationPage.passwordInput(USER_PASSWORD);
    await RegistrationPage.registerNowButtonEnabled();
});
