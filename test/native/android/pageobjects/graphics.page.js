// /test/native/android/pageobjects/graphics.page.js

export default class GraphicsPage {

    async openGraphics() {
        await this.graphicsMenu.waitForDisplayed();
        await this.graphicsMenu.click();
    }

    async getXfermodesTitle() {
        await this.scrollToXfermodes();
        await this.xfermodesOptionText.waitForDisplayed();
        return await this.xfermodesOptionText.getText();
    }

    async scrollToXfermodes() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true))' +
            '.scrollIntoView(new UiSelector().text("Xfermodes"))');
    }

    get graphicsMenu() {
        return $('~Graphics');
    }

    get xfermodesOptionText() {
        return $('android=new UiSelector().text("Xfermodes")')
    }
}