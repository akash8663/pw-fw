import { expect, test } from 'fixtures';

test.describe('Login', () => {
    test('Valid login succeeds', async ({ authedLoginPage }) => {
        const isLoggedIn = await authedLoginPage.isLoggedIn();
        expect(isLoggedIn).toBe(true);
    });

    test('valid login shows success flash message', async ({ authedLoginPage }) => {
        const flashMessage = await authedLoginPage.getFlashMessage();
        expect(flashMessage).toContain('You logged into a secure area!');
    });

    test('invalid login shows error flash message', async ({ loginPage }) => {
        await loginPage.login('invalidUser', 'invalidPassword');
        const flashMessage = await loginPage.getFlashMessage();
        expect(flashMessage).toContain('Your username is invalid!');
    });
});
