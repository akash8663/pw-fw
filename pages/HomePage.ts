import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    async getAvailableLinks(): Promise<string[]> {
        return await this.page.locator('a').allTextContents();
    }
}