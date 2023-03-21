import { test, expect } from '@playwright/test';
import * as pages from '../pages/page_index';
import * as constants from '../utils/constants_index';
import * as helpers from '../utils/helper_index';

test('Get verification code', async ({ page, context }) => {
    const getVerifyCode = new helpers.FetchVerificationCode(page, context);

    await getVerifyCode.fetchVerificationCode();
});
