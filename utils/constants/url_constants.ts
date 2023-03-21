//const testEnviroment = process.env.TEST_ENV;
export const URL = {
    // Base XE UI URL's
    XE: {
        xeHomePage: `https://xe.com/`,
        xeSendMoneyPage: `https://www.xe.com/send-money/`,
        xeLoginPage: `https://accounts.xe.com/login?client_id=7v3mjop0iq74d7bdpgvn95r86d&redirect_uri=https%3A%2F%2Ftransfer.xe.com%2Faccount%2Flogin%2Fhome&response_type=code&state=`,
        xeRegistrationPage: `https://accounts.xe.com/signup?client_id=7v3mjop0iq74d7bdpgvn95r86d&response_type=code&redirect_uri=https%3A%2F%2Ftransfer.xe.com%2Fsignup%2Fpersonal%2Fstep1&state=https%3A%2F%2Ftransfer.xe.com%3A9443%2Fsignup%2Fpersonal%2Fstep1%3FctaPosition%3Dtab`,
    },
};

export const API = {
    // Mailinator API's
    MAILINATOR: {
        privateInboxURL: `https://mailinator.com/api/v2/domains/xedigital.m8r.co/inboxes/`,
        publicInboxURL: `https://mailinator.com/api/v2/domains/public/inboxes/`,
    },
    LAUNCHPAD: {
        destinationsURL: `https://launchpad-api-integration.xe.com/Destinations/countries?countryFrom=`,
        authorizationURL: `https://launchpad-api-integration.xe.com/authorization/signup`,
    },
};
