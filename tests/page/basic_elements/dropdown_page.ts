import {BasePage} from '../base_page';
import {$, browser, promise} from 'protractor';

export class DropdownPage extends BasePage {
    static dropdownList = $('#dropdown');

    static async getDropdownText(): promise.Promise<string> {
        return browser.executeScript('return arguments[0].selectedOptions[0].text;', this.dropdownList);
    }

    static async selectDropdownOptionByOrder(order): promise.Promise<void> {
        await this.dropdownList.click();
        const options = this.dropdownList.$$('option');
        await options.get(order).click();
    }
}
