import { BrowserContext, expect, Page } from '@playwright/test';
import * as constants from '../../constants_index';

export class FetchVerificationCode {
    constructor(public page: Page, public context: BrowserContext) {}

    async fetchVerificationCode() {
        // Get Inbox messages from mailinator
        const msgId = await this.context.request.get(
            constants.API.MAILINATOR.publicInboxURL + 'accept.uk30',
            {
                headers: {
                    Authorization: '138409cbcfdc4a84b4046f026df37fdf',
                },
            },
        );

        // assert correct HTTP Status Codes returned (200 - OK)
        expect(msgId.status()).toBe(200);

        // assert response url is correct
        expect(msgId.url()).toContain(constants.API.MAILINATOR.publicInboxURL);

        // get the response body
        const respBodyData = JSON.parse(await msgId.text());

        console.log(respBodyData);

        console.log(respBodyData.msgs[0]);

        console.log(respBodyData.msgs[0].id);

        // Fetch the email verification code from the most recent email in mailinator
        const getVerifyCode = await this.context.request.get(
            constants.API.MAILINATOR.publicInboxURL + 'accept.uk30' + '/messages/' + respBodyData.msgs[0].id,
        );

        // assert correct HTTP Status Codes returned (200 - OK)
        expect(getVerifyCode.status()).toBe(200);

        // assert response url is correct
        expect(getVerifyCode.url()).toContain(constants.API.MAILINATOR.publicInboxURL);

        // get full response body to query
        const verifyMsgIdData = JSON.parse(await getVerifyCode.text());

        console.log(verifyMsgIdData);

        // get the verifcation code from the response body
        const verifyCode = verifyMsgIdData.parts[0].body.match(/>(\d\d\d\d\d\d)</)[1];

        console.log(verifyMsgIdData.parts[0].body.match(/>(\d\d\d\d\d\d)</)[1]);

        console.log(`'Verification Code is: ${verifyCode}'`);
    }
}
