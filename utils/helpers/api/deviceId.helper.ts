import { BrowserContext, expect, Page } from '@playwright/test';
import * as constants from '../../constants_index';
import jsonata from 'jsonata';

export class DeviceId {
    constructor(public page: Page, public context: BrowserContext) {}

    async registerDeviceId() {
        // Register DeviceId
        const getDeviceId = await this.context.request.get(constants.API.LAUNCHPAD.destinationsURL + 'GB', {
            headers: {
                deviceId: 'integration_device_id',
            },
        });

        // assert correct HTTP Status Codes returned (200 - OK)
        expect(getDeviceId.status()).toBe(200);

        // assert response url is correct
        expect(getDeviceId.url()).toContain(constants.API.MAILINATOR.inboxURL);

        const registerDeviceId = await this.context.request.post(constants.API.LAUNCHPAD.authorizationURL, {
            headers: {
                deviceId: 'integration_device_id',
            },
            data: {
                password: 'Password123',
                username: 'accept.uk30@mailinator.com',
                country: 'GB',
                tcVersion: 'XEMT_UK_PERSONAL',
            },
        });

        // assert correct HTTP Status Codes returned (200 - OK)
        expect(registerDeviceId.status()).toBe(200);

        const respBodyData = JSON.parse(await registerDeviceId.text());

        const body = respBodyData.body;
        console.log(body);
        let email = body['destination'];

        // assert response url is correct
        expect(registerDeviceId.url()).toContain(constants.API.MAILINATOR.inboxURL);
    }
}
