


/**
 * This utility function will log your local aws-sdk library into AWS using the @profile you provide.
 * 
 * This is to be used when running your local lambda code against our real AWS Environment only.
 * 
 * @param profile The profile to log your local node_modules/aws-sdk in as.
 */
export function authWithAwsLocally(profile: string) {
    const credentials = new AWS.SharedIniFileCredentials({ profile });
    AWS.config.credentials = credentials;
    AWS.config.region = "eu-west-2"
}




describe("provising a product lambda tests", () => {

    test("Invoking real aws", async () => {

        authWithAwsLocally('dataretain-qa')

        const context = LambdaTestUtils.stubContext();

        const result = await handler({ provisionedProductId: 'pp-kqff4vpn5lfui' }, context);

        console.log("Lambda successfully executed and returned", result)

    })


});
