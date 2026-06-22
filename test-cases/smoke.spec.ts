import test from "@playwright/test";

test.describe("Smoke Test", () => {
  test("Verify Title is not empty", async ({ page }) => {
    await page.goto("");
    const title = await page.title();
    test.expect(title).not.toBe("");
    });
});