import {SpecHelper} from '../helper/spec-helper';
import {MainPage} from '../page/main_page';
import {HorizontalSliderPage} from '../page/slider/horizontal_slider_page';

describe ('Login test', () => {
    beforeEach(async () => {
        await SpecHelper.open();
        MainPage.horizontalSliderLink.click();
    });

    describe('when Horizontal slider page loaded', () => {
        it('heading should have correct text', async () => {
            expect(await HorizontalSliderPage.heading.getText()).toEqual('Horizontal Slider');
        })
    });

    describe('when move slider', () => {
        const RIGHT_STEPS_NUMBER = 5;
        const LEFT_STEPS_NUMBER = 2;
        const STEP_MULTIPLIER = 0.5;
        const RIGHT_DIRECTION = HorizontalSliderPage.move_direction.right;
        const LEFT_DIRECTION = HorizontalSliderPage.move_direction.left;

        beforeEach(async () => {
            await HorizontalSliderPage.moveSlider(RIGHT_DIRECTION, RIGHT_STEPS_NUMBER);
        });

        describe('to the right', () => {
            it('the range should have correct value', async () => {
                expect(await HorizontalSliderPage.range.getText()).toEqual(`${RIGHT_STEPS_NUMBER/2.0}`);
            })
        });

        describe('to the right and then to the left', () => {
            beforeEach(async () => {
                await HorizontalSliderPage.moveSlider(LEFT_DIRECTION, LEFT_STEPS_NUMBER);
            });

            it('the range should have correct value', async () => {
                expect(await HorizontalSliderPage.range.getText())
                    .toEqual(`${RIGHT_STEPS_NUMBER*STEP_MULTIPLIER - LEFT_STEPS_NUMBER*STEP_MULTIPLIER}`);
            })
        });
    });
});
