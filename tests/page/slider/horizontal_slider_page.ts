import {BasePage} from '../base_page';
import {$, promise, protractor} from 'protractor';

export class HorizontalSliderPage extends BasePage {
    static slider = $('[type="range"]');
    static range = $('#range');

    static move_direction = {
        right: 'right',
        left: 'left'
    };

    static async moveSlider(direction, step): promise.Promise<void> {
        switch (direction) {
            case this.move_direction.right: await this.loopedKeyPress(step, protractor.Key.ARROW_RIGHT);
                break;
            case this.move_direction.left: await this.loopedKeyPress(step, protractor.Key.ARROW_LEFT);
                break;
        }
    }

    static async loopedKeyPress(step, key): promise.Promise<void> {
        for (let i = 0; i < step; i++) {
            await this.slider.sendKeys(key);
        }
    }
}
