import  test, { expect } from "@playwright/test";

test("Verify Title is not empty", async ({ page }) => {
await page.goto("");
const title = await page.title();
expect(title).not.toBe("");
});
