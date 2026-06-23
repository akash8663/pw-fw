import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    async login(username: string, password: string): Promise<void> {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async getFlashMessage(): Promise<string> {
        const flashMessage = await this.page.innerText('#flash');
        return flashMessage.trim();
    }

    async isLoggedIn(): Promise<boolean> {
        return this.page.getByRole('link', { name: 'Logout' }).isVisible();
    }
}