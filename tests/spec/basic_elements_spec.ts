import {SpecHelper} from '../helper/spec-helper';
import {MainPage} from '../page/main_page';
import {AddRemoveElementsPage} from '../page/basic_elements/add_remove_elements_page';
import {DropdownPage} from '../page/basic_elements/dropdown_page';
import {StatusCodesPage} from '../page/basic_elements/status_codes_page';

describe ('Basic elements test', () => {
    describe ('when Main page loaded', () => {
        beforeAll(async () => {
            await SpecHelper.open();
        });

        it('heading and example list should have correct text', async () => {
            expect(await MainPage.heading.getText()).toEqual('Welcome to the-internet');
            expect(await MainPage.exampleListTitle.getText()).toEqual('Available Examples');
        })
    });

    describe ('when Add/Remove Elements page loaded', () => {
        beforeAll(async () => {
            await SpecHelper.open();
            await MainPage.addRemoveElementsLink.click();
        });

        it('heading and Add Element button should have correct text, ' +
            'Add Element button should be visible, ' +
            'Delete Element button should not exist', async () => {
            expect(await AddRemoveElementsPage.heading.getText()).toEqual('Add/Remove Elements');
            expect(await AddRemoveElementsPage.addElementButton.isEnabled()).toBeTruthy();
            expect(await AddRemoveElementsPage.addElementButton.getText()).toEqual('Add Element')
            expect(await AddRemoveElementsPage.deleteElementButton.isPresent()).toBeFalsy();
        });

        describe ('when Add Element button clicked', () => {
            beforeAll(async () => {
                await AddRemoveElementsPage.addElementButton.click();
            });

            afterAll(async () => {
                await AddRemoveElementsPage.deleteElementButton.click();
            });

            it('Delete button should exist and should have correct text', async () => {
                expect(await AddRemoveElementsPage.deleteElementButton.isEnabled()).toBeTruthy();
                expect(await AddRemoveElementsPage.deleteElementButton.getText()).toEqual('Delete');
            })
        });

        describe ('when Delete Element button clicked', () => {
            beforeAll(async () => {
                await AddRemoveElementsPage.addElementButton.click();
                await AddRemoveElementsPage.deleteElementButton.click();
            });

            it('Delete button should not exist', async () => {
                expect(await AddRemoveElementsPage.deleteElementButton.isPresent()).toBeFalsy();
            })
        });
    });

    describe('when Dropdown page loaded', () => {
        beforeAll(async () => {
            await SpecHelper.open();
            await MainPage.dropdownLink.click();
        });

        it('heading should have correct text and dropdown list should have text for blank list', async () => {
            expect(await DropdownPage.heading.getText()).toEqual('Dropdown List');
            expect(await DropdownPage.getDropdownText()).toEqual('Please select an option');
        });

        ["1", "2"].forEach((order) => {
            describe(`when option ${order} selected`, () => {
                it(`dropdown list should have text for option ${order} selected`, async () => {
                    await DropdownPage.selectDropdownOptionByOrder(order);
                    expect(await DropdownPage.getDropdownText()).toEqual(`Option ${order}`);
                });
            });
        });
    });

    describe('when Status Code page loaded', () => {
        beforeAll(async () => {
            await SpecHelper.open();
            await MainPage.statusCodesLink.click();
        });

        it('heading should have correct text', async () => {
            expect(await DropdownPage.heading.getText()).toEqual('Status Codes');
        });

        ["200", "301", "404", "500"].forEach((code) => {
            describe(`when ${code} status code link clicked`, () => {
                it(`page content should have ${code} status code`, async () => {
                    await StatusCodesPage.clickCodeLink(code);
                    expect(await StatusCodesPage.pageContentText.getText())
                        .toContain(`This page returned a ${code} status code`);
                    await StatusCodesPage.statusCodeListLink.click();
                });
            });
        });
    });
});
