import {BasePage} from '../base_page';
import {$} from 'protractor';

export class AddRemoveElementsPage extends BasePage {
    static addElementButton = $('[onclick="addElement()"]');
    static deleteElementButton = $('[onclick="deleteElement()"]');
}
