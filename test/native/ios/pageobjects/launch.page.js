// test/native/ios/pageobjects/launch.page.js

export default class LaunchPage {

    // Main Page Name
    get mainPageTitle() {
        return $('~TestApp');
    }

    async getMainPageTitle() {
        await this.mainPageTitle.waitForDisplayed({ timeout: 5000 });
        return await this.mainPageTitle.getAttribute('label'); // returns string
    }
}