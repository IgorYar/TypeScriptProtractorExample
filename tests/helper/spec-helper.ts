import {promise, browser} from 'protractor';

export class SpecHelper {
    static async open(url = browser.baseUrl): promise.Promise<void> {
        await browser.get(url);
    }
}
