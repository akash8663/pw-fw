import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    async login(username: string, password: string): Promise<void> {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async getFlashMessage(): Promise<string> {
        let flashMessage = await this.page.innerText('#flash');
        return flashMessage ? flashMessage.trim() : '';
    }

    async isLoggedIn(): Promise<boolean> {
        return await this.page.getByRole('link', { name: 'Logout' }).isVisible();
    }
}