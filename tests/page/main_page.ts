import {BasePage} from './base_page';
import {$} from 'protractor';

export class MainPage extends BasePage {
    static heading = $('.heading');
    static exampleListTitle = $('h2');
    static addRemoveElementsLink = $('[href="/add_remove_elements/"]');
    static dropdownLink = $('[href="/dropdown"]');
    static statusCodesLink = $('[href="/status_codes"]');
    static formAuthenticationLink = $('[href="/login"]');
    static horizontalSliderLink = $('[href="/horizontal_slider"]');
}
