import  { test, expect } from "@playwright/test";
import { HomePage } from "pages/HomePage";

test("Home page loads with title and navigation links", async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigate("");
    
    const title = await homePage.getTitle();
    expect(title).not.toBe("");

    const links = await homePage.getAvailableLinks();
    expect(links.length).toBeGreaterThan(0);
});
