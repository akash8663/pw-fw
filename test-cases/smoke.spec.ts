import { expect, test } from "fixtures";


test('Home page loads with title and navigation links', async ({ homePage }) => {

    const title = await homePage.getTitle();
    expect(title).not.toBe('');

    const links = await homePage.getAvailableLinks();
    expect(links.length).toBeGreaterThan(0);
});
