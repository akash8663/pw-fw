import { expect, test } from "fixtures";


const testData = {
    validUser: "tomsmith",
    validPassword: "SuperSecretPassword!",
    invalidUser: "invalidUser",
    invalidPassword: "invalidPassword"
};

test.describe('Login', () => {

    test('Valid login succeeds', async ({ loginPage }) => {
        await loginPage.login(testData.validUser, testData.validPassword);
        const isLoggedIn = await loginPage.isLoggedIn();
        expect(isLoggedIn).toBe(true);
    });

    test("valid login shows success flash message", async ({ loginPage }) => {
        await loginPage.login(testData.validUser, testData.validPassword);
        const flashMessage = await loginPage.getFlashMessage();
        expect(flashMessage).toContain("You logged into a secure area!");
    });

    test("invalid login shows error flash message", async ({ loginPage }) => {
        await loginPage.login(testData.invalidUser, testData.invalidPassword);
        const flashMessage = await loginPage.getFlashMessage();
        expect(flashMessage).toContain("Your username is invalid!");
    });

});