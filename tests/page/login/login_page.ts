import {BasePage} from '../base_page';
import {$, $$, promise} from 'protractor';

export class LoginPage extends BasePage {
    static heading = $('h2');
    static username = $('[name="username"]');
    static password = $('[name="password"]');
    static loginButton = $('.radius');
    static logoutButton = $('[href="/logout"]');
    static flashMessageBar = $('.flash');
    static loginDataList = $$('em');

    static async valid_username(): promise.Promise<string> {
        return this.loginDataList.get(0).getText();
    }

    static async valid_password(): promise.Promise<string> {
        return this.loginDataList.get(1).getText();
    }

    static async login(username, password): promise.Promise<void> {
        await this.username.sendKeys(username);
        await this.password.sendKeys(password);
        return this.loginButton.click()
    }
}
