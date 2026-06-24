import { expect, test } from "fixtures";

test('Visual test', async ({ homePage, page }) => {
    await expect(page).toHaveScreenshot({fullPage: true, animations: 'disabled'});
});