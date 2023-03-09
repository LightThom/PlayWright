import { test, expect } from '@playwright/test';
import * as pages from '../pages/page_index';
import * as constants from '../utils/constants_index';

test.beforeEach(async ({ page }) => {
    // Load XE URL in to the new browser context
    await page.goto(constants.URL.XE.xeHomePage!, { waitUntil: 'networkidle' });
});

test('Landing Page', async ({ page }) => {
    const xeHomePage = new pages.HomePage(page);

    await xeHomePage.convertButtonIsVisible();
});

test('Click Sign In', async ({ page }) => {
    const xeHomePage = new pages.HomePage(page);

    await xeHomePage.clickSignInButton();
    await xeHomePage.clickMoneyTransfer();
    await expect(page).toHaveURL(constants.URL.XE.xeLoginPage);
});

test('Enter Amount', async ({ page }) => {
    const xeHomePage = new pages.HomePage(page);

    await xeHomePage.amountFieldInput('1000');
    await xeHomePage.verifyAmountInput;
});
