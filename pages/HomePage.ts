import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    async getAvailableLinks(): Promise<string[]> {
        return this.page.locator('a').allTextContents();
    }
}
