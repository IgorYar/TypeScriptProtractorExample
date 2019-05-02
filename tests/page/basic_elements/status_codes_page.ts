import {BasePage} from '../base_page';
import {$, promise} from 'protractor';

export class StatusCodesPage extends BasePage {
    static pageContentText = $('p');
    static statusCodeListLink = $('[href="/status_codes"]');

    static code200 = $('[href="status_codes/200"]');
    static code301 = $('[href="status_codes/301"]');
    static code404 = $('[href="status_codes/404"]');
    static code500 = $('[href="status_codes/500"]');

    static async clickCodeLink(code): promise.Promise<void> {
        switch (code) {
            case '200': await this.code200.click();
                break;
            case '301': await this.code301.click();
                break;
            case '404': await this.code404.click();
                break;
            case '500': await this.code500.click();
                break;
        }
    }
}
