// /test/browser/android/pageobjects/login.page.js

export default class LoginPage {

    async open() {
        await browser.url('https://www.saucedemo.com');
        await this.usernameInput.waitForDisplayed({ timeout: 10000 });
    }

    async login(username, password) {
        await this.usernameInput.waitForEnabled({ timeout: 10000 });
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForEnabled({ timeout: 10000 });
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForClickable({ timeout: 10000 });
        await this.loginButton.click();
    }

    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }
}