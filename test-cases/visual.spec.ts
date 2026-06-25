import { expect, test } from "fixtures";

test('Visual test', async ({ homePage, page }) => {
    await expect(page).toHaveScreenshot('homepage.png', {fullPage: true, animations: 'disabled'});
});