 
 
import { test as base } from '@playwright/test';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = base.extend<MyFixtures> ({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate("");
        await use(homePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate("/login");
        await use(loginPage);
    }
});
 
export { expect } from '@playwright/test';