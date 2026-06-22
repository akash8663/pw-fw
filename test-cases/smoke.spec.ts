import  { test, expect } from "@playwright/test";
import { HomePage } from "pages/HomePage";

test("Verify Title is not empty", async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigateTo("");
    
    const title = await homePage.getTitle();
    expect(title).not.toBe("");

    const links = await homePage.getAvailableLinks();
    expect(links.length).toBeGreaterThan(0);
});
