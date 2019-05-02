import {SpecHelper} from '../helper/spec-helper';
import {MainPage} from '../page/main_page';
import {LoginPage} from '../page/login/login_page';

describe ('Login test', () => {
    const INVALID_VALUE = 'qwerty';

    beforeEach(async () => {
        await SpecHelper.open();
        await MainPage.formAuthenticationLink.click();
    });

    describe ('when Login page loaded', () => {
        it('heading should have correct text', async () => {
            expect(await LoginPage.heading.getText()).toEqual('Login Page');
        })
    });

    describe ('when invalid username', () => {
        beforeEach(async () => {
            await LoginPage.login(INVALID_VALUE, LoginPage.valid_password());
        });

        it('heading should have correct text', async () => {
            expect(await LoginPage.flashMessageBar.getText()).toContain('Your username is invalid!');
        })
    });

    describe ('when invalid password', () => {
        beforeEach(async () => {
            await LoginPage.login(LoginPage.valid_username(), INVALID_VALUE);
        });

        it('heading should have correct text', async () => {
            expect(await LoginPage.flashMessageBar.getText()).toContain('Your password is invalid!');
        })
    });

    describe ('when valid login data', () => {
        beforeEach(async () => {
            await LoginPage.login(LoginPage.valid_username(), LoginPage.valid_password());
        });

        it('success login message should appear, heading and logout button should have correct text', async () => {
            expect(await LoginPage.flashMessageBar.getText()).toContain('You logged into a secure area!');
            expect(await LoginPage.heading.getText()).toEqual('Secure Area');
            expect(await LoginPage.logoutButton.getText()).toEqual('Logout');
        });

        it('after logout heading should have correct text', async () => {
            await LoginPage.logoutButton.click();
            expect(await LoginPage.heading.getText()).toContain('Login Page');
        })
    });
});
